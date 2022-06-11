const router = require('express').Router()

const printController = require('../controllers/print-controller')

router.post('/print', printController.print)

//router.get('/screenshot/:id', printController.download)

module.exports = router
