// 1. Написать функцию, которая принимает айди в качества аргумента и при вызове которой отправляется fetch-запрос по ссылке https://dummyjson.com/users/id
// 2. Выести ответ по запросу в консоль


// 3. Из полученных данных сформировать карточку юзера: фото, имя, фамилия, возраст, почта
// 4. Стилизовать карточку
// 5. В html-документ добавить форму с 1 числовым инпутом и кнопкой
// 6. При отправке формы выводить в консоль введенное в инпут значение


const get_users = (id) =>{
  fetch(`https://dummyjson.com/users/${id}`)
  .then(res => res.json())
  // .then(json => console.log(json))
  .then(json => render(json))
}

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



const form = document.querySelector('form');
form.addEventListener('submit', (event) => { // submit это событие только для формы
  event.preventDefault(); // запретил форме отправлять и обновлять страницу
  console.log(event.target.id.value);
  // event.target.id.value = ''; // очистили форму
  get_users(event.target.id.value)
})


