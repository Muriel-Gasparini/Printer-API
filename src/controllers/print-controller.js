const path = require('path')
const uuid = require('uuid')

const File = require('../model/File')
const site = require('../utils/site-print')
const vars = require('../config/vars')
const { deleteLocalImage } = require('../utils/delete-image')
const { compressImages } = require('../utils/compress-image')

exports.print = async (req, res) => {
  const { url } = req.body
  try {
    const name = uuid.v1()

    await site.print(url, name)

    const onSuccess = async () => {
      try {
        deleteLocalImage(name)
        res.status(200).json({ link: `http://localhost:${vars.PORT}/minified/${name}.png` })
      } catch (error) {
        console.log(error)
      }
    }

    const onError = () => {
      deleteLocalImage(name)
    }

    compressImages(onSuccess, onError)
  } catch (error) {
    console.log(error)
    if (/address/.test(error)) {
      res.status(400).json({ error: error.message })
    }
  }
}

exports.download = async (req, res) => {
  const { id } = req.params

  try {
    const file = await File.findById(id)

    if (!file) {
      res.status(400).json({ message: 'This file does not exist' })
      return
    }
    console.log(file)
    res.send(path.join('public', `${file.name}.png`))
  } catch (error) {
    res.status(500).json({ error: 'An error ocurred' })
  }
}
