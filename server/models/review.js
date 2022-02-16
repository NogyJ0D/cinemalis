const { mongoose } = require('../config/db')
const { Schema } = mongoose

const reviewSchema = mongoose.model(
  'reviews',
  new Schema({
    userName: { type: String, required: true },
    userId: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    date: { type: Date, default: Date.now },
    movieId: { type: String, required: true },
    movieName: { type: String, required: true }
  })
)

module.exports = reviewSchema
