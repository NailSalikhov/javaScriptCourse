"use strict";

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Передача по ссылке

// copy.a = 10;

// console.log(obj);
// console.log(copy);

// Для того, чтобы полностью скопировать другой объект пример ниже
function copy(mainObj) {
  let objCopy = {};
  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// Чтобы добавить в объект какие-то новые свойства есть метод Object.assign
const add = {
  d: 17,
  e: 20,
  s: {
    v: 25,
    n: 30,
  },
};
// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;
// clone.s.v = 40;
console.log(add);
console.log(clone); //но это все равно поверхностная копия, проверить можно раскомментировав 54ую строчку

// Чтобы скопировать массив, пример ниже
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "abrakadabra";

console.log(oldArray);
console.log(newArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 7];
log(...num);


const array = ['a', 'b']; //Способ создания поверхн.копии через spread-оператор
const newAarray = [...array];
console.log(newAarray);

const q = {
  one:1,
  two:2
};
const newObj = {...q};
console.log(newObj);



