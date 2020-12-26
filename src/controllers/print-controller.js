const uuid = require('uuid')
const File = require('../model/File')
const site = require('../utils/site-print')
const deleteImg = require('../utils/delete-image')

exports.print = async (req, res) => {
  const { url } = req.body

  try {
    const name = uuid.v1()
    const file = await File.create({ name })

    await site.print(url, file)

    res.status(200).json({ link: `http://localhost:3000/screenshot/${file._id}` })

    deleteImg(file.name, file._id)
  } catch (error) {
    if (/address/.test(error)) {
      res.status(400).json({ error: error.message })
    }
  }
}

exports.download = async (req, res) => {
  const { id } = req.params

  try {
    const file = await File.findById({ _id: id })

    if (file !== null) return res.download(`./src/images/${file.name}.png`)

    res.status(400).json({ message: 'This file does not exist' })
  } catch (error) {
    res.status(500).json({ error: 'An error ocurred' })
  }
}
