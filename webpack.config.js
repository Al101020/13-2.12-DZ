const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/js/app.js',
    'service-worker': './src/service-worker.js', // <-- отдельный бандл SW
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // даст /service-worker.js в корне dev-сервера
    clean: true,
  },
  devServer: {
    open: true,
    port: 8080, // у вас уже так(было 8082) - это кометарий преподователя
    // static: { directory: path.resolve(__dirname, 'dist') }, // опционально
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.html$/, use: [{ loader: 'html-loader' }] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
  ],
  devtool: 'source-map',
  
  // Ниже был мой вариант настроек
  // entry: {  
  //   main: './src/js/app.js',  
  //   serviceWorker: './src/service-worker.js'  
  // },
  
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  // },
  // devServer: {
  //   open: true,
  //   port: 8082,
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //       },
  //     },
  //     {
  //       test: /\.html$/,
  //       use: [
  //         {
  //           loader: 'html-loader',
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.css$/,
  //       use: [
  //         MiniCssExtractPlugin.loader, 'css-loader',
  //       ],
  //     },
  //   ],
  // },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: './src/index.html',
  //     filename: './index.html',
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: '[name].css',
  //     chunkFilename: '[id].css',
  //   }),
  // ],
};
