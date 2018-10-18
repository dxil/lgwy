const User = require('../model/user')

exports.add = async (ctx, next) => {
  let body,
    _userDoc,
    userDoc,
    UserModel

  body = ctx.request.body
  if (!body.openid || !body.nickName) {
    ctx._error = {
      code: -1000,
      msg: 'params error!!'
    }
    return next()
  }

  _userDoc = await User.findOne({openid: body.openid})

  if (_userDoc) {
    ctx._error = {
      code: -2001,
      msg: '用户已存在!!'
    }
    return next()
  }

  UserModel = new User({
    openid: body.openid,
    nickName: body.nickName
  })

  userDoc = await UserModel.save()

  if (userDoc) {
    ctx._result = {
      openid: userDoc.openid,
      nickName: userDoc.nickName,
      _id: userDoc._id
    }
  }
  return next()
}

exports.get = (ctx, next) => {
  let params = ctx.params

  if (!params.labelid) {
    ctx._error = {
      code: -1000,
      msg: 'params error!!'
    }
    return next()
  }

  return next()
}

exports.update = (ctx, next) => {
  console.log(ctx.params)

  return next()
}

exports.delete = (ctx, next) => {
  console.log(ctx.params)

  return next()
}