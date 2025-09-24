2025.08.30
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import

дописываю в script: "lint": "eslint"

-   добавил файл .eslintignore:
dist
coverage
doc

-   добавил файл .eslintrc.json:
{
  "extends": "airbnb-base",
  "env": {
     "es6": true,
     "browser": true,
     "jest": true
  },
  "rules": {
    "no-template-curly-in-string": "off",
    "array-callback-return": "off",
    "consistent-return": "off",
    "no-underscore-dangle": "off",
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ]
  }
}

создал папку js в src
переместил styles.css в js

создал папку js в src
создал файл app.js в каталоге js

    в файле index.js:
import './css/styles.css';
import './js/app';

завтра нужно подумать про Jest