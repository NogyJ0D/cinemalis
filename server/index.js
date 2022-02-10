const express = require('express')
const config = require('./config/index')
const cors = require('cors')
const cookies = require('cookie-parser')

// Mongo connection
const { connection } = require('./config/db')
connection()

// Routes
const users = require('./routes/users')
const movies = require('./routes/movies')
const auth = require('./routes/auth')

const app = express()

// Global Middlewares
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true
  })
)
app.use(cookies())

// Usar las rutas
users(app)
movies(app)
auth(app)

app.get('/', (req, res) => {
  return res.status(200).send('Index page')
})

app.listen(config.port, () => {
  console.log(`Servidor: http://localhost:${config.port}`)
})
