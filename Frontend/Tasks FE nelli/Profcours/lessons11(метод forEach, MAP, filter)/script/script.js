// Метода

// forEach() - ничего не возвращает, проходит по массиву ивозвращает указанную функцию один раз  с каждым элементом массива

// filter() -  возврщает новый массив в который попадут только те элементы, котрые прошли проверку.

// map() - возвращает новый массив, в который попадают все элементы из строго массива, НО после того как к ним применится указанная функция.



// !!!!!!!!!!!!!!!!! задачи с примерами !!!!!!!!!!!!!!!!!!!!!!!
const numbers = [3, 12, 87, 4, 556, -9, -50];
// 1. Задаем массивю. Вывести в консоль каждый элемент массива
// через цикл
for (let i = 0; i < numbers.length; i++){
  console.log('через цикл = ' + numbers[i])
}
//через  forEach
  numbers.forEach(element => console.log('метод foreach = ' + element));




// 2. Задан массив. Сформировать новый массив, в который попадут числа больше 0
let positiveNumbers = [];
for (let j = 0; j < numbers.length; j++){

if (numbers[j] > 0){
  positiveNumbers.push(numbers[j])
}
}
console.log('через цикл = ' + positiveNumbers)

//метод foreach-----
let positiveNumbers2 = [];
numbers.forEach(element => {
  if (element > 0){
    positiveNumbers2.push(element)
  }
});
console.log('метод foreach = ' + positiveNumbers2);

//метод filter-----
const positiveNumbers3 = numbers.filter(el => el > 0);
console.log('метод filter = ' + positiveNumbers3);




//не правильный способ решения задачи
const positiveNumbers4 = numbers.map(event => {
  if (event > 0){
    return event
  }
})
console.log('метод map = ' + positiveNumbers4);



// 3.Cформировать новый массив, в который попадут все числа, умноженные на 2.
// 
let numbers_mult = [];
numbers.forEach( el => numbers_mult.push(el*2))
console.log('forEach = ' + numbers_mult);


let numbers_mult2 = numbers.map(el => el*2); // берет каждые элемент массива и что-то с ним делает
console.log('MAP = ' + numbers_mult2);




// 4. Дан массив со строками. Сформировать  новый массив с теми же строками, но все буквы должны быть в верхнем регистре.
const greetings = ['hello', 'hi'];
const greetings_up = greetings.map(el => el.toUpperCase())// вверхнем регистре
console.log(greetings_up);


// 5. Сформировать новый массив. Если число положительное, умножить его на два. А если отрицательное, то оставить как есть.
//const numbers = [3, 12, 87, 4, 556, -9, -50];

const newarr = numbers.map(element => {
  if(element > 0){
    return element*2
  }else{
    return element
  }
});
console.log('первое решение = ' + newarr);

console.log(numbers.map(event => event > 0 ? event*2 : event));

console.log("Втрое решение= " + numbers.map((value) => (value > 0 ? value * 2 : value)));





// 6. Сформировать новый массив с теми же строками, но если строка длиннее 3 символов, то вернуть ее в верхнем регистре


const new_greetings =  greetings.map(event => event.length >= 3 ? event.toUpperCase() : event);
console.log('первтое решение = ' + new_greetings);

console.log(greetings.map(event => event.length >= 3 ? event.toUpperCase() : event));



// 7. Дан массив random с разными типами данных. Сформировать новый массив, в который попадут только числовые значения из массива random

const random_filter = [5, 'hello', 77, true, 12, false];
const new_random_filter = random_filter.filter(event => typeof event == 'number');
console.log( new_random_filter)

// 8. Сформировать новый массив. Если элемент число, то вернуть этот элемент. В ином случае - вернуть -1
const new_random = random_filter.map(event => typeof event === 'number' ? event : -1);
console.log( new_random)

