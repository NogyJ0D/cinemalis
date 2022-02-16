const express = require('express')
const Movies = require('../services/movies')
const { isEditor } = require('../middleware/auth')
const isMyMovie = require('../middleware/isMyMovie')

const movies = app => {
  const router = express.Router()
  const moviesServices = new Movies()
  app.use('/movies', router)

  router.get('/:id', async (req, res) => {
    const { id } = req.params
    const movie = await moviesServices.get(id)

    if (movie.err) return res.status(404).json({ success: false, movie })
    else return res.status(200).json({ success: true, movie })
  })

  router.get('/', async (req, res) => {
    const movies = await moviesServices.getAll()

    if (movies.err) return res.status(404).json({ success: false, movies })
    else return res.status(200).json({ success: true, movies })
  })

  router.get('/last/:date', async (req, res) => {
    const { date } = req.params
    const movies = await moviesServices.getLast(date)

    if (movies.err) return res.status(404).json({ success: false, movies })
    else return res.status(200).json({ success: true, movies })
  })

  router.get('/ranking/:sorter', async (req, res) => {
    const { sorter } = req.params
    const movies = await moviesServices.getRanking10(sorter)

    if (movies.err) return res.status(404).json({ success: false, movies })
    else return res.status(200).json({ success: true, movies })
  })

  router.get('/editor/:id', isEditor, async (req, res) => {
    const { id } = req.params
    const movies = await moviesServices.getByEditorId(id)

    if (movies.err) return res.status(400).json({ success: false, movies })
    else return res.status(200).json({ success: true, movies })
  })

  router.post('/create', isEditor, async (req, res) => {
    const movie = await moviesServices.create(req.body)

    if (movie.err) return res.status(400).json({ success: false, movie })
    else return res.status(201).json({ success: true, movie })
  })

  router.put('/:movie/:editor', isEditor, isMyMovie, async (req, res) => {
    const { movie, editor } = req.params
    const updatedMovie = await moviesServices.update(movie, editor, req.body)

    if (updatedMovie.err) return res.status(403).json({ success: false, updatedMovie })
    else return res.status(200).json({ success: true, updatedMovie })
  })

  router.delete('/:id', isEditor, async (req, res) => {
    const { id } = req.params
    const movie = await moviesServices.delete(id)

    if (movie.err) return res.status(400).json({ success: false, movie })
    else return res.status(200).json({ success: true, movie })
  })
}

module.exports = movies
