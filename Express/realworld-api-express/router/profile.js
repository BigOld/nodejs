const express = require('express')

const router = express.Router()

// 获取用户资料
router.get('/:username', async (req, res, next) => {
  try {
    res.send('get /profile/:username')
  } catch (err) {
    next(err)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    res.send('post /profile/:username/follow')
  } catch (err) {
    next(err)
  }
})

// 取消关注用户
router.delete('/:username/fallow', async (req, res, next) => {
  try {
    res.send('delete /profile/:username/fallow')
  } catch (err) {
    next(err)
  }
})

module.exports = router