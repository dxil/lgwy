function extend (obj, ext, deep) {
  if (!deep) {
    return Object.assign({}, obj, ext)
  }
  return Object.assign({}, obj, ext)
}

module.exports = {
  extend: extend
}
