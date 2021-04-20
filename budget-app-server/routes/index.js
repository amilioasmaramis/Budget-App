const router = require('express').Router()
const BudgeRoute = require('./budgetRoute')
const UserRoute = require('./userRoute')

router.use('/budget', BudgeRoute)
router.use('/user', UserRoute)

module.exports = router