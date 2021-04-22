const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class Budget {
  // Read Budget Data
  static readBudget(id) {
    return getDatabase().collection('Budgets').find({ UserId: id.UserId }).sort({"createdAt": -1}).toArray()
  } 
  // Create budget income
  static createBudgetIncome(budget) {
    return getDatabase().collection('Budgets').insertOne(budget)
  }
  // Create budget expense
  static createBudgetExpense(budget) {
    return getDatabase().collection('Budgets').insertOne(budget)
  }
  // Delete Budget
  static deleteBudget(_id) {
    return getDatabase().collection('Budgets').deleteOne({ _id: ObjectId(_id)})
  }
}

module.exports = Budget