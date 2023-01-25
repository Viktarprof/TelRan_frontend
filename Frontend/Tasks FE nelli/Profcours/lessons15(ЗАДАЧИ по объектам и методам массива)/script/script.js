// 1. Создать функцию, которая принимает в качестве аргументов объект и ключ объекта и возвращает значение по этому ключу

const user = {
  firstname: 'Oleg',
  age: 30
}
const product = {
  title: 'Apple',
  price: 500,
  country: 'Germany'
}

const objValue = (obj , key) => obj[key];
  console.log(objValue(user, 'firstname')); // 'Oleg'
  console.log(objValue(user, 'age')); // 30

  console.log(objValue(product, 'price')); // 500
  console.log(objValue(product, 'country')); // 'Germany'


// 2. У объекта product зменить значение price на 700;
// 3. У объекта product увеличить значение price на 700;

const products = {
    title: 'Apple',
    price: 500,
    country: 'Germany'
  }
  products.price = 700;  // изменил значение
  
  products.price = products.price + 700; // добавил к значению +700
  products.price +=700;
  console.log(products);


  // 4. у объекта product увеличить значение price на +1
  products.price++;
  products.price += 1;
  console.log(products);







// 5. Дан массив. Проверьте, что массив не пустой - в нем есть хотя бы один объект со свойством salary
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
  const salaries = users.map(el => el.salary ? '+' : '-');
  console.log(salaries);
  console.log(Object.keys(users[0]));




// 8. Узнать количество совершеннолетних пользователей. Вывести число в консоль

const adults_count = users.filter(el => el.age >= 18).length;
console.log(adults_count);

// const age = []
// users.forEach(el => el.age >= 18 ? age.push(el.age) : el);
//   console.log(age);






  // 9. Напишите функцию, которая находит в массиве users объект с age 30 и возвращает этот объект, но со значением age 85. Результат вызова функции вывести в консоль
// {
//   first_name: 'Denis',
//   last_name: 'Sokolov',
//   age: 85,
//   salary: 760
// }

const change_age = () => {
  const target_obj = users.find(el => el.age === 30); // находит объект по условию
  target_obj.age = 85; // у найденного объекта меняет значение свойства age
  return target_obj // возвращает измененный объект
}
console.log(change_age());


const change_age1 = () => {
const test = users.find(el => el.age = 30 ? el.age = 85 : el)
console.log(test);
}
change_age1()

console.log();

// 10. Сформировать массив из людей, чье имя начинается на I. В новом массиве увеличить всем возраст на 1

const change_users = () => {
  const i_people = users.filter(el => el.first_name.startsWith('I'));
  for (let el of i_people){
    el.age++
  }
  return i_people
}
console.log(change_users());

//=============================
const new1 = users.filter(el => el.first_name.startsWith('I') ? el.age++ : null);
console.log(new1);

