const add_text_btn = document.querySelector('.btn');
const text_container = document.querySelector('.container');

add_text_btn.addEventListener('click', () => {
  const text = document.createElement('p');
  text.innerText = 'Я добавляюсь при нажатии кнопки!';
  text_container.append(text);
});

// В index.html есть кнопка "изменить цвет" и параграф 'hello!'. При клике на кнопку цвет текста меняется на красный.

const change_color_btn = document.querySelector('.change_text_color');
const hello_text = document.querySelector('.hello_text');


change_color_btn.addEventListener('click', () => {
    hello_text.style.color = 'red';    
})

// ДЗ:
// 1. При клике на кнопку выводится сообщение 'hello' в консоль
// 2. При клике на кнопку меняется цвет заднего фона у параграфа
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый

//===========================
const btnNew = document.createElement('button');
btnNew.innerText = 'Новая кнопка  сообщения Hello и замена цвета фона LI';

// btnNew.addEventListener('click', () => {
//     alert('HELLO oт кнопки')
// })
//===========================


const div = document.createElement('div');
btnNew.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.innerText = 'Я поменял цвет фона LI'
    li.style.background = 'red';
    div.append(li)
})
const body = document.querySelector('body')
body.append(btnNew, div)
//===========================





let btn2 = document.createElement('button');
    btn2.innerText="Замена фона body";
// for (const elem of btn2) {
  
// }
btn2.onclick =() => {
 body.classList.add('active');
btn2.addEventListener('click', () => {
  body.classList.remove('active');
  });
}
  body.append(btn2)


