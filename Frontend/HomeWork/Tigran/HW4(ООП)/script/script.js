//Задача 1
// В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде массива. Результат выведите в консоль. 
// Пример результата: [['value', 15000], ['writable', true], ['enumerable', true], ['configurable', true]]
// Пример значений переменных:

let order = { 
        productName: "Велосипед", 
        costomerName: "Саша", 
        salesName: "Петя", 
        totalPrice: 15000 
} 

let descriptor = [];
    for (let key in order) {
        descriptor.push([key, order[key]]);
        }
console.log(Object.entries(
            Object.getOwnPropertyDescriptor(
            Object.fromEntries(descriptor),'totalPrice')
            ));
     




//Задача 2
// В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны. 
// Пример результата: firstName, lastName, ratePerDay, workingDays
// Пример значений переменных:
let employees = { 
        firstName: "Петя", 
        lastName: "Иванов", 
        ratePerDay: 2500, 
        workingDays: 5, 
        getSalary()  // функция
                { console.log(employees.ratePerDay * employees.workingDays) } 
};


////--------- тут просто удали
delete employees.getSalary;
const new_employees1 = Object.getOwnPropertyNames(employees)
console.log(new_employees1.join(', '))
////=> firstName, lastName, ratePerDay, workingDays

////--------- предполагаю решение должно быть через цикл.
let new_employees2 = [];
    for (let key in employees) {
        if(typeof employees[key] != 'function'){
            new_employees2.push(key)
        }
    }
console.log(new_employees2.join(', '))
// => firstName, lastName, ratePerDay, workingDays

//------- не правильно-- 
// const new_employees = console.log(Object.defineProperty(employees, 'getSalary', {enumerable: false})); 
// const new_employees = Object.getOwnPropertyNames(employees)
// console.log(new_employees); 
// => ['firstName', 'lastName', 'ratePerDay', 'workingDays', 'getSalary']

//------- не правильно-- 
// const new_employees = Object.getOwnPropertyNames(employees)
// console.log(new_employees) 
// => ['firstName', 'lastName', 'ratePerDay', 'workingDays', 'getSalary']
// employees.getSalary() // 12500






//Задача 3
// В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName. 
// Пример результата: false

let name = "Pizza";
let phone = "81234567890";

let validPhone = phone.startsWith('+');

class Delivery{
    constructor(name, phone, validPhone){
        this.name = name
        this.phone = phone
        this.validPhone = validPhone
        }
}
let deliveryName = new Delivery(name, phone); // =>  Delivery {name: 'Pizza', phone: '+81234567890',validPhone: undefined}
// let deliveryName = new Delivery(name, phone, validPhone); // => Delivery { name: 'Pizza', phone: '81234567890', validPhone: false }
console.log(deliveryName);
console.log('validPhone is: ', validPhone);




//Задача 4
// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.
// Входные данные:

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class User extends Permissions{
    constructor (name){
        super()
        this.name = name
    }
}
let user1 = new User ('Viktor')
// Object.defineProperty(user1, 'name', {enumerable: false}) // скрываю свой-во и значение

console.log(user1); // => User {create: false, read: true, update: false, remove: false,name: 'Viktor'}

