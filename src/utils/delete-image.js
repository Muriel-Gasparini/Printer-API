const fs = require('fs')
const path = require('path')

exports.deleteLocalImage = (name) => {
  fs.rmSync(path.join("public", "screenshot", `${name}.png`))
}
