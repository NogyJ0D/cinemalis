const mongoose = require('mongoose')
const config = require('./index')

const connection = async () => {
  const conn = await mongoose.connect(
    `mongodb+srv://${config.dbUsername}:${config.dbPassword}@${config.dbHost}/${config.dbName}`
  )
  console.log(`~MongoDB connected in ${config.dbName} base~`)
}

module.exports = { connection, mongoose }
