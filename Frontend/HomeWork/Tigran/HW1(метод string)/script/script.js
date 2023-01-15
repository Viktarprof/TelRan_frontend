//  ЗАДАЧА 1    Задан массив elems, передающий элемент HTML разметки.  Реализуйте очистку данных по примеру ниже: 
// Результат: ['Home','About','FAQ','Contacts']
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 

const newElems = elems.map((elem) =>  elem.replace('<div><p class="text">','').replace('</p></div>', ''))
console.log(newElems);


// // ЗАДАЧА 2     Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 
// // Результат: ['Cтакан','Молоко','Табуретка','Вода']
let words = ['стакан','молоко','табуретка','вода'] 
function initCap(){
    const newwords1 = words.map((elem) =>elem[0].toUpperCase() + elem.slice(1));  // возвращаем новый массив. Выводим ТОЛЬКО индекс 0 с большой буквы. А начиная с индекса 1 вывести остальной текст
    console.log(newwords1);
    }
initCap(words)



// // ЗАДАЧА 3     Задан массив names. Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 
// Пример: 
// // Результат: [ 
// // ['Steven','King'], 
// // ['Jonh','Snow'], 
// // ['Oliver', undefined], 
// // ['Neena','Stich'], 
// // ['Grant','Laster'], 
// // ['Persius','Master'],
// // ['Lest', undefined] ]
// // ]
let names = [ 
'Steven King', 
'Jonh Snow', 
'Oliver', 
'Neena Stich',
 'Grant Laster', 
'Persius Master', 
'Lest' 
]   
const full_names1 = names.map((el) =>
el.includes(' ') ? el.split(' ') : el.split(' ').concat(undefined)); // проверяем на наличие пробела. если да то разделить ковычками. Если нет то ковычки и undefined
console.log(full_names1);


