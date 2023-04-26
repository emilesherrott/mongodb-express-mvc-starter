const client = require("../database/setup")

class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.type = data.type
    this.number = data.number
    this.level = data.level
  }

  static async getAll() {
    await client.connect()
    console.log("Connected")
    const response = await client.db("pokemon").collection("pokemon").find()
    const allValues = await response.toArray()
    return allValues
  }
}

module.exports = Pokemon
