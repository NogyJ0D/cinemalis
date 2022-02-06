const { mongoose } = require('../config/db')

const castCrewSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  character: String
})

const movieModel = mongoose.model(
  'movies',
  new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    year: { type: Date, default: undefined },
    rating: { type: Number, default: 0, min: 0, max: 10 },
    banner: { type: Buffer, contentType: String },
    poster: { type: Buffer, contentType: String },
    castCrew: [castCrewSchema]
  })
)

module.exports = movieModel
