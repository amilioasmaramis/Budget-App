const Budget = require('../models/BudgetModel')

class BugdetController {
  // Read Budget Data
  static async readBudget(req, res) {
    try {
      const budget = await Budget.readBudget()
      res.status(200).json(budget)
    } catch(err) {
      next(err)
    }
  }
  // Create Budget Income
  static async createBudgetIncome(req, res) {
    try {
      const { income, detail } = req.body
      if (!income) throw { name: 'error_400_body_invalid' }
      const budget = await Budget.createBudgetIncome({
        income,
        detail
      })
      res.status(201).json(budget.ops[0])
    } catch(err) {
      next(err)
    }
  }
  // Create Budget Expense
  static async createBudgetExpense(req, res) {
    try {
      const { expense, detail } = req.body
      if (!expense) throw { name: 'error_400_body_invalid' }
      const budget = await Budget.createBudgetExpense({
        expense,
        detail
      })
      res.status(201).json(budget.ops[0])
    } catch(err) {
      next(err)
    }
  }
}

module.exports = BugdetController
