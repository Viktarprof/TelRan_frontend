// let number = 8; // может менять ся переменная
// number = 20;
// console.log(number);
// number = 5;
// console.log(number);


// const number2 = 100; // НЕ может менять ся переменная
// number2 = 200;
// console.log(number2);


// const name = 'Álex',
//      number = 8,
//      colors = ['green', 'blue', 'black'],
//      user = {
//         id:1,
//         firstname: 'Serge',
//      },
//      printname = () => {
//         console.log('Hello');
//      }



// const number1 = 100;
// const number2 = 10;

// let result = number1 + number2;
// result = number1 - number2;
// result = number1 * number2;
// result = number1 / number2;
// console.log(result);

// const firstname = 'Ivan',
//       lastname = 'Nikolaev';
// let result2 = firstname + ' ' + lastname;
// console.log(result2); // конкотинация - складывание строк





// number
// const num1 = 22;
// const num2 = 22.345;



// // innfinity и NaN
//   let result1 = 1 / 0;
//   console.log(result1) // бесконечное число 

// let result = 'Alex' / 0;
// console.log(result) // не число. когда работаем одновременно с числом и строкой



// // Bigint
// let maxnum = Number.MAX_SAFE_INTEGER; 
// console.log(maxnum);
// let bigIntNunmer = 900719925474099132n; // n создает бигинтержер
// console.log(bigIntNunmer);



// //String
// let str1 = 'Hello';
// let str2 = "She said";
// let str3 =  "She said: 'Hello' ";

// console.log(str1);
// console.log(str2);
// console.log(str3);

// let firstname = 'Serge';
// let lastname = 'Demin';
// let fulname = `${firstname} ${lastname}`; // скдеили две строки путем ``и $
// console.log(fulname);



// //boolean           true/false
// const variable1 = true;
// const variable2 = false;



// //null (ничего. пусто. неизвестно)
// let empty = null;



// // undefined (не присвоенное значение)
// let test;
// console.log(test)



// //object
// let user = {
//     id: 1,
//     firstname: 'Alex',
//     age: 22
// };


// //symbol
// let sym = Symbol();
// console.log(sym);



// console.log(typeof maxnum)
// console.log(typeof bigIntNunmer)
// console.log(typeof str1)
// console.log(typeof variable1)
// console.log(typeof empty)
// console.log(typeof test)
// console.log(typeof user)
// console.log(typeof sym)
 






// оператор IF
// if(10 = 10){ // условие
//     console.log('Hello world'); // результат от нашего условия
// }

/*
операторы сравнения

>
<
>=
<=
== сравнивает только значение
=== сравниевает по типу данных
!=

*/


// if("Java Script" == "Pyton"){
//     console.log('Hello world');
// }
// if(1 == "1"){ // сравнивает только значение
//     console.log('Hello world');
// }
// if(1 === "1"){ // сравниевает по типу данных
//     console.log('Hello world');
// }



// оператор IF else
// if(10 > 8){
//     console.log('да, 10 меньше чем 8');
// } else {
//     console.log('нет, 10 ,больше чем 8');
// }


// оператор IF else IF
// if(10 < 8){
//     console.log('да, 10 МЕНЬШЕ чем 8');
// } else if (10 == 8){
//     console.log('10 равно 8');
// } else {
//     console.log('нет, 10 БОЛЬШЕ чем 8');
// }



// // оператор switch case
// const color = 'red';
// switch(color){
//     case 'green':
//         console.log('Этот цвет зеленый');
//         break;
//     case 'red':
//         console.log('Этот цвет красный');
//         break;
//     case 'orange':
//         console.log('Этот цвет оранжевый');
//         break;
//     case 'white':
//         console.log('Этот цвет белый');
//         break;
//     case 'black':
//         console.log('Этот цвет черный');
//         break;
//     default:
//         console.log('Странный выбор цвета');
    
// }




//Задание 1:

const sity = {
    name: 'Grodno',
    country: 'Belarus',
    count_people: 3000000,
    stadium1: true,
}
if (true === true){
    console.log('Yes, have stadium')
} else {
    console.log('Not stadium')
}
console.log(sity)



//Задание 2:
const higth = 40;
const wigth = 70;
const S = higth * wigth;
console.log('Площадь = ' +S);

//Задание 3:
const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
const generalSpeed = speedOfFirst + speedOfSecond;
const distans = generalSpeed * time;
console.log('Расстояние = ' +distans);

let time1 = 2,
    speedOfFirst1 = 95,
    speedOfSecond1 = 114;
let distans1 = time * (speedOfFirst1 + speedOfSecond1);
console.log('Расстояние = ' + distans1);


//Задание 4:
const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20){
    console.log("randomNumber меньше 20");
} else if (randomNumber > 20){
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}


//Задание 5:
const randomNumber1 = Math.floor(Math.random() * 100);
switch(randomNumber1){
    case randomNumber1 < 20 && randomNumber1: // так я сравниваю два числа
        console.log("randomNumber меньше 20");
        break;
    case randomNumber1 > 50 && randomNumber1:
        console.log("randomNumber больше 50");
        break;
    default:
        console.log("randomNumber больше 20, и меньше 50");
        break;
}



