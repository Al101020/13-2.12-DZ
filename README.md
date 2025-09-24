# Бейджик appveyor.com:
[![Build status](https://ci.appveyor.com/api/projects/status/8mj6wkxyyvcyruys?svg=true)](https://ci.appveyor.com/project/Al101020/13-2-12-dz)
# Ссылка на моё ДЗ
https://al101020.github.io/13-2.12-DZ/<br>

# Ссылка на ДЗ:
https://github.com/netology-code/ahj-homeworks/tree/AHJ-50/workers

# Домашнее задание к занятию "12. WebWorkers, ServiceWorkers"

Правила сдачи задания:

1. **Важно**: в рамках этого задания можно использовать любой менеджер пакетов
2. Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через GitHub Actions [Инструкция](https://disk.360.yandex.ru/i/OCU8y022i92XdA)
3. В README.md должен быть размещён бейджик сборки и ссылка на Github Pages
4. В качестве результата присылайте проверяющему ссылки на ваши GitHub-проекты
5. Авто-тесты писать не требуется
6. Серверная часть должна быть выложена на [Render](https://render.com/). Посмотрите [инструкцию](https://github.com/netology-code/ahj-homeworks/tree/video/docs/render#readme) или [документацию](https://render.com/docs/deploy-node-express-app), как развертывать серверную часть на Render.


---

### Loading Styling

#### Легенда

Сейчас модно показывать интерфейсы загрузки вроде следующего:

![](./pic/loading.png)

#### Описание

Реализуйте подобный интерфейс, закешировав статические ресурсы и показывая данный внешний вид до момента загрузки данных.

Обратите внимание, даже если у пользователя нет подключения, страница всё равно должна отображаться, но в режиме "загрузки" и после неудачной попытки соединения переходить в режим:

![](./pic/loading-2.png)

Для эмуляции задержки можете самостоятельно написать middleware для koa, или посмотреть на существующие вроде [koa-slow](https://github.com/bahmutov/koa-slow)

Напоминаем, что для кэширования вы можете воспользоваться плагином Workbox.

---
    команда запуск сервера:
node server.js
==================================
npm run lint -- --fix

git status
git add -A
git commit -m "commit 01.02"
git push
==================================
---
npm install mini.css
    потом удалил из файла package.json, но скопировал файл mini-default.min.css в папку css
и подключил его в index.js

2025.08.12
---    Установил пакет workbox для кэширования:
npm install --save-dev workbox-webpack-plugin

---    в файле webpack.config.js добавил после строки"module.exports = {":
    ...
  entry: {  
    main: './src/js/app.js',  
    serviceWorker: './src/service-worker.js'  
  },...

--- создал файл service-worker.js в каталоге src
--- после этого показалась в консоли надпись написанная в файле service-worker.js


2025.09.09
в браузере на http://localhost:8080/ в в DevTools → Application(Приложение) нажал отменить регистрацию.
-- В файле webpack.config.js вернул порт 8080 и поменял настройки как у преподавателя.
-- остановил C:\_GitHub_\13-2.12-DZ dev-server:
Ctrl + c
-- и снова запустил(типа перезапустил):
npm start

-- Страница открылась и в DevTools: 
    Консль: 
      service-worker.js:1 service-worker.js
      Registration succeeded. Scope is http://localhost:8080/
    Источники: 
      шестеренка и service-worker.js
  короче сервис воркер запустился(регистрацию прошёл).
==================================
npm run lint -- --fix

git status
git add -A
git commit -m "commit 01.02"
git push
==================================


2025.09.10
+
showNews.js
showError.js
-- Сперва появляется(movieNews.js): 'Загрузка новостей ...', потом загружается список новостей. Если fetch возвращает ошибку(или сервер останавливаю), то выводится(showError.js): 'Не удалось загрузить данные\nПроверте подключение\nи обновите страницу'.
-- 


------------
 2025.09.22
 ------------
	слово windows убрал,
	ошибка в браузере ушла,
	ошибка при проверки npm run lint -- --fix, осталась:
5:1  error    Unexpected use of 'self'      no-restricted-globals.

------------
 2025.09.23
 ------------
  -  Использование workbox-webpack-plugin
Установка:
yarn add -D workbox-webpack-plugin
или
npm install --save-dev workbox-webpack-plugin

Вам нужно будет удалить ваш service-worker.js файл или сильно его упростить. Workbox сгенерирует его за вас.

Изменение webpack.config.js:
в plugins добавьте workbox-webpack-plugin.

