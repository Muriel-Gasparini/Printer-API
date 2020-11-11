const mongoose = require('mongoose')

const File = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Files', File)
