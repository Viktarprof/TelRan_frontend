// Задача 1
// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

checkDate = () => {
    let date = new Date().getDate();                // текущий день
    let endDate = new Date('2023-01-31').getDate(); // указал год-месяц и день когда закончится текущий месяц. из этого всего выбрать только день
    let days = endDate - date;                      // если написать с +1, с учетом текущего дня.
    console.log('Количество дней до конца текущего месяца: ' + days); 
    // console.log('январь '+ date);
    // console.log('февраль '+ endDate);
}
checkDate()




// Задача 2 ======================
// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.
// Предусмотрите вывод 4 пункта (дня, дней)

let toDayIs = new Date().getDay();              // текущий день недели
// console.log(toDayIs);
let Friday = new Date('2023-01-20').getDay();   // установил точный день недели - пятница
// console.log(Friday);
let newfriday = Friday - toDayIs;
// console.log(newfriday);
isItFridayToday=()=>{
    if( toDayIs == 5){
        console.log('Сегодня пятница!');
    } else if( toDayIs == 6){
        console.log('Пятница была вчера!');
    } else if( toDayIs == 4){
        console.log('Завтра пятница!');
    } else {
            if(toDayIs != 1){
                console.log("Пятница будет через " + newfriday + ' день.')
            } else {
                console.log("Пятница будет через " + newfriday + ' дня.')
            }
        }
}
isItFridayToday()




// Задача 3 ======================
// Задан массив prices, передающий элементы строкового типа. 
//Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:
///Результат: [3,3]

//Пример:
let prices = [ 
            'Цена товара - 1200$', 
            'Стоимость - 500$', 
            'Цена не определена', '9999',
            'Ценовая категория - больше 300$',
            'Цена за услугу 500 EUR',
            ];
const newArray = [];
    function getInfo(prices) {
        const price_count = prices.reduce((acc, curr) => curr.includes('Цена') ? acc += 1 : acc, 0);
        const count_$ = prices.reduce((acc, curr) => curr.includes('$') ? acc += 1 : acc, 0);
            newArray.push(price_count, count_$)
        return newArray
}
    console.log(getInfo(prices));


    

// Задача 4 ======================
// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру.
// Результат:
// ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] 
// ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']

let arrays = [ 
            '89840959944 exampleonemain@mail.ru', 
            '+79840959933 forreason@yandex.net', 
            'somemail@mail.ru', 
            '89840959900 example@gmil.ru', 
            '+79840959911', 
            'grandthere@mail.ru',
            'jetpackfor@gmail.ru',
            '89840959922 some@yandex.com',
            ];
let reg_phones = /^\W*\d{11}/
let reg_email = /\s*\w+[@]\w+[.]\w+/
    const phones = [];
    const email = [];
for (const el of arrays) {
    if(el.match(reg_phones)){
        phones.push(el.match(reg_phones)[0])
            //const phones  = arrays.map((el => el.slice(el.indexOf(el.match(reg_phones)),el.indexOf(' '))));  // в этом варианте сформирует с пустыми значениеми если нету цифр. ПОТОМУ ЧТО НЕ ПОДХОДИТ ПО МАСКЕ??
            //console.log(phones);
    } else if(el.includes("@")){
        const email = arrays.filter((el) =>  el.includes('@'));
        // email.push(el.match(reg_email)[0])
        console.log(email);
    }
}
// console.log(phones);





// Задача 5 ======================
// Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.
// Результат: [
// '4000*****9499',
// '4000*****7379',
// '4000*****9869',
// '4000*****7859',
// '4000*****6899',
// '4000*****4699'
// ]

	let cards = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]
let reg_cards = / \d{4} \d{4} /
const new_cards = cards.map((el) => el.replace(el.match(reg_cards), '*****'));
console.log(new_cards);
	


