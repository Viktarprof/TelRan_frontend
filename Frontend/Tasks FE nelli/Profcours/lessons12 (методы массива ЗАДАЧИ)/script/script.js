// Дан массив с числами
let numbers = [3, -10, 7, 0, -50, 67, -47, 4, 564];

// 1. Сформировать массив, в который попадут все положительные числа, заканчивающиеся на 7
const new1numbers = numbers.filter((value) => value > 0 && value % 10 === 7)
console.log(new1numbers);

// 2. Написать программу, высчитывающую количество положительных чисел в массиве => 5
const new2numbers = numbers.filter((value) => value > 0);
console.log(new2numbers.length);




// Дан массив с числами
let numbers2 = [4, 16, -5, 9, -81, 100, -49];

// 3. Сформируйте массив из положительных чисел. Извлеките из каждого значения квадратный корень. Отсортируйте полученные числа в массиве в порядке возрастания.
// => [2, 3, 4, 10]
const newnumbers2 = numbers2
                            .filter((value1) => value1 > 0)
                            .map((value2) => Math.sqrt(value2))
                            .sort((a, b) =>  a - b)
console.log(newnumbers2);




// Дан массив с разными типами данных
let elements = [true, 'hello', 'apple', 4, undefined, 'banana', -7];
// 4. Сформировать массив из строк. Если елемент не строка, подставить вместо него строку 'not a string'

const newelements = elements.map((value) => typeof value != 'string' ? 'not a string' : value);
console.log(newelements);




// Дан массив с числами
const nums = [1, 2, 3, 4]; 
// 5. Найти среднеарифметическое число => 2.5
const newnums = nums.reduce((prev, next) => prev + next, 0) / nums.length;
console.log(newnums);






const users = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  },

  {
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 12,
    salary: 250
  },

  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  }
];

// 6. Пройтись по массиву методом forEach() и вывести каждый элемент массива в консоль

users.forEach((value => console.log(value)));






// 7. Получить из всех объектов значения age и сформировать из них массив чисел users_age => [20, 12, 46, 30]
const users_age = users.map((value) => value.age);
console.log("массив users_age = " + users_age);

// 8. Сформировать массив из users, который зарабатывают больше 700
const users_salary = users.filter((value) => value.salary > 700);
console.log(users_salary);

// 9. Добавьте в конец массива users объект со следующей информацией:
// {
//   first_name: 'Anton',
//   last_name: 'Bogomolov',
//   age: 19,
//   salary: 300
// }
users.push({
            first_name: 'Anton',
            last_name: 'Bogomolov',
            age: 19,
            salary: 300
          });
console.log(users);



// ДЗ:
// 1. Сформируйте массив из строк, состоящих только из имен и фамилий пользователей. Выведите результат в консоль.
// решение 1
const users_name = users.map(el => el.first_name + el.last_name);
console.log(users_name);
//решение 2
const users_names1 = users.map(el => `${el.first_name} ${el.last_name}`);
console.log(users_names1);
//решение 3
users.forEach((value) => console.log(value.first_name, value.last_name));


// 2. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// пример ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']
const newArrayUsers = users.filter((value) => value.age >= 18)
                            .map((el) => `${el.first_name} ${el.last_name} (возраст ${el.age} лет) : ${el.salary}`)
                          //.map((value1) => `Имя - ${value1.first_name}  Фамилия - ${value1.last_name} (возраст): ${value1.age} лет  зарплата: ${value1.salary} - usd`)
console.log(newArrayUsers);


// 3. Сформируйте новый массив без объекта, где first_name == "Irina"
// решение 1
const users_without_irina = users.filter(el => el.first_name !== 'Irina');
console.log(users_without_irina);

// решение 2
const withoutIrina = users.findIndex((value) => value.first_name == "Irina" + users.splice(2,1));
console.log("индекс объекста 'Irina' = " + withoutIrina); 
users.splice(2,1); // удалить со второго индекса один объект
console.log(users);






