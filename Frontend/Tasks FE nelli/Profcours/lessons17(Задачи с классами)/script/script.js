// 1. Реализовать класс Car со следующими свойствами:
// company_name, model, color, country, volume
// Создать экземпляр этого класса
// Вывести в консоль все свойства созданного экземпляра класса


class Car {
  constructor(company_name, model, color, country, volume){
    this.company_name = company_name;
    this.model = model;
    this.color = color;
    this.country = country;
    this.volume = volume;
  }
  get_car_info(){
    console.log(`${this.company_name} - ${this.country}: ${this.volume}`);
  }
}

const first_car = new Car('Toyota', 'RAV4', 'red', 'Japan', '4.0');
const second_car = new Car('Tesla', 'Sedan', 'red', 'USA', 'electric');

    // console.log(first_car.company_name);
    // console.log(first_car.model);
    // console.log(first_car.color);
    // console.log(first_car.country);
    // console.log(first_car.volume);

// =====================
// Реализовать метод get_car_info, который будет выводить в консоль строку в формате: <Модель> (<Компания>, <Страна>): <Объем>.
// Вызвать метод у созданного экземпляра класса
first_car.get_car_info()
second_car.get_car_info()





//=========================================
// 2. Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group{
  
      constructor(name, major, number =  15){
      this.name = name
      this.major = major
      this.number = number
      }
    add_student(){
      this.number++;
    }
    delete_student(){
      this.number--
    }
}

const group1 = new Group('Test_Group1', 'IT', 22);
const group2 = new Group('Test_Group2', 'IT');


group1.add_student()
group1.add_student()
group1.add_student()
group1.add_student()
group2.delete_student()
group2.delete_student()
group2.delete_student()

console.log(group1);
console.log(group2);



//=======================================
// 3. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализйуте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней amount)

class Worker {
  constructor(name, surname, rate, days){
    this.name = name
    this.surname = surname
    this.rate = rate
    this.days = days
  }
  getSalary(){
    const salary = this.rate * this.days; 
     return salary
  }
  
  add_days(amount){
    this.days += amount
  }
  delete_days(amount){
    this.days -= amount
  }
}
const workers1 = new Worker('Viktor', 'Kalosha', 200, 22);
const workers2 = new Worker('Helen', 'Kalosha', 200, 20);

const sum_salaty = workers1.getSalary() + workers2.getSalary();



console.log(workers1.getSalary());
console.log(workers2.getSalary());

console.log(sum_salaty);

workers1.add_days(5);
workers2.add_days(5);
workers1.delete_days(3)
workers2.delete_days(20)
console.log(workers1);
console.log(workers2);