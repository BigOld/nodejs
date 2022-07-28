const express = require('express')

const router = express.Router()

// 获取文章列表
router.get('/', async (req, res, next) => {
  try {
    res.send('get /')
  } catch (err) {
    next(err)
  }
})

// 获取用户关注的作者文章列表
router.get('/feed', async (req, res, next) => {
  try {
    res.send('get /feed')
  } catch (err) {
    next(err)
  }
})

// 获取文章
router.get('/:articleId', async (req, res, next) => {
  try {
    res.send('get /:articleId')
  } catch (err) {
    next(err)
  }
})

// 创建文章
router.post('/', async (req, res, next) => {
  try {
    res.send('post /')
  } catch (err) {
    next(err)
  }
})

// 更新文章
router.put('/:articleId', async (req, res, next) => {
  try {
    res.send('post /:articleId')
  } catch (err) {
    next(err)
  }
})

// 删除文章
router.delete('/:articleId', async (req, res, next) => {
  try {
    res.send('delete /:articleId')
  } catch (err) {
    next(err)
  }
})

// 添加文章评论
router.post('/:articleId/comments', async (req, res, next) => {
  try {
    res.send('post /:articleId/comments')
  } catch (err) {
    next(err)
  }
})

// 获取文章评论列表
router.get('/:articleId/comments', async (req, res, next) => {
  try {
    res.send('get /:articleId/comments')
  } catch (err) {
    next(err)
  }
})

// 删除文章评论
router.delete('/:articleId/comments/:id', async (req, res, next) => {
  try {
    res.send('delete /:articleId/comments/:id')
  } catch (err) {
    next(err)
  }
})

// 文章点赞
router.post('/:articleId/favorite', async (req, res, next) => {
  try {
    res.send('delete /:articleId/favorite')
  } catch (err) {
    next(err)
  }
})

// 文章点赞
router.delete('/:articleId/favorite', async (req, res, next) => {
  try {
    res.send('delete /:articleId/favorite')
  } catch (err) {
    next(err)
  }
})

module.exports = router