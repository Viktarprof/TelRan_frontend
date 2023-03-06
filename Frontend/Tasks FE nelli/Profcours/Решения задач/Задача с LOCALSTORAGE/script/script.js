// Дан массив с пользователями.
// Сформировать карточки пользователей и отобразить их в браузере. Если пользователь online, прописать в карточке 'Status: online', если нет - 'Status: offline'
// Стилизовать карточки. Если пользователь в сети, у его карточки должен быть светло-голубой цвет заднего фона. Если не online - цвета нет.
// Добавить форму с тремя инпутами для сбора данных об имени, фамилии и возрасте пользователя. По умолчанию все добавляемые пользователи должны иметь свойство online со значением true
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают
// При клике на карточку менять статус (online) пользователя на противоположный
const users = [
  {
    id: 1,
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 17,
    online: true
  },
  {
    id: 1,
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 17,
    online: true
  },
  {
    id: 2,
    firstname: 'Irina',
    lastname: 'Ivanova',
    age: 37,
    online: false
  },
  {
    id: 3,
    firstname: 'Olga',
    lastname: 'Sokolova',
    age: 29,
    online: false
  },
  {
    id: 4,
    firstname: 'Boris',
    lastname: 'Ushanov',
    age: 43,
    online: true
  }
]


const div_root = document.querySelector('.root');
const form = document.querySelector('form');

// вызываю локал
const storage_form = JSON.parse(localStorage.getItem('newUsers')) ?? users;


// добавление новых карточек
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const {name_user, second_name_user, age_user} = e.target;

  storage_form.push({
    id: Date.now(),
    name: name_user.value,
    second_name: second_name_user.value,
    age: age_user.value,
    online: true
  });
 
  render(storage_form);
    // очитска формы
    name_user.value = '';
    second_name_user.value = '';
    age_user.value = '';

    // сохраяю все карточки при добавлении новых
    localStorage.setItem('newUsers', JSON.stringify(storage_form))  
})



render = (array) => {
  
  div_root.innerHTML = '';
  
  const new_users = array.map(({firstname, lastname, age, online})=> {
  
  const div_cards = document.createElement('div');
  div_cards.classList = 'div_cards'
  
  const fullname_elem = document.createElement('p');
  const age_elem = document.createElement('p');
  const online_elem = document.createElement('p');

  div_cards.append(fullname_elem, age_elem, online_elem);

  fullname_elem.innerText = `Имя и фамилия: ${firstname} ${lastname}`;
  age_elem.innerText = `Возраст: ${age}`;
  online_elem.innerText = `Статус: ${online == true ? 'online'  : 'offline'}`;
  online == true ? div_cards.style.backgroundColor = '#26de81' : div_cards.style.backgroundColor = '#ff7675'

// меняем значение карточек и цвет в обе стороны
  div_cards.addEventListener('click', () => {
    if (online === false) {
      online_elem.innerText = "Статус: offline";
      div_cards.style.backgroundColor = '#ff7675';
        online === true ? online = false :  online = true
    } else {
      online_elem.innerText = "Статус: online";
      div_cards.style.backgroundColor = '#26de81';
        online === false ? online = true :  online = false
    }
})
  return div_cards;
  
});
  div_root.append(...new_users);
}

render(storage_form)