const router = require('koa-router')()
const User = require('../controller/user')

// 获取类型 query labelid
router.get('/', User.get)

// 新增类型
router.post('/', User.add)

// 修改类型
router.put('/:id', User.update)

// 删除类型
router.delete('/:id', User.delete)

module.exports = router.routes()
