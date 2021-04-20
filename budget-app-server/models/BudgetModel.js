// const { ObjectID } = require('bson')
const { ObjectID } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Budget {
  // Read Budget Data
  static readBudget() {
    return getDatabase().collection('Budgets').find().toArray()
  }  
  // Create budget income
  static createBudgetIncome(budget){
    return getDatabase().collection('Budgets').insertOne(budget)
  }
  // Create budget expense
  static createBudgetExpense(budget){
    return getDatabase().collection('Budgets').insertOne(budget)
  }
}

module.exports = Budget