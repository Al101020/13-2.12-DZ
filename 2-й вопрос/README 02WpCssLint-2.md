2025.08.31  устанавливаем Jest

1.
npm install --save-dev jest jest-babel @babel/core @babel/cli @babel/preset-env core-js@3

2.
создаем папку __tests__ :
-  в ней свой первый тест test.js:
test('basic test', () => {
	let result = 4;
	expect(result).toBe(4);
});
-  и ущё файл-тест basic.test.js:
import sum from '../basic';
test('should sum', () => {
  const result = sum([1, 2, 3]);
  expect(result).toBe(6);
});
-  и создаем в папке js файл basic.js:
export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

3.
создал файл .babelrc:
{
	"presets": [
		["@babel/preset-env", {
			"useBuiltIns": "usage",
			"corejs": 3
		}]
	]
}

4.
  в файле package.json, в "scripts" добавим строку:
"test": "jest",

5.
  Проверяем:
npm test
  оба файла-тестов прошли удачно.

6.
  Проверяем насколько код покрыт автотестами:
npm test -- --coverage
  вышло что 100% покрытия, но только файла basic.js(потому что файл-тест проверяет только его). Еще появился каталог coverage.


  2025.09.02 (README 02WpCssLint-2.md)
+++++++
  Установил:
- npm install --save-dev mini-css-extract-plugin

  встал в package.json:
"mini-css-extract-plugin": "^2.9.4",

- в файле webpack.config.js в место стоки:
use: ['style-loader', 'css-loader']
  вставил
use: ['mini-css-extract-plugin', 'css-loader']
  удалил в package.json:
"style-loader": "^4.0.0",
- Импортировать плагин в файле webpack.config.js:
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
- файл стал webpack.config.js:
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
в нём 
- Включить плагин в разделе plugins файла webpack.config.js: plugins: [ new MiniCssExtractPlugin(), ].
- Подключить загрузчик из плагина в правиле для обработки CSS-файлов: { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }. Порядок перечисления загрузчиков в массиве свойства use важен, так как загрузчики используются от последнего к первому.
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
(ВМЕСТО 'style-loader')
- Задать имя файла CSS-бандла с помощью настройки filename:
plugins: [new MiniCssExtractPlugin({ filename: 'build.css' })].
- Задать хеш в имени файла CSS-бандла с помощью команды contenthash:
plugins: [new MiniCssExtractPlugin({ filename: 'build.[contenthash].css' })].

  удалил node_modules потом 



  и надо + установить babel-loader и настроить:
npm install --save-dev jest jest-babel babel-loader @babel/core @babel/cli @babel/preset-env core-js@3.
  В файле конфигурации Webpack (webpack.config.js) нужно добавить настройки для Babel.

???????????????????? ЯНДЕКС ГОВОРИТ ????????????????????
jest-babel - несуществует

