const mongoose = require('mongoose')
const Utils = require('../utils/utils')
const basicSchema = require('./basicSchema')

const Schema = mongoose.Schema

const UserSchema = new Schema(Utils.extend({
  openid: {
    type: String,
    require: true
  },
  sex: {
    type: Number // 0代表男 1代表女
  },
  nickName: {
    type: String,
    require: true
  },
  avatar: {
    type: String
  },
  phoneNumber: {
    type: String
  }
}, basicSchema))

module.exports = UserSchema
