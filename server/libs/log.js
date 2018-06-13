const log4js = require('koa-log4')
const log4jsConfig = require('./config').get('log4js')
log4js.configure(log4jsConfig)

const logger = log4js.getLogger('console') // any category will work
console.log = logger.info.bind(logger)

module.exports = log4js
