const { mongoose } = require('../config/db')
const { Schema } = mongoose

const userModel = mongoose.model(
  'users',
  new Schema({
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
  })
)

module.exports = userModel
