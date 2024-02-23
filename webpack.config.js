// webpack.config.js
const path = require('path');
const webpack = require('webpack'); // Import webpack module

module.exports = {
  mode: 'production',
  entry: './src/Timer.js', // Path to your component entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'Timer.bundle.[chunkhash].js', // Output filename
    library: 'Timer', // Name of the library
    libraryTarget: 'umd', // Output module format
    umdNamedDefine: true, // Define the module's name for AMD
    globalObject: 'this', // Define the global object used,
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
            plugins: [
              "@babel/plugin-proposal-class-properties", // Allows class properties syntax
              "@babel/plugin-transform-runtime", // Helps with async/await and other features
              "@babel/plugin-syntax-dynamic-import", // Enables support for dynamic import() syntax
            ]
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // Add any other plugins you need here
  ]
};