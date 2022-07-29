const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
  // 从请求头获取token
  let token = req.headers.authorzation
  token = token
    ? token.split('Bearer ')[1]
    : null
  if(!token) {
    return res.status(401).end()
  }
  // 验证token
  try{
    const decodedToken = await verify(token, jwtSecret)
    req.user = await User.findById(decodedToken.userId)
    next()
  } catch (err) {
    return res.status(500).end()
  }
  // 无效 - 相应401
  // 有效 把用户信息读取出来挂在到 req， 继续向后执行
}