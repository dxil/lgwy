const mongoose = require('mongoose')
const Utils = require('../utils/utils')
const basicSchema = require('./basicSchema')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const PatientSchema = new Schema(Utils.extend({
  name: {
    type: String
  },
  sex: {
    type: Number // 0代表男 1代表女
  },
  age: {
    type: Number
  },
  userId: {
    type: ObjectId,
    require: true
  }
}, basicSchema))

module.exports = PatientSchema
