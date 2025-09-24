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