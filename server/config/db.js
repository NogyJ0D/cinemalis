const mongoose = require('mongoose')
const config = require('./index')

const connection = async () => {
  const conn = await mongoose.connect(
    `mongodb+srv://${config.db_username}:${config.db_password}@${config.db_host}/${config.db_name}`
  )
  console.log(`~MongoDB connected in ${config.db_name} base~`)
}

module.exports = { connection, mongoose }
