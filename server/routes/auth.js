const express = require('express')
const Auth = require('../services/auth')

function auth (app) {
  const router = express.Router()
  const authService = new Auth()
  app.use('/auth', router)

  router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const response = await authService.login(email, password)

    if (response.success === false) return res.status(401).json({ success: false, response })
    else {
      return res
        .status(200)
        .cookie('token', response.token, {
          httpOnly: true,
          secure: true,
          sameSite: 'none'
        })
        .json({ success: true, response })
    }
  })

  router.get('/tokenlogin', async (req, res) => {
    const cookies = req.cookies
    const response = await authService.tokenLogin(cookies)

    if (response.success === false) return res.status(401).json({ success: false, response })
    else {
      return res
        .status(200)
        .cookie('token', response.newToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'none'
        })
        .json({ success: true, response })
    }
  })

  router.post('/signup', async (req, res) => {
    const user = req.body
    const response = await authService.signup(user)

    if (response.success === false) return res.status(403).json({ success: false, response })
    else {
      return res
        .status(200)
        .cookie('token', response.token, {
          httpOnly: true,
          secure: true,
          sameSite: 'none'
        })
        .json({ success: true, response })
    }
  })

  router.post('/logout', (req, res) => {
    return res
      .cookie('token', '', {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        expires: new Date()
      })
      .json({ loggedOut: true })
  })
}

module.exports = auth
