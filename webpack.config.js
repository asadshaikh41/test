const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',  // Path to the entry file of your application (change if needed)
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory for the build
    filename: 'bundle.js',  // Output filename
  },
  target: 'node',  // Specify that this is a Node.js application
  externals: [nodeExternals()],  // Exclude node_modules from the build 
  mode: 'production',  // Set to 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/,  // Process JavaScript files
        exclude: /node_modules/,  // Do not process files in node_modules
        loader: 'babel-loader',  // Use Babel to transpile ES6+ code
        options: {
          presets: ['@babel/preset-env'],  // Use the preset-env preset for compatibility
        },
      },
    ],
  },
};
