module.exports = (name, _id) => {
  const File = require('../model/File')
  const fs = require('fs')
  setTimeout(async () => {
    fs.rm(`./src/images/${name}.png`, () => {})
    await File.deleteOne({ _id })
  }, 300000)
}
