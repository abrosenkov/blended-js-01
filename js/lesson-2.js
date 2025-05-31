//==================================    1    ================================
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");

// if (index === -1) {
//   console.log("Element not found");
// } else {
//   styles[index] = "classic";
// }
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

//==================================    2    ================================
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const newArr = Array.from(array).join(",").toLowerCase().split(",");
//   let msg;
//   const userNane = prompt("Name:");
//   if (newArr.includes(userNane.toLowerCase())) {
//     msg = alert(`Welcome, ${userNane}!`);
//   } else {
//     msg = "User not found";
//   }
//   return msg;
// }
// console.log(checkLogin(logins));

//==================================    3    ================================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let result = 0;
//   let counter = 0;
//   for (const item of arguments) {
//     if (typeof item === "number") {
//       result += item;
//       counter++;
//     }
//   }
//   if (counter === 0) {
//     return 0;
//   }
//   return result / counter;
// }
// console.log(Math.round(caclculateAverage("45", 76, 89, "56")));

//==================================    4    ================================
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumNumbers(array) {
//   const result = [];
//   let sum = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     sum = array[i] + array[i + 1];
//     result.push(sum);
//   }
//   return result;
// }
// console.log(sumNumbers(someArr));

//==================================    5    ================================

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// let result;
// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   }
//   return "Sory, it is not an array!";
// }

// console.log(findSmallestNumber(numbers));

//==================================    6    ================================

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const array = string.split(" ");
//   let result;
//   let newArr = [];
//   let index = 0;
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(array[i].length);
//   }
//   index = Math.max(...newArr);
//   result = array[newArr.indexOf(index)];

//   return result;
// }

// console.log(findLongestWord("London is the capital of Great Britain"));

//==================================    7    ================================
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

//    =====     Object.keys(user)

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//    =====       Object.entries(user)

// const userArrs = Object.entries(user);
// for (let i = 0; i < userArrs.length; i++) {
//   console.log(`${userArrs[i][0]}: ${userArrs[i][1]}`);
// }
// console.log(userArrs);

//==================================    8    ================================
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const arr = Object.keys(salaries);
// let sum = 0;
// for (const key of arr) {
//   sum += salaries[key];
// }
// console.log(sum);

//==================================    9    ================================

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//     return calculator;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     } else {
//       return "No such propeties";
//     }
//   },
//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     } else {
//       return "No such propeties";
//     }
//   },
//   exist() {
//     return this.a !== undefined && this.b !== undefined;
//   },
// };

// console.log(calculator.read(156));
// console.log(calculator.sum());
// console.log(calculator.mult());

//==================================    10    ================================

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;

//   for (const item of fruits) {
//     let sum = 0;
//     if (item.name === fruitName) {
//       sum = item.price * item.quantity;
//       totalPrice += sum;
//     }
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(fruits, "Банан"));

// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де передається
// name і email, category може передаватись чи ні,
// всередині метода add створіть обʼєкт newContact з властивостями  name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// і додає newContact до списку контактів contacts;
// *не забудьте додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.);
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;
// const phonebook = {
//     contacts: [],
//     add(data) {},
//     list() {},
//     filtered(category) {},
//     delete(name) {},
//     updateName(oldName, newName) {},
//     generateId() {
//       return "#" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };
