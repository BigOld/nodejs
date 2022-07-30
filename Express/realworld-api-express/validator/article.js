const validate = require('../middleware/validator')
const { body } = require('express-validator')
const { article } = require('../model')
const  mongoose = require('mongoose')

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
])

exports.getArticle = validate([
  param('articleId').custom(async value => {
    if(!mongoose.isValidObjectId(value)){
      return Promise.reject('文章ID类型错误')
    }
  })
])