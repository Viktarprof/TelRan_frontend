// ДЗ:
// 1. При клике на кнопку выводится сообщение 'hello' в консоль
// 2. При клике на кнопку меняется цвет заднего фона у параграфа
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый

// 1.===========================
// const btnNew = document.createElement('button');
// btnNew.innerText = 'Кнопка для вывода сообщения Hello';
// btnNew.addEventListener('click', () => {
//     alert('HELLO! Нажми еще раз!')
// })

// //---------



// // 2.===========================
// const div1 = document.createElement('div');
// const btn1 = document.createElement('button');
// const p = document.createElement('p');
// p.innerText ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum deleniti, praesentium nostrum suscipit sequi, asperiores laudantium nesciunt reprehenderit nemo temporibus esse ipsum, iste molestias minus. Accusantium dignissimos aliquam explicabo tempo';

// btn1.innerText = 'Цвет фона ';


// btn1.addEventListener('click', () =>{
//     const li = document.createElement('li');
//     li.innerText = 'Я поменял цвет фона LI'
//     li.style.background = 'red';
//     p.style.background = 'green';
//     div1.append(li,)
//     div1.style.width = "200px";
// })
// div1.append(btn1)
// const body = document.querySelector('body')
// body.append(btnNew, div1,p)


// // 3.===========================
// const body1 = document.querySelector('body')
// let btn2 = document.createElement('button');
//     btn2.innerText="Замена фона body";

//   btn2.onclick =() => {
//     body1.classList.toggle('active');
//  }
//   body1.append(btn2)


//   const a = 2;
//   if (a >= 10){
//     console.log('а больше 10')
//   }else {
//     console.log('а меньше 10')
//   }

// a >= 10 ? console.log('а больше 10') : console.log('а меньше 10') // тернарный вариант




//===============================
//4.При клике на кнопку выводить содержимое инпута в консоль

// const show_text_btn = document.querySelector('.show_text_btn');
// const show_text_input = document.querySelector('.show_text');
// show_text_btn.addEventListener('click', () => console.log(show_text_input.value));


//5. При клике на кнопку поменять содержимое инпута с ??? на !!!

const change_text_btn = document.querySelector('.change_text_btn');
const change_text_input = document.querySelector('.change_text_input');
change_text_btn.addEventListener('click', () => 
// первый вариан
change_text_input.value ='!!!');
// второй  вариан
// change_text_input.value = change_text_input.value === '!!!' ? value : "!!!" );


// 6. При клике менять видимость пароля
const btn_vassibility = document.querySelector('.btn_vassibility');
const input_vassibility = document.querySelector('.input_vassibility');
btn_vassibility.addEventListener('click', () =>
// первый вариан
input_vassibility.type = 'password');
// второй  вариан
// input_vassibility.type = input_vassibility.type === 'password' ? 'text': 'password');
