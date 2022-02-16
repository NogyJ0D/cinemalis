const Users = require('./users')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')
const bcrypt = require('bcrypt')

class Auth {
  constructor () {
    this.users = new Users()
  }

  async login (email, password) {
    const user = await this.users.getByEmail(email)
    if (user.err) return { success: false, message: 'Las credenciales no coinciden.' }
    const dehashed = await bcrypt.compare(password, user.password)

    if (user && dehashed) {
      const dataShowed = {
        userName: user.userName,
        email: user.email,
        role: user.role,
        id: user._id
      }
      const token = jwt.sign(dataShowed, jwtSecret, { expiresIn: '1d' })
      return { success: true, dataShowed, token }
    } else return { success: false, message: 'Las credenciales no coinciden.' }
  }

  async tokenLogin (cookies) {
    if (!cookies.token) return { status: 'No-Auth', message: 'A token is required for this process.' }

    try {
      const decoded = jwt.verify(cookies.token, jwtSecret)
      const userData = { userName: decoded.userName, email: decoded.email, role: decoded.role, id: decoded.id }
      const newToken = jwt.sign(userData, jwtSecret, { expiresIn: '1d' })
      return { success: true, userData, newToken }
    } catch (err) {
      return { success: false, status: 'Expirado', message: 'Se requiere un token válido para este proceso.' }
    }
  }

  async signup (userData) {
    const emailExist = await this.users.getByEmail(userData.email)
    const userExist = await this.users.getByUsername(userData.userName)
    // console.log(emailExist, userExist)

    if (emailExist || userExist) {
      return { success: false, message: 'El usuario ya existe.' }
    } else {
      userData.role = 1
      const salt = await bcrypt.genSalt(10)
      userData.password = await bcrypt.hash(userData.password, salt)

      const user = await this.users.create(userData)
      const dataShowed = {
        userName: user.userName,
        email: user.email,
        role: user.role,
        id: user._id
      }
      const token = jwt.sign(dataShowed, jwtSecret, { expiresIn: '1d' })

      return { success: true, dataShowed, token }
    }
  }
}

module.exports = Auth
