const { ObjectId } = require('mongodb');
const { getDatabase } = require('../config/mongodb')

class User {
  static findOne(email) {
    return getDatabase().collection('User').findOne({ email })
  }
  static insert(payload) {
    return getDatabase().collection('User').insertOne(payload)
  }
}

module.exports = User
