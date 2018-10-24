const Router = require('koa-router')
const router = new Router()

router.use(function (ctx, next) {
  // todo: 登陆状态
  // const _user = ctx.session.user

  // ctx.state.user = _user

  return next()
})

// router.use('/', require('../routes/index')) // 暂无首页
router.use('/label', require('../routes/label'))
router.use('/user', require('../routes/user'))
router.use('/case', require('../routes/case'))
// router.use('/admin', require('../routes/admin')) // todo 后台统计

router.use(function (ctx, next) {
  // todo: 做所有的数据错误返回以及成功返回的拦截
  // const _user = ctx.session.user

  // ctx.state.user = _user

  let error = ctx._error
  if (error) {
    ctx.body = {
      code: error.code, // 0 成功 -1 参数错误 -2 内部错误
      msg: 'error',
      errMsg: error.msg,
      data: {},
      time: new Date()
    }
    return next()
  }

  ctx.body = {
    code: 0, // 0 成功 -1 参数错误 -2 内部错误
    msg: 'success',
    data: ctx._result,
    time: new Date()
  }

  return next()
})
module.exports = router
