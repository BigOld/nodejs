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
exports.register = async (req, res, next) => {
  try {
    // 1 获取请求体数据
    
    // 2 数据验证
    // 2.1基本数据验证
    // 2.2业务数据验证

    // 3 验证通过，将数据保存到数据库
    let user = new User(req.body.user)
    await user.save()
    user = user.toJSON() // user 为 mongoose 处理后的对象不能直接删除password 需要转换为json后再删除
    
    delete user.password // 手动删除 user 中的 password
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