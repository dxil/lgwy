/* eslint-env node, mocha */
// const chai = require('chai')
// const async = require('async')
const server = require('../')

// const serverConfig = require('../libs/config').get('server')

// const assert = chai.assert

describe('测试', () => {
  it('启动server以及mongodb服务', (done) => {
    server.start().then(() => done())
  })
  after(() => {
    // 如果不延迟退出进程，测试失败时，来不及输出mocha的日志
    setTimeout(() => {
      process.exit(0)
    }, 1000)
  })
})
