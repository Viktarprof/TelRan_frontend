// 1. Написать функцию, которая принимает айди в качества аргумента и при вызове которой отправляется fetch-запрос по ссылке https://dummyjson.com/users/id
// 2. Выести ответ по запросу в консоль


// 3. Из полученных данных сформировать карточку юзера: фото, имя, фамилия, возраст, почта
// 4. Стилизовать карточку
// 5. Добавить две кнопки < > в html-документ
// 6. При перезагрузке странице прогружается первый юзер
// 7. При клике на правую кнопку айдишник увеличивается на 1 и отправлется новый запрос с измененным значением айди. При клике на левую - уменьшается на 1 и отправляется новый запрос

const get_users = (id) =>{
  fetch(`https://dummyjson.com/users/${id}`)
  .then(res => res.json())
  // .then(json => console.log(json))
  .then(json => render(json))
}
let user_id = 1;
const div_root = document.querySelector('.user_container');


const render = ({image, firstName, lastName, age, email}) =>{
  div_root.innerHTML = '';

const user_card = document.createElement('div');
const image_elem = document.createElement('img');
const firstName_elem = document.createElement('p');
const age_elem = document.createElement('p');
const email_elem = document.createElement('a');

image_elem.setAttribute('src', image);
image_elem.setAttribute('alt', `${firstName},${lastName}`);
email_elem.setAttribute('href', `mailto:${email}`);;

firstName_elem.innerText = `Имя: ${firstName}, Фамилия: ${lastName}`;
age_elem.innerText = `Возраст: ${age}`;
email_elem.innerText = `Почта: ${email}`;


user_card.style.backgroundColor = age >= 30 ? 'lightgreen' : 'lightgray';


user_card.classList.add('user_card');


user_card.append(image_elem, firstName_elem, age_elem, email_elem);
div_root.append(user_card)

}
get_users(user_id)






const [left_btn, rigth_btn] = document.querySelectorAll('button');
left_btn.addEventListener('click', () => {
  if (user_id === 1){
    user_id = 31;
  }
  get_users(--user_id)
})

rigth_btn.addEventListener('click', () => {
  if (user_id === 30){
    user_id = 0;
  }
    get_users(++user_id)
})

