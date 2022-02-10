const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

// Paso 1: Comprobar rol
const isRegular = (req, res, next) => {
  req.neededRole = 'REGULAR'
  verifyToken(req, res, next)
}

const isAdmin = (req, res, next) => {
  req.neededRole = 'ADMIN'
  verifyToken(req, res, next)
}

// Paso 2: verificar token
const verifyToken = (req, res, next) => {
  const auth = req.header('Authorization')
  const cookies = req.cookies

  if (!auth && !cookies.token) {
    return res.status(403).json({
      status: 'No-Auth',
      message: 'A token is required for this process.'
    })
  }

  if (cookies.token) {
    handleToken(cookies.token, req, res, next)
  } else {
    const token = auth.split(' ')[1]
    handleToken(token, req, res, next)
  }
}

// Paso 3: decodificar el token
const handleToken = (token, req, res, next) => {
  try {
    const decoded = jwt.verify(token, jwtSecret)
    req.user = decoded
    return validateRole(req, res, next)
  } catch (err) {
    console.log('JWT error:', err.message)
    return res.status(403).json({
      status: 'Expired',
      message: 'A valid token is required for this process.'
    })
  }
}

// Paso 4: validar rol
const validateRole = (req, res, next) => {
  if (req.user.role === 'ADMIN' || req.user.role === req.neededRole) {
    next()
  }
  return res.status(403).json({
    status: 'Insufficient permissions',
    message: 'A superior role is required for this action.'
  })
}

module.exports = { isRegular, isAdmin }
