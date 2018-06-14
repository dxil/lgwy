const mongoose = require('mongoose')
const Utils = require('../../utils/utils')
const basicSchema = require('./basicSchema')

const Schema = mongoose.Schema

const PatientSchema = new Schema(Utils.extend({
  name: {
    type: String
  },
  sex: {
    type: String
  },
  age: {
    type: Number
  }
}), basicSchema)

module.exports = PatientSchema
