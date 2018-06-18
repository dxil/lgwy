const router = require('koa-router')()
const Label = require('../controller/label')

// 类型
router.get('/:id', Label.add)

module.exports = router.routes()
