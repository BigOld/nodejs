const mongoose = require('mongoose')
const baseModel = require('./base-model')

const articleSchema = new mongoose.Schema({
  ...baseModel,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tagList: {
    type: [String],
    default: null
  },
  favoritesCount: {
    type: Number,
    default: 0
  }
})

module.exports = articleSchema