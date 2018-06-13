/**
 * @author xilin
 * @date 2018-06-12
 * @fileoverview 启动KOA服务
 */

const Koa = require('koa')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const mongoose = require('mongoose')
const router = require('./router/routes')
const config = require('./libs/config').get('server')
// const DB = require('../db')
// const log4js = require('../../libs/log')
const serverLog = require('./logger')

const server = new Koa()

const port = config.koaConfig.port
// 错误日志和访问日志
// server.use(log4js.koaLogger(apiServerLog, {
//   level: 'auto'
// }))

server.use(bodyParser())
server.use(json()).use(cors())
server.use(router.routes()).use(router.allowedMethods())

server.listen(port, () => {
  serverLog.info(`koa-server listenning at port: ${port}`)
})

mongoose.Promise = global.Promise
mongoose.connect(config.mongodb.url, () => {
  serverLog.info(`mongodb listenning at url: ${config.mongodb.url}`)
})
