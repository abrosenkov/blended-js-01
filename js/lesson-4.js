// // 1 - отримай body елемент і виведи його в консоль;

// const bodiEl = document.querySelector("body");
// console.log(bodiEl);

// // 2 - отримай елемент id="title" і виведи його в консоль;

// const titleEl = document.querySelector("#title");
// console.log(titleEl);

// // 3 - отримай елемент class="list" і виведи його в консоль;

// const list = document.querySelector(".list");
// console.log(list);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const allDataTopic = document.querySelectorAll("[data-topic]");
// console.log(...allDataTopic);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// console.log(allDataTopic[0]);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// console.log(allDataTopic[allDataTopic.length - 1]);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const nextAfterH1 = document.querySelector("h1").nextElementSibling;
// console.log(nextAfterH1);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const allTitleH3 = document.querySelectorAll("h3");
// console.log(allTitleH3);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// allTitleH3.forEach((elem) => {
//   elem.classList.add("active");
// });

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

// const liElemNav = document.querySelector("li[data-topic='navigation']");
// console.log(liElemNav);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// liElemNav.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// const navTextEl = document.querySelector(
//   '[data-topic="navigation"]'
// ).lastElementChild;
// console.log(navTextEl);
// navTextEl.textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";
// const currentTopicEl = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log(currentTopicEl);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// currentTopicEl.style.backgroundColor = "blue";

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const titleCompleted = document.querySelector(".completed");
// console.log(titleCompleted);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// titleCompleted.parentElement.remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// const newTextElem = document.createElement("p");
// newTextElem.textContent = "Об'єктна модель документа (Document Object Model)";
// titleEl.after(newTextElem);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// // const listItem = document.createElement("li");
// // const itemTitle = document.createElement("h3");
// // const itemDescr = document.createElement("p");

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const newItem = `<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`;

// list.insertAdjacentHTML("beforeend", newItem);

// // 20 - очисти список

// list.innerHTML = "";

//===================                 3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const input = document.querySelector(".js-username-input");
input.addEventListener("input", checkInputValue);

function checkInputValue() {
  const inputValue = input.value.trim();
  //   if (inputValue.length >= 6) {
  //     input.classList.add("success");
  //     input.classList.remove("error");
  //   } else {
  //     input.classList.add("error");
  //     input.classList.remove("success");
  //   }

  input.classList.toggle("success", inputValue.length >= 6);
  input.classList.toggle("error", inputValue.length < 6);
}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form");
const userText = document.querySelector(".js-username-output");
const userInput = document.querySelector(".js-username-input");

userInput.addEventListener("input", () => {
  const text = userInput.value.trim();
  return (userText.textContent = text === "" ? "Anonymous" : text);
});

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const [userName, accept] = event.target.elements;
  const userNameValue = userName.value.trim();
  if (userNameValue === "") {
    alert("Input cannot be empty");
    return;
  }
  if (!accept.checked) {
    alert("Check checkbox!!");
    return;
  }

  const result = {
    user: userNameValue,
  };

  console.log(result);
  userText.textContent = "Anonymous";
  input.classList.remove("error", "success");
  form.reset();
}
