const deepAssign = require('deep-assign')

class Config {
  constructor () {
    this.configs = {
      log4js: require('../config/log4js.conf'),
      server: require('../config/server.conf')
    }
    this.names = Object.keys(this.configs)

    this.names.forEach(name => {
      this.configs[name] = this._getEnvConfig(this.configs[name])
    })
  }
  _getEnvConfig (config) {
    let env = ['dev', 'prod', 'test'].indexOf(process.env.NODE_ENV) > -1 ? process.env.NODE_ENV : 'dev'
    return config[env]
  }
  mixins (opts) {
    for (let i in opts) {
      if (opts.hasOwnProperty(i) && this.has(i)) {
        var config = opts[i]
        deepAssign(this.configs[i], config)
      }
    }
    return this.configs
  }
  has (name) {
    return this.names.indexOf(name) > -1
  }
  get (name) {
    if (this.has(name)) return this.configs[name]
    return null
  }
  set (name, key, val) {
    if (this.has(name)) {
      this.configs[name][key] = val
      return this.configs[name]
    }
    return null
  }
}

module.exports = new Config()
