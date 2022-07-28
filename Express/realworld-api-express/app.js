const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000 // PORT=5000 nodemon app.js

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})