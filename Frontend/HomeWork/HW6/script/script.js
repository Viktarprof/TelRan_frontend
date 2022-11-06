//Напишите функцию, max_number, которая принимает два аргумента с числовым значением и возвращает большее значение.
console.log("задача 13")
function max_number(value_1, value_2){
    if (value_1 > value_2){
        return value_1
    }else {value_1 < value_2
    return value_2
}
}
console.log("Большеее число 100 или 25 = " + max_number(100,25));
console.log("Большеее число 44 или 77 = " + max_number(44, 77));





//Напишите функцию, range, которая принимает два аргумента (n и m) с числовым значением и возвращает массив с числами от n до m -1.
console.log("задача 14")
function range(n, m){
    const result = []
    for (let i = n; i <= m-1; i++){
        result.push(i); 
    } return result;
}
console.log("Ваш массив от 1 до 10 = " +(range(1, 10)));




//Напишите функцию, num_count, которая в качестве аргумента принимает целое число и возвращает количество цифр в этом числе.
console.log("задача 15")
function num_count(value){
    let string = ''+value // прошу объяснить для чего тут ковычки ''????
    let count = 0
    for (let i = 0; i < string.length; i++){
        count++ 
    } return count;
}
console.log("В вашем числе 12345 = " + num_count(12345) + " чисел");
 





//Напишите функцию, get_hypotenuse, которая в качестве аргумента принимает два числа (длины катетов) и возвращает гипотенузу.
console.log("задача 16")
function get_hypotenuse(a, b){
    c = Math.sqrt((a ** 2) + (b ** 2)) // пришлось погуглить про Math.sqrt
    return c;
}
console.log(("Гипотенуза = " + get_hypotenuse(3,4))) //25 -> 5