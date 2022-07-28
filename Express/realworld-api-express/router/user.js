const express = require('express')
const userCtrl = require('../controller/user')

const router = express.Router()

// 用户登录
router.post('/users/login', userCtrl.login)

// 用户注册
router.post('/users', userCtrl.register)

// 获取用户信息
router.get('/user', userCtrl.getCurrentUser)

// 更新当前登录用户
router.put('/user', userCtrl.updateCurrentUser)


module.exports = router