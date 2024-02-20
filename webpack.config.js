// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Megamenu.js', // Path to your component entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'Megamenu.bundle.[chunkhash].js', // Output filename
    library: 'Megamenu', // Name of the library
    libraryTarget: 'umd', // Output module format
    umdNamedDefine: true, // Define the module's name for AMD
    globalObject: 'this' // Define the global object used,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};