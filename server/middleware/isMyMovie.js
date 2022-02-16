const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const isMyMovie = (req, res, next) => {
  const { editor } = req.params
  const token = req.cookies.token
  const decoded = jwt.verify(token, jwtSecret)

  if (editor === decoded.id) return next()
  else return res.status(401).json({ success: false, message: 'No sos el editor de esta película.' })
}

module.exports = isMyMovie

/*
  RESUMEN:
    El id de la película a editar y el id del usuario se pasan mediante la request. Entonces, si el id del usuario dentro del token (que no puede falsearse porque está firmado por el secreto) es igual al id que se está pasando, se puede editar la película porque no es ningún crackeo.
*/
