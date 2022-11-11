//Напишите функцию power, которая в качестве аргумента n принимает число и возвращает квадрат этого числа.
// function power (value){
//     const result = value ** 2;
//     console.log(result);
// }
// power (3);
// for (let i = 0; i< 10; i++){
//     power (i);
// }
  
      
  


//Напишите функцию, power, которая принимает два аргумента (основание стемени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power (value, p){
// const result = value ** p;
// console.log(result);
// }
// power(2, 2);







//Напишите функцию, max_number, которая принимает два аргумента с числовым значением и возвращает большее значение.//
// function max_number (value, value1){
//     if(value > value1){
//         return value    
//         } else {
//         return value1
//     }
// }

// console.log(max_number(104, 1));
// console.log(max_number(10, 100));








//Напишите функцию, range, которая принимает два аргумента (n и m) с числовым значением и возвращает массив с числами от n до m -1.//
// function range(n, m){
//     const result = [];
//         for (let i = n; i < m; i++){
//             result.push(i);   
//         }
//         return result;
// } 
// console.log(range(2,100));


//Напишите функцию, num_count, которая в качестве аргумента принимает целое 
//число и возвращает количество цифр в этом числе.

//   function num_count(num){
//          let string = ''+num
//          let count = 0
//         for (let i = 0; i < string.length; i++){
//             count ++
//         }
//         return count;
//     }
//     console.log(num_count(197289));

// тоже самое решение

    // function num_count1 (numbers){
    //     return (''+numbers).length
    // }
    // console.log(num_count1(112));
    





    //Напишите функцию, get_hypotenuse, которая в качестве аргумента 
    //принимает два числа (длины катетов) и возвращает гипотенузу.
    // function get_hypotenuse(a, b){
      
    //   const hypo = Math.sqrt((a ** 2)+(b ** 2))
    //     return hypo
        
    // }console.log(get_hypotenuse(3,4)) // 25 kv = 5
  


// Создайте функцию handler, которая принимает два аргумента, массив и число. Функция должна сформировать новый массив на основе заданного и исключить из него указанное число.

//Для решения задачи используйте метод массива filter.

  function handler(arr, num){
   let myarrs = [];
   
   for (let i = 0; i < arr; i++){
      if (arr = num){
        myarrs.push(i)
      }
    }return myarrs;
  }
  console.log(handler(10, 5))
