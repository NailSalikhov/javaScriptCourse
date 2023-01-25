"use strict";

// *
// **
// ***
// ****
// *****
// ******
// let result = "";
// const length = 7;

// for (i = 1; i < length; i++) {
//   for (j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }
// console.log(result);

// for (i = 1; i < length; i++) {
//   result.length !== 0 && console.log(result);
//   result += '*';
// }
// console.log(result);
// Код Нурика с таким же результатом

//     *
//    ***
//   *****
//  *******
// *********
//***********
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {

//   for (let j = 0; j < lines - i; j++) {
//       result += " ";
//   }

//   for(let j = 0; j < i * 2 +1; j++){
//     result += "*";
//   }
// result += "\n";
// }
// console.log(result);

//
//*        *
//**      **
//***    ***
//****  ****
//**********
// let result = '';
// const lines = 5;
// for(let i = 0; i <= lines; i++){
//   for(let j = 0; j < i; j++){
//     result += '*';
//   }
//   for(let j = 0; j < (lines - i) * 2; j++){
//     result += " ";
//   }
//   for(let j = 0; j < i; j++){
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

// const data = [5, 10, "Shopping", 20, "Homework"];
// let result = [];

// for (let i = 1; i <= data.length; i++){
//   result[i - 1] = data[data.length - i];
// }

// // result = data.reverse();

// console.log(result);
// return result;

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++){
//     if(typeof(data[i]) === 'number'){
//       data[i] = data[i] * 2;
//     } else if(typeof(data[i]) === 'string'){
//       data[i] = `${data[i]} - done`;
//     }
// }
//    console.log(data);
//    // Не трогаем
//    return data;

// let i = 0;
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
//     for (i = 0; i < arr.length; i++){
//       result[i] = arr[i];
//     }
//     console.log(result);
//     return result;

// let n = 18; //создание программы которая выводит все простые числа в заданном диапозаное
// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log( i ); // простое число
// }

// for (let i = 2; i <= 16; i++) { // только нечетные числа
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

// const arrayOfNumbers = []; // в массиве будут числа от 5 до 10
// for (let i = 5; i < 11; i++) {
//   arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);
// // Не трогаем
// return arrayOfNumbers;

// let i = 2; // только нечетные числа через while
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// let i = 1;
// for(i = 1; i < 11; i++){
//   if (i % 2 == 0){
//   console.log(i);
//   }
// }

// let num;
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

//  let num = 50;

//  while (num <= 55) {
//     console.log(num);
//     num++;
//  }

// let numm = 50;
// do {
//   console.log(numm);
//   numm++;
// }
// while (numm < 55);

// for (let i = 1; i < 6; i++) {
//   if(i === 3){
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?", ""),
//   d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// if (4 == 9) {
//   console.log("Ok!");
// } else {
//   console.log("error!");
// }

// const num = 50;
// if(num < 49){
//     console.log('Malo');
// } else if (num > 100){
//     console.log('Mnogo');
// } else{
//     console.log('Ok');
// }

// const num = 50;
// switch (num) {
//   case 49:
//     console.log("Мимо");
//     break;
//   case 100:
//     console.log("Мимо");
//     break;
//   case 50:
//     console.log("Попал");
//     break;
//   default:
//     console.log("Не в этот раз");
//     break;
// }
