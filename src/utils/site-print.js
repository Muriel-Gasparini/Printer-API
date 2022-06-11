const capture = require('capture-website')
const path = require('path')

exports.print = async (url, file) => {
  try {
    await capture.file(url, path.join('public', 'screenshot', `${file}.png`), {
      launchOptions: {
        args: ['--no-sandbox']
      }
    })
  } catch (error) {
    if (/ERR_NAME_NOT_RESOLVED/.test(error)) throw 'Please input a valid address'
  }
}
