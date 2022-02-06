const express = require('express')
const Movies = require('../services/movies')

const movies = app => {
  const router = express.Router()
  const moviesServices = new Movies()
  app.use('/movies', router)

  router.get('/:id', async (req, res) => {
    const { id } = req.params
    const movie = await moviesServices.get(id)
    return res.status(200).json(movie)
  })

  router.get('/', async (req, res) => {
    const movies = await moviesServices.getAll()
    return res.status(200).json(movies)
  })

  router.post('/create', async (req, res) => {
    const movie = await moviesServices.create(req.body)
    return res.status(201).json(movie)
  })

  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const movie = await moviesServices.update(id, req.body)
    return res.status(200).json(movie)
  })

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const movie = await moviesServices.delete(id)
    return res.status(200).json(movie)
  })
}

module.exports = movies
