const mongoose = require('mongoose')
const Schema = require('../schemas')

module.exports = mongoose.model('User', Schema.UserSchema)
