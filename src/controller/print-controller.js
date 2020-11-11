const capture = require('capture-website')

exports.print = async (req, res) => {
  const { url } = req.body
  try {
    const name = 'oi'
    await capture.file(url, `./src/images/${name}.png`)
    res.download(`./src/images/${name}.png`)
  } catch (error) {
    console.log(error)
  }
}
