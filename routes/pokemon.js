const { Router } = require('express')
const pokemonController = require('../controllers/pokemon')

const pokemonRouter = Router()

pokemonRouter.get('/', pokemonController.index)

module.exports = pokemonRouter