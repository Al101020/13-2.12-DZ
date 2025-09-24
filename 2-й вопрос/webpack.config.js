const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {  
        main: './src/index.js',          // serviceWorker: './src/service-worker.js'  
    },
    devtool: 'source-map',
    output: { path: path.resolve(__dirname, "dist"), filename: "main.js" },
    devServer: {
        open: true,
        port: 8080,
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: 'html-loader',
                },
              ],
            },
            {
              test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
};
