const path = require('path');

module.exports = {
  target: 'node',
  entry: './Client/src',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, ' /home/ec2-user/MVP-Poker-App/Client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  mode: 'development',
};