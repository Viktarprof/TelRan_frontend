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
    first_name: 'irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  },

  {
    first_name: 'Anton',
    last_name: 'Bogomolov',
    age: 19,
    salary: 300
  }
];

console.log('========================');
// 4. Сформировать массив из объектов, в которых имя начинается на букву I. Регистр может быть любой.
const usersI = users.filter((value) => value.first_name[0].toLowerCase() == 'i');
console.log(usersI, usersI.length);


console.log('========================');
// 5. Найти в массиве элемент/объект с именем Olga и записать его в отдельную переменную.

const user_find = users.find(el => el.first_name === 'Olga'); // возвращает первый элемент, подходящий по условию
console.log(user_find.first_name);

const user_filter = users.filter(el => el.first_name === 'Olga'); // возвращает новый массив, в который попадут все элементы, подходящие по условию
console.log(user_filter);


console.log('========================');

// 6. Поменяйте местами первый и последний элементы массива
const first_el = users.shift();
const last_el = users.pop();
users.push(first_el);
users.unshift(last_el);
console.log(users);


//---------------
let firstElement = users[0];
users[0] = users[users.length - 1];
users[users.length - 1] = firstElement;
console.log(users);



console.log('========================');
//7. Сформировать массив из имен пользователей. Все имена в массиве должны быть с заглавной буквы. => ['Anton', 'Olga', 'Irina', 'Denis', 'Ivan']


const newFirstNames = users.map(el => el.first_name[0].toUpperCase() + el.first_name.slice(1));
console.log(newFirstNames);



console.log('========================');
// метод массива .join() - возвращает строку, состоящую из элементов массива 

const strings = ['Anton', 'Irina', 'Olga', 'Ivan'];

console.log(strings.join());    // => 'Anton,Irina,Olga,Ivan';

console.log(strings.join(''));    // => 'AntonIrinaOlgaIvan';
console.log(strings.join(' '));  // => 'Anton Irina Olga Ivan';
console.log(strings.join(', '));  // => 'Anton, Irina, Olga, Ivan';