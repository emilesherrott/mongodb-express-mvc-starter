const Pokemon = require("../models/Pokemon")

const index = async (req, res) => {
  try {
    const pokemon = await Pokemon.getAll()
    res.status(200).json({
      "success": true,
      "pokemon": pokemon
    })
  } catch (e) {
    res.status(500).json({
      "success": false,
      "message": "Pokemon not available right now",
      "error": e,
    })
  }
}

const show = async (req, res) => {
  try {
    const idx = req.params.id
    const pokemon = await Pokemon.getOne(idx)
    res.status(200).json({
      "success": true,
      "pokemon": pokemon
    })
  } catch (e) {
    res.status(404).json({
      "success": false,
      "message": "Pokemon not found",
      "error": e,
    })
  }
}

const create = async (req, res) => {
  try {
    const data = req.body
    const result = await Pokemon.create(data)
    res.status(201).json({
      "success": true,
      "response": result
    })
  } catch (e) {
    res.status(404).json({
      "success": false,
      "message": "Unable to create new pokemon",
      "error": e,
    })
  }
}

const update = async (req, res) => {
  try {
    const idx = req.params.id
    const data = req.body
    const pokemon = await Pokemon.getOne(idx)
    const result = await pokemon.update(data)
    res.status(200).json({
      "succuess": true,
      "response": result
    })
  } catch (e) {
    res.status(404).json({
      "success": false,
      "message": "Unable to update pokemon",
      "error": e,
    })
  }
}


const destroy = async (req, res) => {
  try {
    const idx = req.params.id
    const pokemon = await Pokemon.getOne(idx)
    const result = await pokemon.destory()
    res.status(204).json({
      "success": true,
      "respose": result
    })
  } catch (e) {
    res.status(404).json({
      "success": false,
      "message": "Unable to delete pokemon",
      "error": e,
    })
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
