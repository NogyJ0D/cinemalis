require('dotenv').config()

const config = {
  mode: process.env.MODE,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT,
  dbPassword: process.env.DB_PASSWORD,
  dbUsername: process.env.DB_USERNAME,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
}

module.exports = config
