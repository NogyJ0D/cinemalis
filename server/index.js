const express = require('express')
const config = require('./config/index')
const cors = require('cors')
const cookies = require('cookie-parser')

// Mongo connection
const { connection } = require('./config/db')
connection()

// Routes
const auth = require('./routes/auth')
const movies = require('./routes/movies')
const reviews = require('./routes/reviews')
const users = require('./routes/users')

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
auth(app)
movies(app)
reviews(app)
users(app)

app.get('/', (req, res) => {
  return res.status(200).send('Index page')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Servidor: http://localhost:${config.port}`)
})
