const mongoose = require('mongoose')
const Utils = require('../utils/utils')
const basicSchema = require('./basicSchema')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const LabelSchema = new Schema(Utils.extend({
  type: {
    type: String,
    require: true
  },
  userId: {
    type: ObjectId,
    require: true
  },
  openId: {
    type: String,
    require: true
  }
}, basicSchema))

module.exports = LabelSchema
