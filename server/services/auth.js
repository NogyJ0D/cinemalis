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
    const dehashedPassword = await bcrypt.compare(password, user.password)
    if (user && dehashedPassword) {
      const data = {
        userName: user.userName,
        email: user.email,
        role: user.role
      }
      const token = jwt.sign(data, jwtSecret, { expiresIn: '1d' })
      return { success: true, data, token }
    } else {
      return { success: false, message: 'Las credenciales no coinciden.' }
    }
  }

  async signup (userData) {
    if (await this.users.getByEmail(userData.email)) {
      return { success: false, message: 'Usuario ya registrado.' }
    } else {
      const salt = bcrypt.genSalt(10)
      userData.password = await bcrypt.hash(userData.password, salt)
      const user = await this.users.create(userData)
      const data = {
        userName: user.userName,
        email: user.email,
        role: user.role
      }
      const token = jwt.sign(data, jwtSecret, { expiresIn: '1d' })
      return { success: true, data, token }
    }
  }
}

module.exports = Auth
