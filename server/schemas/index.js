let Schema = {
  LabelSchema: require('./label'),
  UserSchema: require('./user'),
  CaseSchema: require('./case'),
  PatientSchema: require('./patient')
}

for (let sch in Schema) {
  if (Schema.hasOwnProperty(sch)) {
    attachSaveHooks(Schema[sch])
  }
}
function attachSaveHooks (schema) {
  schema.pre('save', function (next) {
    if (this.isNew) {
      this.createAt = this.updateAt = Date.now()
    } else {
      this.updateAt = Date.now()
    }
    next()
  })
}

module.exports = Schema
