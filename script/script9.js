"use strict";

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });
    console.log(str);
    return str;
  },
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// 'Мне 29 и я владею языками: RU ENG'
//!Реализация метода выше

// Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}
showExperience(personalPlanPeter);

// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
function showProgrammingLangs(plan) {
  let str = "";
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}
showProgrammingLangs(personalPlanPeter);

//-----------------------------------------------------------------------
const family = ["Peter", "Ann", "Alex", "Linda"];
// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
function showFamily(arr) {
  let str = "";
  if (arr == "") {
    str = `Семья пуста`;
  } else {
    str = `Семья состоит из: ${arr.join(" ")}`;
  }
  return str;
}
showFamily(family);

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];
// напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
function standardizeStrings(arr) {
  let str = arr.join("\n").toLowerCase();
  console.log(str);
  return str;
}
standardizeStrings(favoriteCities);

// Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Результат: reverse(someString) => 'gnirts egnarts emos si sihT'
const someString = "This is some strange string";
function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  } else {
    return str.split("").reverse().join("");
  }
}
reverse(someString);

//Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Результат: availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {}
