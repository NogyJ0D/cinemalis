const { mongoose } = require('../config/db')

const movieModel = mongoose.model(
  'movies',
  new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: String, default: undefined },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    banner: { type: String, required: true },
    poster: { type: String, required: true },
    editor: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  })
)

module.exports = movieModel
