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
==================================
npm run lint -- --fix

git status
git add -A
git commit -m "commit 01.02"
git push
==================================
---
