const mongoose = require('mongoose')
const Utils = require('../../utils/utils')
const basicSchema = require('./basicSchema')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CaseSchema = new Schema(Utils.extend({
  labelId: {
    type: ObjectId,
    require: true
  },
  userId: {
    type: ObjectId,
    require: true
  },
  label: {
    type: String,
    require: true
  },
  patientId: {
    type: ObjectId
  },
  patientName: {
    type: String
  },
  patientAge: {
    type: Number
  },
  patientSex: {
    type: String
  },
  diagnosis: { // 诊断
    type: String
  },
  chiefComplaint: { // 主诉
    type: String
  },
  dialectical: { // 辩证
    type: String
  },
  prescription: { // 处方
    type: String
  }
}), basicSchema)

module.exports = CaseSchema
