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
    res.send('register')
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