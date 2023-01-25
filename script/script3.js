"use strict";

// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
//В решении вызывать функцию не нужно, программа сделает это за вас.

function sayHello(name) {
  console.log(`Привет, ${name}!`);
  return `Привет, ${name}!`;
}
sayHello("Наиль");

//2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел:
// одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(num) {
  console.log([num - 1, num, num + 1]);
  return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);

//Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
//Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

function getMathResult(num, times) {
  if (typeof times !== "number" || times <= 0) {
    return num;
  }

  let str = "";

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
    } else {
      str += `${num * i}---`; // str = str + num * i + "---"
    }
  }
  console.log(str);
  return str;
}
getMathResult(10, 5);

const myName = "Nail";
console.log(`My name is ${myName}`);
console.log("My name is " + myName);
// про альтернативное использование косых кавычек и их смысла

let val = 7;
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b;
    return ret;
  }
  return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log("example of function returning a function: ", sum);

function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);

let c = 4;
const addX = (x) => (n) => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log("example partial application", d);

//Эквивалентная запись ниже
// let c = 4
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)

let namee = "John";
function sayHi() {
  console.log("Hi, " + namee);
}
namee = "Pete";
sayHi();

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();

// Для каждого вызова makeCounter() создаётся новое лексическое окружение функции, со своим собственным count. Так что получившиеся функции counter – независимы.
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert(counter1()); // 0
alert(counter1()); // 1

alert(counter2()); // 0 (независимо)

// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
