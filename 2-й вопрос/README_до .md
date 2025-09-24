https://nuancesprog.ru/p/10665/?ysclid=meamleqvz8661288578

-------------------------------------------------------------------
 --- создал папку проекта
npm init -y
npm install --save-dev webpack webpack-cli webpack-dev-server

 --- Откроем package.json, добавим скрипт:
"dev": "webpack --mode development"

 --- по умолчанию webpack ожидает файл в src/index.js как точку входа. Кроме того, webpack по умолчанию выводит файлы сборки в каталог dist. Создадим новый каталог src и файл index.js. Введем
  console.log('hello');
  в index.js.
- Запустим npm run dev. Ошибок не будет, но вы найдете собранный файл main.js в каталоге dist

 --- запустим команду:
npm run dev

-------------------- Настройка webpack --------------------
 --- Создаём точку входа, в файле webpack.config.js:
const path = require('path');
module.exports = {
    entry: {  
    main: './src/index.js',  
    serviceWorker: './src/service-worker.js'  
  },
};
 --- точка выходного каталога, как заданный по умолчанию. Можно использовать свойство output:
const path = require('path')
module.exports = {
    output: { path: path.resolve(__dirname, "dist"), filename: "main.js" }
};
-------------------- Включение собранного файла в HTML файл --------------------
В каждом веб-приложении есть по крайней мере один HTML-файл. Для работы с HTML нужно использовать плагин html-webpack-plugin. Начнем с установки:

npm install --save-dev html-webpack-plugin

--- Создадим index.html в каталоге source и вставим в него шаблонный код:
<!DOCTYPE html> 
<html lang="ru"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title> 
</head>
<body>
  <h1>Привет, мир!</h1>
  <p>Это мой первый HTML-файл.</p>
</body>
</html>

Настроим это в файле webpack(webpack.config.js, добавим plugins и const HTMLWebpackPlugin):
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}

--- Новый скрипт в файле package.json, добавим:
"start": "webpack-dev-server --mode development --open"

--- Запускаем:
npm start
- открылась страница.

-------------------- Работа с CSS --------------------
Для того, чтобы работать с CSS в webpack, нам нужны два загрузчика: CSS-loader и loader. Установим их с помощью:

npm install --save-dev css-loader style-loader

Создадим styles.css внутри каталога source. Добавим любые стили для отображения в index.html. Нужно включить этот файл в index.js, а не в index.html. Теперь index.js имеет вид:

import './styles.css';
console.log('hello');

Остается последний шаг. Настроить загрузчики в webpack.config.js. Конфигурационный файл должен выглядеть так:

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

css-loader используется для загрузки CSS-файлов, а style-loader  —  для загрузки таблицы стилей в DOM.

Когда вы перезагрузите сервер и запустите npm start, то увидите изменения: