const Label = require('../model/label')
const utils = require('../utils/utils')

exports.add = async (ctx, next) => {
  let body = ctx.request.body
  let LabelModel,
    labelDoc,
    userId

  if (!body.type || !body.userId || !(userId = utils.getObjectId(body.userId))) {
    ctx._error = {
      code: -1000,
      msg: 'params error!!'
    }
    return next()
  }

  LabelModel = new Label({
    type: body.type,
    userId: userId
  })

  labelDoc = await LabelModel.save()

  if (labelDoc) {
    ctx._result = {
      type: labelDoc.type,
      userId: labelDoc.userId,
      _id: labelDoc._id
    }
  }
  return next()
}

exports.get = async (ctx, next) => {
  let params = ctx.query
  let labelDoc

  // 传入用户的手机号/openid查找
  if (!params.openId) {
    ctx._error = {
      code: -1000,
      msg: 'params error!!'
    }
    return next()
  }
  labelDoc = await Label.find({
    openId: params.openId
  })

  ctx._result = {
    data: labelDoc
  }

  return next()
}

exports.update = async (ctx, next) => {
  let body = ctx.request.body
  let labelId = ctx.params.id
  let labelDoc

  if (!labelId || !body.type || !(labelId = utils.getObjectId(labelId))) {
    ctx._error = {
      code: -1000,
      msg: 'params error!!'
    }
    return next()
  }

  labelDoc = await Label.findOneAndUpdate({_id: labelId}, {type: body.type})

  if (!labelDoc) {
    ctx._error = {
      code: -1101,
      msg: '类型不存在!'
    }
  } else {
    ctx._result = {
      type: body.type,
      _id: labelDoc._id
    }
  }
  return next()
}

exports.delete = (ctx, next) => {
  return next()
}
