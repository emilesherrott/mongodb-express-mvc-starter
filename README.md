# NoSQL - MongoDB MVC

## SQL - MongoDB Comparison

SQL | NoSQL 
--- | --- 
Database | Database 
Table | Collection 
Row | Document
Column | Field

## Basic Commands
- `show dbs` - show databases
- `use <db-name>` - create (and/or) switch to a database
- `db.dropDatabase()` - drop current database
- `db.createCollection('<collection-name>')` - create collection
- `db.<collection-name>.drop()` - drop collection
- `db.stats()` - database information


## Create Commands
### insertOne
- `db.<collection-name>.insertOne(<document>)` - create/enter single document into collection
```
db.pokemon.insertOne(
    { name: "Pikachu", type: "Electric", level: 1, number: 24}
)
```
## insertMany
- `db.<collection-name>.insertMany(<array-of-documents>)` - create/enter multiple documents into collection 
```
db.pokemon.insertMany([
            { name: "Bulbasaur", type: "Grass", number: 1, level: 1},
            { name: "Charmander", type: "Fire", number: 4, level: 1 },
            { name: "Squirtle", type: "Water", number: 7, level: 1}
        ])
```


## Read Commands
### Find all
- `db.<collection-name>.find()` - return all information from collection
```
db.pokemon.find()
```

### Count all
- `db.<collection-name>.find().count()` - return number of documents within collection
```
db.pokemon.find().count()
```

### Greater Than (or Equal) / Less Than (or Equal)
- `$gt` - greater than
- `$gte` - greater than or equal
- `$lt` - less than
- `$lte` - less than or equal

- `db.<collection-name>.find({ <document-field>: { <$key>: <value>}})`
```
db.pokemon.find({ level: {$gt: 10 }})
```

### Equal To / Exists
- `$eq` - equals
- `$exists` - exists 

- `db.<collection-name>.find({ <document-field>: { <$key>: <boolean>}})`
```
db.pokemon.find({ number: { $exists: true }})
```

### Selecting Specfic Feilds 
Passed at the end of a MongoDB query
- `{ <document-field>: 1}` - Include
- `{ <document-field>: 0}` - Exclude
```
db.pokemon.find({ number: { $exists: true }}, { name: 1, _id: 0})
```

### Limit
- `db.<collection-name>.find().limit(<number-of-documents>)`
Return only the first 3 documents
```
db.pokemon.find().limit(3)
```

### Combing Quries
- `db.<collection-name>.find({ $and[ {<first-query>}, {<second-query>}]})`
```
db.pokemon.find({
    $and:[
        {level: {$gte: 10}},
        {trainer: {$eq: "Emile"}}
    ]
})
```



## Update Commands

### UpdateOne
#### Boilerplate
```
db.<collection-name>.updateOne(
    { <field-to-find-item>: <field-original-value>},
    { $set: {<field-to-update>: <updated-value>}}
)
```
#### Example
##### Note: We can create new fields as well as update previous ones
```
db.pokemon.updateOne(
    { name: "Pikachu },
    { $set: { level: 45 }}
)
```


### UpdateMany
#### Boilerplate
```
db.<collection-name>.updateOne(
    { <field-to-find-item>: <query>},
    { $set: {<field-to-update>: <updated-value>}}
)
```
#### Example
##### Note: We can create new fields as well as update previous ones
```
db.pokemon.updateMany(
    { level: {$gte: 66 }},
    { $set: { strength: "Strong" }}
)
```




## Delete Commands

### deleteOne
#### Boilerplate
- `db.<collection-name>.deleteOne({<field-name>: <field-value>})` - grab a document to delete by a specific field and value

#### Example
```
db.pokemon.deleteOne({ name: "Gastly" })
```

### deleteMany
#### Boilerplate
- `db.<collection-name>.deleteMany({<field-name>: <query>})` - delete many documents based on filter
#### Example
```
db.pokemon.deleteMany({ level: {$lt: 5}})
```

### deleteAll
- `db.<collection-name>.deleteMany({})` - delete all documents in collection but not collection itself
