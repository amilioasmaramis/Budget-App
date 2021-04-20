const { ObjectID } = require('bson')
const { getDatabase } = require('../config/mongodb')

class Budget {
  // Read Budget Data
  static readBudget(id) {
    return getDatabase().collection('Budgets').find({ UserId: id.UserId }).toArray()
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