//  ЗАДАЧА 1    Задан массив elems, передающий элемент HTML разметки.  Реализуйте очистку данных по примеру ниже: 
// Результат: ['Home','About','FAQ','Contacts']
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 
// #1
const newElems = elems.map((elem) =>  elem.replace('<div><p class="text">','').replace('</p></div>', ''))
    console.log(newElems);

// #2 универсальное решение
const newElems1 = elems.map((elem) =>  elem.slice(elem.indexOf('">')+2, elem.indexOf('</')))
    console.log(newElems1);

// #3 универсальное решение
const newElems2 = elems.map((elem) =>  elem.slice(elem.indexOf('>', elem.indexOf('>')+1)+1, elem.indexOf('</')))
    console.log(newElems2);



    
// // ЗАДАЧА 2     Напишите функцию initCap(array), которая получает массив с элементами строкового значения и ВОЗВРАЩАЕТ элементы с заглавной первой буквой по примеру: 
// // Результат: ['Cтакан','Молоко','Табуретка','Вода']
let words = ['стакан','молоко','табуретка','вода'] 
function initCap(array){
    const newwords1 = array.map((elem) =>elem[0].toUpperCase() + elem.slice(1));  
  // возвращаем новый массив. Выводим ТОЛЬКО индекс 0 с большой буквы. А начиная с индекса 1 вывести остальной текст
    console.log(newwords1);
    }
console.log(initCap(words))



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
// решение 1
const full_names = names.map((el) => 
el.includes(' ') ? [el.replaceAll(' ', ' ')] : [el.slice(0) + ' , undefined']);
console.log(full_names);


// решение 2
const full_names1 = names.map((el) =>
el.includes(' ') ? el.split(' ') : el.split(' ').concat('undefined')) // проверяем на наличие пробела. если да то разделить ковычками. Если нет то разделитель и undefined
console.log(full_names1);



// решения с урока
// # 1
let full_names2 = []
for (const elem of names) {
    let elemArray = elem.split(' ')
    if(elemArray.length == 2){
        full_names2.push(elemArray)
    } else if (elemArray.length == 1){
        elemArray.push('undefined')
        full_names2.push(elemArray)
    }
    console.log(full_names2);
}

// # 2
names.forEach((elem) =>
  console.log(elem.includes(" ") ? elem.split(" ") : [elem, 'undefined'])
);
