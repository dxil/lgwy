const mongoose = require('mongoose')

const resTpl = {
  suc (data = null) {
    return {
      code: 0,
      data,
      msg: ''
    }
  },
  error (data = null, msg = '') {
    return {
      code: 1,
      data,
      msg
    }
  }
}

exports.extend = function (obj, ext, deep) {
  if (!deep) {
    return Object.assign({}, obj, ext)
  }
  return Object.assign({}, obj, ext)
}

exports.resTpl = function (type, data = null, msg = '') {
  return resTpl[type](data, msg)
}

exports.getObjectId = function (id) {
  try {
    return mongoose.Types.ObjectId(id)
  } catch (e) {
    return null
  }
}
