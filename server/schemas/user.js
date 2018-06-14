const mongoose = require('mongoose')
const Utils = require('../../utils/utils')
const basicSchema = require('./basicSchema')

const Schema = mongoose.Schema

const UserSchema = new Schema(Utils.extend({
  openid: {
    type: String,
    require: true
  },
  nickName: {
    type: String,
    require: true
  },
  avatar: {
    type: String
  }
}), basicSchema)

module.exports = UserSchema
