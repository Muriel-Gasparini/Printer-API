const express = require('express')
const app = express()
const vars = require('./config/vars')

require('./database/connect')

app.use(express.json())

app.use('/', require('./routes'))

app.listen(vars.PORT, console.log(`On port ${vars.PORT}`))
