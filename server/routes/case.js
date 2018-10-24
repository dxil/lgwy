const router = require('koa-router')()
const Case = require('../controller/case')

// 获取病例
router.get('/:caseId', Case.get)

// 新增病例
router.post('/', Case.add)

// 修改病例
router.put('/:id', Case.update)

// 删除病例
router.delete('/:id', Case.delete)

module.exports = router.routes()
