const router = require('express').Router()
const BugdetController = require('../controllers/bugdetController')

// Middlewares
const authentication = require('../middlewares/authentication.js')
const authorized = require('../middlewares/authorized.js')

router.get('/', authentication, authorized, BugdetController.readBudget)
router.post('/income', authentication, authorized, BugdetController.createBudgetIncome)
router.post('/expense', authentication, authorized, BugdetController.createBudgetExpense)

module.exports = router