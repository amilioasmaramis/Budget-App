const router = require('express').Router()
const RouteBudget = require('./RouteBudget')

router.use('/budget', RouteBudget)

module.exports = router