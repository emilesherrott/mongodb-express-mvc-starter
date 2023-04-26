const Pokemon = require('../models/Pokemon')

const index = async (req, res) => {
    try {
        const pokemon = await Pokemon.getAll()
        res.status(200).json(pokemon)
    } catch (e) {
        res.status(500).json({
            "message": "Pokemon not available right now",
            "error": e
        })
    }
}


module.exports = { 
    index
}