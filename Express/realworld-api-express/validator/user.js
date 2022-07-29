const validate = require('../middleware/validator')
const { body } = require('express-validator')
const { User } = require('../model')
const md5 = require('../util/md5')


exports.register = validate([
  body('user.username') // 验证 body 中的参数
    .notEmpty().withMessage('用户名不能为空')
    .custom(async username => { // 自定义验证方法
      const user = await User.findOne({username})
      if(user) {
        return Promise.reject('用户名已存在')
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),
  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不对')
    .bail() // 前面验证失败就不会向后进行
    .custom(async email => { // 自定义验证方法
      const user = await User.findOne({email})
      if(user) {
        return Promise.reject('邮箱已存在')
      }
    })
])

exports.login = [ // 第一个验证通过之后在验证邮箱密码的有效性，利用 express 中间件的性质
  validate([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空')
  ]),
  validate([
    body('user.email').custom(async (email, { req }) => {
      const user = await User.findOne({email})
      .select(['email', 'username', 'bio', 'image', 'password']) // 把 password 加进来，加上 select 之后只包含这些信息和 id
      if(!user) {
        return Promise.reject('用户不存在')
      }
      req.user = user
    })
  ]),
  validate([
    body('user.password').custom(async (password, { req }) => {
      if(md5(password) !== req.user.password) {
        return Promise.reject('密码错误')
      }
    })
  ])
]