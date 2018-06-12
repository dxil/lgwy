/**
 * @author xilin
 * @date 2018-06-12
 * @fileoverview 启动KOA服务
 */

const Koa = require('koa')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const router = require('./router/routes')
const config = require('./config/config').dev
// const DB = require('../db')
// const log4js = require('../../libs/log')
const logger = require('./logger')

const server = new Koa()

module.exports = {
  start: (port, natsdClient) => {
    port = port || config.koaConfig.port
    // 错误日志和访问日志
    // server.use(log4js.koaLogger(apiServerLog, {
    //   level: 'auto'
    // }))

    server.use(bodyParser())
    server.use(json()).use(cors())

    server.use(router.routes()).use(router.allowedMethods())
    server.listen(port, () => {
      logger.info(`koa-server listenning at port: ${port}`)
    })
  }
}
