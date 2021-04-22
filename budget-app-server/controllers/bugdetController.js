const Budget = require('../models/budgetModel')

class BugdetController {
  // Read Budget Data
  static async readBudget(req, res, next) {
    try {
      const budget = await Budget.readBudget({
        UserId: req.user._id
      })
      console.log(budget, 'Fetch data Budget from server')
      res.status(200).json({budget})
    } catch(err) {
      next(err)
    }
  }
  // Create Budget Income
  static async createBudgetIncome(req, res, next) {
    try {
      console.log(req.user, "req.user from controller")
      const { income, detail } = req.body
      if (!income || !detail) throw { name: 'error_400_body_invalid' }
      const budget = await Budget.createBudgetIncome({
        UserId: req.user._id,
        income,
        detail,
        createdAt: new Date(),
      })
      console.log(budget.ops[0], 'Create Budget Income from server controller')
      res.status(201).json(budget.ops[0])
    } catch(err) {
      next(err)
    }
  }
  // Create Budget Expense
  static async createBudgetExpense(req, res, next) {
    try {
      console.log(req.user, "req.user from controller")
      const { expense, detail } = req.body
      if (!expense || !detail) throw { name: 'error_400_body_invalid' }
      const budget = await Budget.createBudgetExpense({
        UserId: req.user._id,
        expense,
        detail,
        createdAt: new Date(),
      })
      console.log(budget.ops[0], 'Create Budget Expense from server controller')
      res.status(201).json(budget.ops[0])
    } catch(err) {
      next(err)
    }
  }
  // Delete Budget 
  static async deleteBudget(req, res, next) {
    try {
      await Budget.deleteBudget(req.params._id)
      res.status(200).json({
        message: `Sucessfully deleted data Budget`
      })
    } catch(err) {
      next(err)
    }
  }
}

module.exports = BugdetController
