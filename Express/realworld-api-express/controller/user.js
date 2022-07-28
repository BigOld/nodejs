const { User } = require('../model')

// 用户登录
exports.login = async (req, res) => {
  try {
    res.send('login')
  } catch (err) {
    next(err)
  }
}

// 用户注册
exports.register = async (req, res) => {
  try {
    // 1 获取请求体数据
    console.log(req.body)
    // 2 数据验证
    // 2.1基本数据验证
    // 2.2业务数据验证

    // 3 验证通过，将数据保存到数据库
    const user = new User(req.body.user)
    await user.save()
    // 4 发送成功相应

    res.status(201).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async (req, res) => {
  try {
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}

// 更新当前登录用户
exports.updateCurrentUser = async (req, res) => {
  try {
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}