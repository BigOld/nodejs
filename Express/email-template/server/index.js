const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const api = require('./middleware/api')
const app = express()
const templateRouter = require('./routes/')

mongoose.connect('mongodb://127.0.0.1:27017/template', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(api)

app.use('/xhr/v1', templateRouter)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})



app.listen(8080, () => {
  console.log('server is running on 8080')
})

module.exports = app