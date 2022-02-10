const express = require('express')
const Users = require('../services/users')

const users = app => {
  const router = express.Router()
  const usersServices = new Users()
  app.use('/users', router)

  router.get('/', async (req, res) => {
    const users = await usersServices.getAll()
    return res.status(200).json(users)
  })
  router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await usersServices.get(id)
    return res.status(200).json(user)
  })

  router.post('/', async (req, res) => {
    const user = await usersServices.create(req.body)
    return res.status(201).json(user)
  })

  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const user = await usersServices.update(id, req.body)
    return res.status(200).json(user)
  })

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const user = await usersServices.delete(id)
    return res.status(200).json(user)
  })
}

module.exports = users
