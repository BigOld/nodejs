const express = require('express')
const Template = require('../model/template')
const router = express.Router()

router.get('/template', async (req, res) => {
  const temps = await Template.find({}).sort({update_at: -1})
  res.json({
    code: 200,
    msg: 'success',
    data: temps
  })
})

module.exports = router