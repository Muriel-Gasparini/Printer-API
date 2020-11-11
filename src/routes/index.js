const router = require('express').Router()

const printController = require('../controller/print-controller')

router.post('/print', printController.print)

module.exports = router
