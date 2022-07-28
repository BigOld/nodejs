const mongoose = require('mongoose')
const baseModel = require('./base-model')

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