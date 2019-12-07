const path = require('path');

module.exports = {
  entry: './js-module/index-signup.js',
  output: {
    filename: 'index-signup.js',
    path: path.resolve(__dirname, 'dist'),
  },
};