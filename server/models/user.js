const { mongoose } = require('../config/db')
const { Schema } = mongoose

const userModel = mongoose.model(
  'users',
  new Schema({
    userName: { type: String, required: true, unique: true, maxlength: 15 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, default: 1 }
  })
)

module.exports = userModel
