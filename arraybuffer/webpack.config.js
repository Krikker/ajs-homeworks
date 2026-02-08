// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // или 'production'
  entry: './app.js', // ← укажите правильный путь к вашему главному файлу
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
