const { MongoClient } = require('mongodb')

let database = null

async function connect() {
  try {
    const uri = 'mongodb://localhost:27017'   
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    await client.connect()

    const db = client.db('budget-app') // database yg dituju

    database = db
    return db
    // return Promise.resolve.database
  } catch(err) {
    console.log(err)
  }
}

module.exports = { 
  connect,
  getDatabase() {
    return database
  }
}