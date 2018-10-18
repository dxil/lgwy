const router = require('koa-router')()
const Label = require('../controller/label')

// 获取类型 query labelid
router.get('/', Label.get)

// 新增类型
router.post('/', Label.add)

// 修改类型
router.put('/:id', Label.update)

// 删除类型
router.delete('/:id', Label.delete)

module.exports = router.routes()
