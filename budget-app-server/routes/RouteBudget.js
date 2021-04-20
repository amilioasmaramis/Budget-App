const router = require('express').Router()
const BugdetController = require('../controllers/BudgetController')

router.get('/', BugdetController.readBudget)
router.post('/income', BugdetController.createBudgetIncome)
router.post('/expense', BugdetController.createBudgetExpense)
// router.get('/:id', BugdetController.getMoviesById)
// router.put('/:id', BugdetController.updateMovie)
// router.delete('/:id', BugdetController.deleteMovie)

module.exports = router