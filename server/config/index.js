require('dotenv').config()

const config = {
  mode: process.env.MODE,
  jwt_secret: process.env.JWT_SECRET,
  port: process.env.PORT,
  db_password: process.env.DB_PASSWORD,
  db_username: process.env.DB_USERNAME,
  db_host: process.env.DB_HOST,
  db_name: process.env.DB_NAME
}

module.exports = config
