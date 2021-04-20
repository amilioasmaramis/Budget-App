const router = require('express').Router()
const BugdetController = require('../controllers/BudgetController')

router.get('/', BugdetController.readBudget)
router.post('/income', BugdetController.createBudgetIncome)
router.post('/expense', BugdetController.createBudgetExpense)

module.exports = router