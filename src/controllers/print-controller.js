const capture = require('capture-website')
const uuid = require('uuid')
const deleteImg = require('../utils/delete-file')
const File = require('../model/File')

exports.print = async (req, res) => {
  const { url } = req.body
  try {
    const name = uuid.v1()
    const file = await File.create({ name })
    await capture.file(url, `./src/images/${file.name}.png`)
    res.download(`./src/images/${name}.png`)
    res.status(200).json({ link: `http://localhost:3000/screenshot/${file._id}` })
    deleteImg(file.name, file._id)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error ocurred' })
  }
}

exports.download = async (req, res) => {
  const { id } = req.params
  try {
    const file = await File.findById({ _id: id })
    if (file !== null) {
      return res.download(`./src/images/${file.name}.png`)
    }
    res.status(400).json({ message: 'This file does not exist' })
  } catch (error) {
    res.status(500).json({ error: 'An error ocurred' })
  }
}
