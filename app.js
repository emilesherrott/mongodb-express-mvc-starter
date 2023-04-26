const express = require('express')
const cors = require('cors')

const logger = require('./logger')
const pokemonRouter = require('./routes/pokemon')

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

app.get('/', (req, res) => {
    res.json({"App": "Hello World"})
})

app.use("/pokemon", pokemonRouter)


module.exports = app