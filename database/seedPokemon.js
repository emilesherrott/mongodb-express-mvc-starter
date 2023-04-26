const client = require('./setup')

const seedDB = async () => {
    try {
        await client.connect()
        console.log("Awaiting Seed 🌱")
        await client.db('pokemon').collection('pokemon').drop()
        await client.db('pokemon').collection('pokemon').insertMany([
            { name: "Bulbasaur", type: "Grass", number: 1, level: 1},
            { name: "Charmander", type: "Fire", number: 4, level: 1 },
            { name: "Squirtle", type: "Water", number: 7, level: 1}
        ])
        console.log("DB Seeded 🌾")
        await client.close()
    } catch (e) {
        console.log(e)
    }
}

seedDB()
