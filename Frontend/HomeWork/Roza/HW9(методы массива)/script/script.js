// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"
const numbers = [3, 12, 87, 4, 556, -9, -50];
const new1 = numbers.toString()
console.log('массив в виде строки = ' + new1);



// 2)Используя метод reduce, посчитайте сколько людей проголосовали.
const voters = [
    {name:'Bob' , age: 30, voted: true}, // голосовали 7
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false}, // не голосовал 5
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true}, 
    {name: 'Jeff', age: 30, voted: true}, 
    {name: 'Zack', age: 19, voted: false} 
];
let new_voters = voters.reduce((acc,curr) => acc + (curr.voted === true ? 1 : 0), 0); // проверка на втором значении . добавление нуля в этом случае обязательно
 console.log('Проголосовало людей = ' + new_voters)


// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 } // 207 005
];
let summPrice = 0;
wishlist.forEach((elem) => (summPrice += elem.price))
console.log('Cколько стоит все сразу? = ' + summPrice) 



// 4) Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, avgmark. Avgmark содержит среднеарифметическое значение marks.
// Массив для задачи:
const product = [ 
        {id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5]},
        {id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4]},
        {id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3]},
        {id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4]}
 ];

 product.forEach((elem)=>{
    elem.avgmark = elem.marks.reduce((acc, cur, index) => (acc + cur) / index + (acc + cur) % index ); // МОЖЕТ ЕСТЬ правильное решение с одним действием?
    delete elem.marks;
 })
 console.log(product) 

// 5) Оставить только положительные числа 2)создать массив, состоящий из квадратов этих чисел.
const arr6 = [1, -2, 3, 0, 4, -5, 6, -11];
const newArr6 = [];
arr6.forEach((el) => el = el >= 0 ? newArr6.push(el * el) : '-');
console.log("Квадраты положительных чисел = " + newArr6);

