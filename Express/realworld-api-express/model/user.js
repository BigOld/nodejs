const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value), // 赋值是进行一个格式处理
    select: false // 查询时不会显示这个数据
  },
  bio: { // 用户个人介绍
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
})

module.exports = userSchema