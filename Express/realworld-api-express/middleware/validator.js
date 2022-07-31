const { validationResult, buildCheckFunction } = require('express-validator')
const { isValidObjectId } = require('mongoose')

exports = module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))
    
    const error = validationResult(req)
    if(error.isEmpty()) {
      return next()
    }
    res.status(400).json({ error: error.array() })
  }
}

exports.isValidObjectId = (location, fields) => {
  return buildCheckFunction(location)(fields).custom(async value => {
    if(!isValidObjectId(value)) {
      return Promise.reject('ID 不是一个有效的 ObjectID')
    }
  })
}