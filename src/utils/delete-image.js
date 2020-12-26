const fs = require('fs')
const path = require('path')
const File = require('../model/File')

module.exports = (name, _id) => {
  setTimeout(async () => {
    fs.rm(path.resolve(__dirname, 'src', 'images', `${name}.png`))
    await File.deleteOne({ _id })
  }, 300000)
}
