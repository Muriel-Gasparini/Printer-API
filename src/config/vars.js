require('dotenv').config()

module.exports = {
  DB: {
    URI: process.env.MONGO_URI
  },
  PORT: process.env.PORT,
  HOST: process.env.HOST || 'localhost'
}
