const express = require('express')
const mongoose = require('mongoose')
const app = express()
const templateRouter = require('./routes/template')

mongoose.connect('mongodb://127.0.0.1:27017/template', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use('/xhr/v1', templateRouter)



app.listen(8080, () => {
  console.log('server is running on 8080')
})