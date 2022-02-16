const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

// Paso 1: Comprobar rol
const isRegular = (req, res, next) => {
  req.neededRole = 1
  verifyToken(req, res, next)
}

const isEditor = (req, res, next) => {
  req.neededRole = 2
  verifyToken(req, res, next)
}

const isAdmin = (req, res, next) => {
  req.neededRole = 3
  verifyToken(req, res, next)
}

const isOwner = (req, res, next) => {
  req.neededRole = 4
  verifyToken(req, res, next)
}

// Paso 2: verificar token
const verifyToken = (req, res, next) => {
  const auth = req.header('Authorization')
  const cookies = req.cookies

  // console.log(auth, cookies)

  if (!auth && !cookies.token) {
    return res.status(403).json({
      success: false,
      status: 'Sin autenticación',
      message: 'Se requiere un token para este proceso.'
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
    return res.status(403).json({
      success: false,
      status: 'Expirado',
      message: 'Se requiere un token válido para este proceso.'
    })
  }
}

// Paso 4: validar rol
const validateRole = (req, res, next) => {
  // console.log(req.user.role, req.neededRole)

  if (req.user.role >= req.neededRole) {
    return next()
  }
  return res.status(403).json({
    success: false,
    status: 'Permisos insuficientes',
    message: 'Se requiere un rol superior para este proceso.'
  })
}

module.exports = { isRegular, isEditor, isAdmin, isOwner }
