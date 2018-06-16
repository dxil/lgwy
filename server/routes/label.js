const router = require('koa-router')()
// const Movie = require('../controllers/movie')

// 类型
router.get('/:id', (ctx, next) => {
  console.log(ctx.params)
  ctx._result = ctx.params
  return next()
})

module.exports = router.routes()
