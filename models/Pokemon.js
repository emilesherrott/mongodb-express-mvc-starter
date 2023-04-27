const { ObjectId } = require("mongodb")
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
    const response = await client.db("pokemon").collection("pokemon").find()
    const allValues = await response.toArray()
    return allValues
  }

  static async getOne(idx) {
    await client.connect()
    const id = new ObjectId(idx)
    const response = await client.db("pokemon").collection("pokemon").find({
      _id: id,
    })
    const value = await response.toArray()
    const pokemon = new Pokemon(value[0])
    pokemon['id'] = id
    return pokemon
  }

  static async create({ name, type, number, level }) {
    await client.connect()
    const response = await client.db("pokemon").collection("pokemon").insertOne({
      name: name,
      type: type,
      number: number,
      level: level,
    })
    return "Pokemon created"
  }


  async update({name, type, number, level}) {
    await client.connect()
    const response = await client
      .db("pokemon")
      .collection("pokemon")
      .updateOne({ _id: this.id }, { $set: { name: name, type: type, number: number, level: level } })
    return "Pokemon updated"
  }

  async destory() {
    await client.connect()
    const response = await client.db("pokemon").collection("pokemon").deleteOne({ _id: this.id })
    return "Pokemon deleted"
  }
}

module.exports = Pokemon
