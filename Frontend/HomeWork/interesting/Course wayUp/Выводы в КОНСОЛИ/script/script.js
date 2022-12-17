// DRY(don`t repeat yourself)



// ТРИ ГЛАВНЫХ СОСТАВЛЯЮЩИХ ЛЮБОГО ЦИКЛА
// 1. НАЧАЛО ЦИКЛА (ПЕРЕМЕННАЯ)
// 2. УСЛОВИЕ ЦИКЛА (НАПРИМЕР ПОКА I БОЛЬШЕ, МЕНЬШЕ ....)
// 3. ШАГИ (i++)




/* эти деймтвия будем повторять 8 раз (N коллличество раз)

    я открыл коробку
    я съел конфету
    я закрыл коробку
*/

// WHILE

// let candies = 8;
// while(candies > 0) {
//    console.log(" я открыл коробку, я съел конфету, я закрыл коробку"); // программынй блок. сначала мы спрашиваем сколько у нас конфет? candis  больше чем 0; значит идем дальше и убираем одну конфету. потом нова спрашиваем сколько у нас конфет.
//    candies--    // candies = candies -1;
// }


// let i = 20;
// while(i < 40) {
//     i++
//     console.log(i)
// }






// DO WHILE (сначала делает а потом  проверяет до какого условия делать)
// let x = 0;
// do { x++
// console.log('Hello World');
// } while (x < 0)





// FOR

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }




//Objects

//у объекта есть свойства, НАПРИМЕР: МОДЕЛЬ, ЦВЕТ, СТАРАНА, ГОД И ДР (Т.Е ОПИСАНИЕ ЧЕГО-ЛИБО)

// const carBMW = {
//     model: 'BMW',
//     coutry: 'Germany',
//     years: 2010,
//     color: 'red'
// };

// const lada = {
//     model: 'Kalina',
//     coutry: 'Russia',
//     years: 2005,
//     color: 'blue'
// };

//____________
// console.log(carBMW.model);
// console.log(lada.coutry);

// const yearBMW = carBMW.years;
// const yearLada = lada.years;

// console.log(yearBMW);
// console.log(yearLada);

// const result = yearBMW + yearLada;
// console.log(result);
//__________

// lada.years = 3000; // заменил значение переменной 2005 на 3000
//console.log(lada.years)

//__________



// lada.passangers = 4; // добавили снаружи свойство нашей машине
// console.log(lada.passangers);

//_______________________




// ARRAY (МАССИВЫ)

// const colors = ['green', 'blue', 'orange', 'black', 'white'];
// const results = [337, 435, 626, 667,987];
// const answers = [true, false, true, false, true, false, true, true];
// const objects = [
//     {
//         id: 1,
//         firstname: 'Serge',
//     },
//     {
//         id: 2,
//         firstname: 'Helen',
//     },
//     {
//         id: 3,
//         firstname: 'Viktar',
//     },
// ];

// colors [0] = 'pink'; // змена элемента в массиве
// console.log(colors[0]); // обращаемся к элементу массиве

// const students = ['Петров', 'Иванова', 'Пеппа', 'Джордж','Уличкин', 'Гулякин', 'Умничкин', 'Петров', 'Иванова', 'Пеппа','Джордж', 'Уличкин', 'Гулякин', 'Умничкин', 'Петров', 'Иванова','Пеппа', 'Джордж', 'Уличкин', 'Гулякин', 'Умничкин'];

// // проверяем длинну массива
// const amount = students.length; // проверяем длинну массива
// console.log(amount);
// console.log('Всего цветов = ' + colors.length);
// console.log('Всего цифр = ' + results.length);
// console.log('Всего ответов = ' + answers.length);
// console.log('Всего объектов = ' + objects.length);




// FUNCTIONS

//          новый вариент
// const showMassege = () => {
//     console.log('Это сообщение из тела showMassege');
// };
// showMassege();
// showMassege();
// showMassege();
// showMassege();
// showMassege();



//                  старый варинт
// function showMassege (){
//     console.log('Это сообщение из тела showMassege');
// };
// showMassege();
// showMassege();



// const checkAge = (name, age) => {
//     if (age >= 18) {
//         console.log(name + ' идет в армию')
//     } else {
//         console.log(name + ' Идет гулять')
//     }
// }
// checkAge('Serge', 6);
// checkAge('Dmitii', 20);
// checkAge('Alex', 17);
// checkAge('Misha', 24);
// checkAge('Serge1', 6);



// const sum = (x, y) => {
//     return x + y;
// }

// const result = sum(3, 4);
// console.log(result);









//Задание 1:

for(let i = 10; i <= 50; i++){
    if( i % 2 == 0){
        console.log(i);
    }
} 


//Задание 2:
const object = [
    {
    firstName: 'Viktar',
    lastName: 'Kalosha',
    age: 31,
    pupils: true
}
]
for (let i = 0; i < object.length; i++){
const {firstName, lastName, age, pupils} = object[i]
    console.log(` My Name is  ${firstName};  Last name is  ${lastName}; Í have is  ${age}  yaers; I have not a papupils, it is:  ${pupils}. Thank you`);
}



//задание 3
const array = [
    ' я в Симбирск, ',
    ' в трактире. ',
    ' с утра ',
    ' В ту же ночь ',
    ' Я остановился ',
    ' для закупки ', 
    ' что и было поручено Савельичу. ',
    ' приехал, ',
    ' где должен был ',
    ' нужных вещей ',
    ' отправился по лавкам ',
    ' пробыть сутки ',
    ' Савельич '
]
console.log('Your length array = ' + array.length);

for (let i = 0; i < array.length; i++){
console.log(array[i]); // выводит текст в столбик
}


result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] +  array[6] + array[7] + array[8] + array[9] + array[10] + array[11]+ array[12] + array[13];
    console.log(result)
    //так громоздко и на мой взгляд глупо  



// задание 4
const firstName = 'Viktar';
const lastName = 'Kalosha';
function about(){
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
about()

function you(firstName, lastName){
    console.log('You : ' + `${firstName} ${lastName}`);
}
you('Viktar', 'Kalosha');



//задание 5
let number1 = 21;
let number2 = 67;

    while (number1 < number2){
        number1 += 2;
        console.log(number1)
    }


