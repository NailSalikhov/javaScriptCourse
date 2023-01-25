'use strict';

let num = 20;
function showFirstMessage (text){
    console.log(text);
    // let num = 10;
    console.log(num);
}
showFirstMessage('Hello, World!');
console.log(num);



function calc(a, b){
    return(a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(5, 10));


function ret(){
    let num = 50;

    //Тут может быть огромный кусок кода, напримерр расчет зарплат или другого показателя

    return num;
    //а тут retur num в итоге во внешний мир функции вернет именно последнее значение num, конечный показатель.
}
const anotherNum = ret();

//Стрелочная функция
const calculation = (a, b) => {return a + b};
console.log(calculation(4, 3));


//Пример с обменником валют
const usdCurr = 69;
const eurCurr = 74;


function convert(amount, curr){
    console.log(amount * curr);
}
convert(500, usdCurr);
convert(500, eurCurr);




const aznCurr = 42.41;
const discount = 0.9;

function convertt(amount, curr){
    return amount * curr;
}

function promotion (result){
    console.log(result * 0.9);
}

const res = convertt(500, aznCurr);
promotion(res); // promotion(convertt(500, aznCurr)); - можно записать и так, без промежуточной переменной