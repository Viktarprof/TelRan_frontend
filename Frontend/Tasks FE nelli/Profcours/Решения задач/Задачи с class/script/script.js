// Реализуйте класс Student (студент), который будет иметь следующие свойства: 
// name (имя), lastname(фамилия), major (специализация), grade (оценка)
// Реализйуте метод get_info (выводит в консоль строку 'Имя: <Имя>, Фамилия: <Фамилия>, Специализация <специализация>, Средний балл: <оценка>')
// Реализуйте методы change_grade_up и change_grade_down, которые будет изменять свойство grade на переданное значение

class Student{
  constructor(name, lastname, major, grade){
        this.name = name
        this.lastname = lastname
        this.major = major
        this.grade = grade
  }
  get_info(count_evaluation){
    let average_score = (this.grade / count_evaluation).toFixed(2);
    console.log(`Имя: ${this.name}, Фамилия: ${this.lastname}, Специализация ${this.major}, Средний балл: ${average_score}`);
  }
  change_grade_up(up){
    this.grade += up;
  }
  change_grade_down(down){
    this.grade -= down;
  }
}
const students1 = new Student('Viktor', 'Kalosha', 'Front-End', 23);

students1.get_info(2) // в скобках задаю кол-во оценок
students1.change_grade_up(10); // в скобках добавляю одну оценку
students1.change_grade_down(7); // в скобках убираю одну оценку
console.log(students1);