"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr); //если ничего не менять, результат следующий: [ 10, 13, 2, 26, 8 ] То есть если в arr.sort не вписывать compareNum
//Чтобы числа сортировались правильно, нужно в sort добавить след.функцию. 
function compareNum(a, b){
  return a - b;
}



arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
// Результат будет следующий:
// 0: 2 внутри массива 2, 13, 26, 8, 10
// 1: 13 внутри массива 2, 13, 26, 8, 10
// Значит в function item - это значение в индексе массива, i - порядковый индекс (нач-ся с нуля), arr - ссылка на сам массив

arr.pop();
// удаляет последний элемент массива
arr.push(10);
// добавляет значение в скобках в конец массива
console.log(arr);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort(); //можно сортировать элементы как строки по алфавите, с цифрами работает не совсем логично, фильтрация как строки будет идти
// console.log(products);
// Через split можно строку превратить в массив. В скобках разделитель
console.log(products.join("; "));
//Через join можно массив превратить в строку
