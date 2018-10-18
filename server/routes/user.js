const router = require('koa-router')()
const User = require('../controller/user')

// 获取用户 query
router.get('/:userId', User.get)

// 新增用户
router.post('/', User.add)

// 修改用户
router.put('/:id', User.update)

// 删除用户
router.delete('/:id', User.delete)

module.exports = router.routes()
