const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 3000 // PORT=5000 nodemon app.js

app.use('/api', router)

// 挂载异常处理中间件，凡在最后
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})