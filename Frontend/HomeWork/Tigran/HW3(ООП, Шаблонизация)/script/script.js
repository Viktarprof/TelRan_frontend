// ЗАДАЧА 1
// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру.
// Результат: ['key1','key2','key3','key4']
// Пример:
let someObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
        }
// #1
function getKeys(obj){
    const key_s = []
    for (const key in obj) {
        key_s.push(key)    
    }
    return  key_s; 
}
console.log(getKeys(someObj));

// #2
function getKeys(result){
    return 'результат работы метода Object.keys() согласно примеру ' + result; 
}
console.log(getKeys(Object.keys(someObj)))



//==================================
// ЗАДАЧА 2
// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение. 
// Результат: 3
// Пример: [1,2,3,4,5]
// #1
getAvg1 = (example) => {
    let count = example.reduce((acc,cur) => acc + cur, 0);
    return 'среднее значение = ' + count / example.length;
}
console.log(getAvg1([1,2,3,4,5]));

// #2
getAvg2 = (example) => {
    let count = 0;
    for (let iterator in example) {
        count += example[iterator]
    }
  // console.log(count); // 15
    return 'среднее значение = ' + count / example.at(-1);
};
console.log(getAvg2([1,2,3,4,5]));

// #3
getAvg3 = (example) => {
    let count = 0;
    for (let elem = 0; elem < example.length; elem++) {
        count += example[elem]
    }
    return 'среднее значение = ' + count / example.length;
};
console.log(getAvg3([1,2,3,4,5]));




//==================================
// ЗАДАЧА 3
// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’.
// Результат: 3
// Пример: [1,true,'3','value1',9,'key']


// #1
countString1 = (array) => {
    let srtings1 = array.filter(el => typeof el == 'string');
        console.log(`Количество элементов ‘string’ = ${srtings1.length}`);  // 3
}
countString1([1,true,'3','value1',9,'key']);

// #2
countString2 = (array) => {
    let srtings2 = array.filter(el => typeof el == "string").length; 
    console.log(`Количество элементов ‘string’ = ${srtings2}`); // 3
}
countString2([1,true,'3','value1',9,'key']);

// #3
countString3 = (array) => {
    const count = [];
    let srtings3 = array.reduce((acc, cur) => typeof cur == "string" ? count.push(acc + cur) : 0); 
        console.log(`Количество элементов string = ${srtings3}`);
}
countString3([1,true,'3','value1',9,'key']);

// #4
countString4 = (array) => {
    let srtings4 = array.reduce((acc, cur) => typeof cur == "string" ? acc + 1 : acc, 0); // добавляем +1 к асс если == "string"
        console.log(`Количество элементов string = ${srtings4}`);
}
countString4([1,true,'3','value1',9,'key']);



//==================================
// ЗАДАЧА 4
// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру.
// Примечание: Использовать класс Object нельзя
// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]
// Пример:
let someObj1 = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
        };
////#1
getEnteries = (object) => {
const test = [];
    for (let key in object) {
    test.push([key, object[key]]);
    }
    return test
}
console.log(getEnteries(someObj1))


// #2
getEnteries = (obj) => {
    return 'результат работы метода Object.entries =', Object.entries(obj)
}
console.log(getEnteries(someObj1));



//==================================
// ЗАДАЧА 5
// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива
// 	Результат: 
	        // {
            // key1: 1,
            // key2: true,
            // key3: ‘3’,
            // key4: ‘value1’
            // key5: 9,
            // key6: ‘key’
//      }
const array =  [1,true,'3','value1',9,'key'];

// #1
const new_array = array.reduce((object, value, index) => {
    return {...object, [`key${index + 1}`]: value}
}, {});
  console.log('Объект по следующему правилу ', new_array)

// #2
    let obj_k = {}
for (let i = 0; i < array.length; i++) {
   obj_k[`key${i+1}`] = array[i]
}
console.log('Объект по следующему правилу ', obj_k)

// #3
    let obj_k1 = {}
for (let i in array) {
   obj_k1[`key${+i+1}`] = array[i]
}
console.log('Объект по следующему правилу ', obj_k1)

// #4

let obj_k2 = {}
array.forEach((el, idn) => obj_k2[`key${idn + 1}`] = el);
console.log(obj_k2);


// #5
const obj = Object.assign({}, array );
    console.log('Объект по следующему правилу ', obj)











    
// ---- КОНСУЛЬТАЦИЯ 28.01.2023 ------------------
// Напишите функцию getSqrt(), которая может принимать любое количество аргументов. 
// Функция после вызова должна будет вывести в консоль первое попавшее число, корень которого вычисляется без остатка. Если элемент не найдется - функция должна вывести в консоль "none"


getSqrt=(array) => {
for (const iterator of array) {
    if (Math.sqrt(iterator) % 1 == 0){
        console.log(iterator)
        return
        }
    }
    console.log( "none")
}
getSqrt([19,2,3,4,5,6,7,8,9])


getSqrt1=(array) => {
    console.log(array.find(elem => Math.sqrt(elem) % 1 == 0) || "none");
}
getSqrt1([19,2,3,4,5,6,7,8,9])


getSqrt2=(array) => {
    console.log(array.find((el) => Math.sqrt(el) % 1 == 0 ? Math.sqrt(el) % 1 == 0 : "none"));
    } // не отработала 
getSqrt2([19,2,3,4,5,6,7,8,9])