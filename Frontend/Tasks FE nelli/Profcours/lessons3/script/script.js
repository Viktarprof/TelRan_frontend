// CALLBACK

// Callback function - функция переданная в другую функцию в качестве аргумента

const func_1 = (func_2) => {}

//func_1 - функция высшего порядка
//func_2 - callback-функция

// Зачем всё это?

// const mult_2 = () => 2 * 2;
// const mult_3 = () => 2 * 3;
// const mult_4 = () => 2 * 4;

// const mult_ = (num) => 2 * num;
// console.log(mult_(2)); // 2 * 2
// console.log(mult_(3)); // 2 * 3
// console.log(mult_(50)); // 2 * 50

//=============================================
// const numbers = [1, 2, 3, 4, 5];

// const squareNums = (arr) => {
//   let result = [];
//   for(let i = 0; i < arr.length; i++){
//     result.push(arr[i] ** 2)
//   }
//   return result
// }

// const divideNums = (arr) => {
//   let result = [];
//   for(let i = 0; i < arr.length; i++){
//     result.push(arr[i] / 2)
//   }
//   return result
// }

// const multNums = (arr) => {
//   let result = [];
//   for(let i = 0; i < arr.length; i++){
//     result.push(arr[i] * 2)
//   }
//   return result
// }

// squareNums(numbers);
// divideNums(numbers);
// multNums(numbers);


//==================================
// // CALLBACK
//  const numbers = [1, 2, 3, 4, 5];
// const changeNums = (num, instruction) => {
//   let result = [];
//   for(let i = 0; i < num.length; i++){
//     result.push(instruction(num[i]))
//   }
//   console.log(result)
// }

// const mult_on_2 = (num) => num * 2;
// const divide_on_2 = (num) => num / 2;
// const pow_on_2 = (num) => num ** 2;

// changeNums(numbers, mult_on_2);
// changeNums(numbers, (a) => a * 2);
// changeNums(numbers, divide_on_2);
// changeNums(numbers, pow_on_2);

// let numbers_2 = [10, 20, 25, 56];
// changeNums(numbers_2, divide_on_2);
// changeNums(numbers_2, mult_on_2);





