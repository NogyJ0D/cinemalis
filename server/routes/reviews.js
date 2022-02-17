const express = require('express')
const { isRegular } = require('../middleware/auth')
const Reviews = require('../services/reviews')

const reviews = app => {
  const router = express.Router()
  const reviewsServices = new Reviews()
  app.use('/reviews', router)

  router.get('/', async (req, res) => {
    const reviews = await reviewsServices.getAll()

    if (reviews.err) return res.status(404).json({ success: false, reviews })
    else return res.status(200).json({ success: true, reviews })
  })

  router.get('/8', async (req, res) => {
    const reviews = await reviewsServices.get8()

    if (reviews.err) return res.status(404).json({ success: false, reviews })
    else return res.status(200).json({ success: true, reviews })
  })

  router.get('/get/:filter/:id', async (req, res) => {
    const { filter, id } = req.params
    const reviews = await reviewsServices.getByFilter(filter, id)

    if (reviews.err) return res.status(404).json({ success: false, reviews })
    else return res.status(200).json({ success: true, reviews })
  })

  router.post('/', isRegular, async (req, res) => {
    const review = await reviewsServices.create(req.body)

    if (review.err) return res.status(400).json({ success: false, review })
    else return res.status(201).json({ success: true, review })
  })

  router.put('/:id', isRegular, async (req, res) => {
    const { id } = req.params
    const review = await reviewsServices.update(id, req.body)

    if (review.err) return res.status(400).json({ success: false, review })
    else return res.status(200).json({ success: true, review })
  })
}

module.exports = reviews
