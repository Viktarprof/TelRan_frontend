// 1. Создать кнопку с размерами 30х30 пикс, при каждом нажатии на кнопку увеличивать высоту и ширину на 10 пикс

// первый варинт 
//const incr_btn= document.querySelector('.incr_btn');
//     let btn_size = 30;
// const incr_btn_render = (size) =>{
//     incr_btn.style.height = size + 'px'; 
//     incr_btn.style.width = size + 'px'; 
// }
// incr_btn_render(btn_size);
// incr_btn.addEventListener('click', () => {
//     btn_size += 10;
//     incr_btn_render(btn_size);
// });


//============
//второй вариант
const divs = document.createElement('div');
divs.style.padding='10px';
const p1 = document.createElement('p');
p1.innerText = 'Увеличиваем размеры кнопки при каждом нажатии'

const incr_btn1 = document.createElement('button');
incr_btn1.innerText = '+';
let size = 30;
incr_btn1.style.cssText = `width: ${size}px; height: ${size}px`;

incr_btn1.addEventListener('click', () => {
    size += 10;
    incr_btn1.style.cssText = `width: ${size}px; height: ${size}px`;
});
divs.append(p1,incr_btn1)
document.body.append(divs)

//==================================================
//Math random

// const a = Math.max(3, 155, 43, 2, 400); // 155
// const b = Math.min(3, 155, 43, 2); // 2

// const c = Math.ceil(4.28); // 5 округление вверх
// const d = Math.floor(4.28); // 4 округление вниз
// const e = Math.round(4.28); // 4 округление по правилам математики
// const f = Math.random() // возвращает случайное дробное число от 0 до 1.

// console.log(c);
// console.log(d);
// console.log(e);



//==================================================
// // 3. Вывести в консоль случайное целое число от 0 до 10
let random_num1 = Math.round(Math.random()*10);
console.log(random_num1);
// console.log(Math.round(random_num*10));

let random_num2 = Math.round(Math.random() * 10); // 0 -10
let random_num3 = Math.round(Math.random() * 10 +1); // 1 - 11
let random_num4 = Math.round(Math.random() * 10 +5); // 5 - 15
console.log(random_num2);
console.log('число от 1 до 11 = ' + random_num3);
console.log('число от 5 до 15 = ' + random_num4);

Math.random() * 15; // 0 - 15
Math.random() * 15 + 10 // 10 - 25

Math.random() * 30; // 0 - 30
Math.random() * 30 + 100; // 100 - 130


//==================================================
// // 4. Вывести в консоль случайное целое число от 10 до 25
let random_num5 = Math.round(Math.random() * 15 + 10);
console.log('число от 10 до 25 = '+random_num5);




//==================================================
//5 Рамдомно поменять цвет кнопки при кажом нажатии.
const div = document.createElement('div');
div.style.padding='10px';
const pColor = document.createElement('p');
pColor.innerText = 'Случайный цвет кнопки';

const random_btn = document.createElement('button');
random_btn.innerText = 'Click';

const getColorNum = () => Math.round(Math.random() * 255);

random_btn.addEventListener('click',(event)=>{
   event.target.style.backgroundColor = `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()})`;
}); 
div.append(pColor,random_btn)
document.body.append(div)



//==================
//6 Бросить кости. Рамдобно показать цифры.
const div1 = document.createElement('div');
div1.style.padding = '10px';
const pText = document.createElement('p');
pText.innerText = 'Случайные числа'

const random_num = document.querySelector('button');
random_num.innerText = 'Бросить кости.'
const p = document.createElement('p');

const getNum = () => Math.round(Math.random()*9);

random_num.onclick =()=>{
   p.innerText = `${getNum()} X ${getNum()}`;
};
div1.append(pText,random_num,p)
document.body.append(div1)

//==============





