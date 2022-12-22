
let numbers = [3, 54, -1, 78, -13, -155];

// 1. Cоздать новый массив из отрицательных чисел
let result = numbers.filter((value) => typeof value == 'number' && value < 0)
console.log(result);
let result1 = numbers.filter(value => value < 0);
console.log(result1);
console.log(numbers.filter((value) => typeof value == 'number' && value < 0));

// 2. Сформировать новый массив из чисел, кончающихся на 3
console.log(numbers.filter((value) => value % 10 === 3 || value % 10 == -3));
console.log(numbers.filter((value) => Math.abs(value) % 10 === 3));

// 3. Узнать количество положительных чисел в массиве
let result4 = numbers.filter((value) => typeof value == 'number' && value > 0);
console.log(result4.length);



//4. сформировать новый массив с числами, которые делятся на 5 без остатка
let numbers_2 = [12, 36, 15, 68, 45, 5, 25, 60];
console.log(numbers_2.filter((value) => value % 5 === 0));

let result5 = numbers_2.filter(el => el % 5 === 0);
console.log(result5)


// 5. сформировать новый массив с числами, которые делятся на 3 и на 5 без остатка
// [15, 45, 60]
console.log(numbers_2.filter((value) => value % 5 === 0 &&  value % 3 === 0));




let greetings = ['hello', 'hi', 'good morning', 'good night', 'good afternoon'];

//6. Сформировать новый массив, в который попадут только строки длиннее 10 символов
console.log(greetings.filter((value) => value.length > 10));

let result6 = greetings.filter(el => el.length > 10 )
console.log(result6)





// 7. Сформировать новый массив с совершеннолетними юзерами
let users = [
    ['Ivan', 'Ivanov', 34],
    ['Irina', 'Petrova', 13],
    ['Olga', 'Sidorova', 23],
    ['Anton', 'Orlov', 17]
]
console.log(users.filter((value) => value[2] >= 18));




// 8. Сформировать массив, в который попадут только числовые значения из массива array
let array2 = ['hello', 15, true, 'hi', 177, 3];
console.log(array2.filter((value) => typeof value === 'number'));


// 9. Сформировать новый массив с совершеннолетними юзерами (>=18)
let fb_users = [
    {
      id: 1,
      name: 'Anton',
      age: 18
    },
    {
      id: 2,
      name: 'Irina',
      age: 50
    },
    {
      id: 3,
      name: 'Olga',
      age: 8
    },
    {
      id: 4,
      name: 'Oleg',
      age: 90
    }
  ]
console.log(fb_users.filter((value) =>  value.age >= 18)); // те кому за 18 лет
console.log(fb_users.filter((value) =>  value.name.startsWith('A'))) // вывел  из массива имена начинающиеся на А
console.log(fb_users.filter((value) =>  value.id === 4)) // вывел четвертый объект из массива
