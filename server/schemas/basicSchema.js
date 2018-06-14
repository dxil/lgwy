module.exports = {
  createdBy: {
    type: String,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  updatedBy: {
    type: String,
    require: true
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
}
