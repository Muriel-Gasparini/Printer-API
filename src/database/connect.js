const mongoose = require('mongoose')
const vars = require('../config/vars')

mongoose.connect(vars.DB.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('Mongo Connected'))
  .catch(err => console.log(`MongoDB Error => ${err}`))

module.exports = mongoose
