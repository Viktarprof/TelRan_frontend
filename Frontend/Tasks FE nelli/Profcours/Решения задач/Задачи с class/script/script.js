// Реализуйте класс Student (студент), который будет иметь следующие свойства: 
// name (имя), lastname(фамилия), major (специализация), grade (оценка)
// Реализйуте метод get_info (выводит в консоль строку 'Имя: <Имя>, Фамилия: <Фамилия>, Специализация <специализация>, Средний балл: <оценка>')
// Реализуйте методы change_grade_up и change_grade_down, которые будет изменять свойство grade на переданное значение

class Student{
  constructor(name, lastname, major, grade){
        this.name = name,
        this.lastname = lastname,
        this.major = major,
        this.grade = grade
  }
  get_info(){
    console.log(`Имя: ${this.name}, Фамилия: ${this.lastname}, Специализация ${this.major}, Средний балл1: ${this.grade}`);
  }
  change_grade_up(up){
    this.grade += up;
  }
  change_grade_down(up){
    this.grade -= up;
  }
}
const students1 = new Student('Viktor', 'Kalosha', 'Front-End', 23);
const students2 = new Student('Test_Students', 'Test_Students', 'Front-End', 2);

students1.change_grade_up(10); // в скобках добавляю одну оценку
students1.change_grade_down(7); // в скобках убираю одну оценку
students2.change_grade_up(5); 
students2.change_grade_down(17)
console.log(students1, students2);




// 2. Написать функцию, которая будет создавать экземпляры класса Student и собирать их в один массив

const students = [];

create_student = (name, lastname, major, grade) => {
  const student = new Student(name, lastname, major, grade)
  students.push(student)
};

create_student('Anton', 'Ushanov', 'JS', 4.5);
create_student('Irina', 'Petrova', 'Python', 3.5);

console.log(students);