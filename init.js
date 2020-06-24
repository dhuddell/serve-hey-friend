require('dotenv').config();
require('babel-register')({
  presets: [ 'env' ],
  plugins: ['transform-regenerator', 'transform-object-rest-spread'] 
})

// Import the rest of our application.
module.exports = require('./src/index.js')
