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
arr6.forEach((el) => el = el >= 0 ? newArr6.push(el ** 2) : '-');
console.log("Квадраты положительных чисел = " + newArr6);







let words = ['велосипед', 'самокат', 'машина', 'лыжи']
words.forEach((elem, index) =>{ 
console.log(`(${index}) ${elem}`);
});

// отрицательные сделать положительными
const arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
const new_arr7 = arr6.map((elem) => elem < 0 ? elem * -1 : elem)
console.log('отрицательные сделать положительными'+new_arr7);

//  создать массив с длинной слов больше 7 букв
const new_words = words.filter((elem) => elem.length >= 7)
console.log('слова больше 7 букв = '+new_words);


// создать массив из цен
let prod = [
    {
        id: 1,
        price: 5000,
        product: 'car',
        discount: 0.05
    },
    {
        id: 2,
        price: 7000,
        product: 'house',
        discount: 0.10 // 10%
    },
    {
        id: 3,
        price: 4000,
        product: 'bike',
        discount: 0.90 // 90%
    }
];
const new_prod = prod.map((elem) => elem.price);
console.log('массив из цен = ' + new_prod);

// посчитать цену с учетом скидки
prod.forEach((elem) =>
    elem.realPrice =  elem.price * (1 - elem.discount));
    // delete elem.price
console.log(prod);




// удалить товар при указании id
function delete_product(num_id){
prod = prod.filter(({id}) => id !== num_id);
}
delete_product(2)
console.log(prod)



// изменить цену одного товара при указаннии индекса товара
function change_price(p_id, new_price){
    prod.find(({id}) => id === p_id).price = new_price;
}
change_price(3, 90);
console.log(prod)






// indexOf проверяет есть ли элемент в масиве и возврщает индекс этого элемента 
// находит первый индекс из массива
// если элемента нету то пишет  -1 
// учитывать регистр

const a = [9, 8, 7, 5, 4, 7, 2];
const new_a = a.indexOf((7, 2), 7 !== -1 ? 'yes' : 'no') // как проверяет 
console.table(new_a);

const b = ['hi', 'hello'];
const new_b = b.indexOf(('hi'), 'hi' !== -1 ? 'yes' : 'no') // как проверяет 
console.log(new_b);


//                 массив / элемент / откуда начать
function indexOfemul(arr, item, from = 0){
    for( let i = from; i < arr.length; i++){
        if(arr[i] === item){
            return i
        }
    }
    return -1
}
console.log(indexOfemul(a,7,3));



// filter = в фильтре возращается true / false



// includes проверяет елить ли элемент в массиве или нету
// true
// false
// делает поиск символов по строке

const test = [44,55,66,77,88,99,2,3,4];
const new_test = test.includes(88,5); // вторая позиция, цифра 5, говорит с какого индекса делатб проверку
console.log(new_test);
// подробно
// if(test.includes(88)){
//     console.log('yes');
// } else{
//     console.log('no');
//}
const srt = 'dtybkjhionguy'
const new_srt = srt.includes('bkj');
console.log('В строке есть символы (bkj) = ' + new_srt);



// найти имена с OV , VA
const user = [
    {
        id: 1,
        name: 'Ivanov',
        product: 'car',
        age: 5
    },
    {
        id: 2,
        name: 'Petrov',
        product: 'house',
        age: 10
    },
    {
        id: 3,
        name: 'Alexeev',
        product: 'bike',
        age: 50
    }
];
let new_user = user.filter((elem) => elem.name.includes('ov'));
console.log(new_user);


// добавили новый элемент в массив с помощью MAP
// const temp = [ 10, 30, 5, 9, 40, 25, 7];
// let new_temp = temp.map((element, index, array) => {
//     if (index == 2){
//         array[index+1] = 66;
//     }
//     return element;

// });
// console.log('старый массив = '+ temp);
// console.log('в новый массив добавили 66 = ' + new_temp)


// обрезать пробелы .TRIM()
// слова с маленькой буквы  tolocaleLowerCase()