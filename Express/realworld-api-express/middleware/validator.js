const { validationResult } = require('express-validator')

module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))
    
    const error = validationResult(req)
    if(error.isEmpty()) {
      return next()
    }
    res.status(400).json({ error: error.array() })
  }
}