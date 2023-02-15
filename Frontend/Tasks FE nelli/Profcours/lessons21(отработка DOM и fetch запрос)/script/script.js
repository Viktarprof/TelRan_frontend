// 1. Написать функцию, которая принимает id и при вызове которой отправляется fetch-запрос по адресу https://jsonplaceholder.typicode.com/users/id
// 2. Вывести в консоль то, что придет по запросу

const users_container = document.querySelector('.users_container')

const getUser = id => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res => res.json())
  // .then(json => console.log(json))
  .then(json => render(json)) // вернется объект
}

// 3. Через дом наполнить users_container данными, полученными из ответа на запрос - отобразить в браузере имя и телефон пользователя
let user_id = 1; 

const render = ({name, phone}) => {
  users_container.innerHTML = '';

    const user_card = document.createElement('div');
    const user_name = document.createElement('p');
    const user_phone = document.createElement('p');

    user_name.innerText = `NAME user : ${name}`;
    user_phone.innerText = `PHONE user: ${phone}`;
    user_card.append(user_name,user_phone);

    users_container.append(user_card);

  };
getUser(user_id);



// 4. На кпоки повесить слушатели событий. при клике на левую мы отправляем запрос на id текущего юзера - 1, при клике на праву - на id текущего юзера + 1
const count_id = document.querySelector('.count_id');
count_id.innerHTML = 1;
const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => {
  if(user_id === 1) {
    user_id = 10
  }
  count_id.innerHTML = user_id

  getUser(--user_id)
});

right_btn.addEventListener('click', () => {
  if(user_id === 10) {
    user_id = 1
  }
  count_id.innerHTML = user_id
  getUser(++user_id)
});


