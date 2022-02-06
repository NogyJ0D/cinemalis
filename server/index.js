const express = require('express')
const config = require('./config/index')

// Mongo connection
const { connection } = require('./config/db')
connection()

const movies = require('./routes/movies')
const users = require('./routes/users')

const app = express()

app.use(express.json())

users(app)
movies(app)

app.get('/', (req, res) => {
  return res.status(200).send('Index page')
})

app.listen(config.port, () => {
  console.log(`Servidor: http://localhost:${config.port}`)
})
