const { Router } = require('express')
const pokemonController = require('../controllers/pokemon')

const pokemonRouter = Router()

pokemonRouter.get('/', pokemonController.index)
pokemonRouter.get('/:id', pokemonController.show)

pokemonRouter.post('/', pokemonController.create)

pokemonRouter.patch('/:id', pokemonController.update)

pokemonRouter.delete('/:id', pokemonController.destroy)

module.exports = pokemonRouter