
// let url1 = "https://reqres.in/api/users?page=1"
// let url2 = "https://reqres.in/api/users?page=2"




// 1. Написать fetch-запрос по ссылке https://reqres.in/api/users?page=1 и выводить на страницу карточку с пользователем (картинка + имя)


const users_container = document.querySelector('.users_container');
let triggers = document.querySelector(".triggers");
let btn = document.querySelectorAll('button');


const render = products => {
  users_container.innerHTML = '';
  const users_cards = products.map(({first_name, avatar}) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const imgElem = document.createElement('img');
   
    
    nameElem.innerText = first_name;
  
    imgElem.setAttribute('src', avatar);
    imgElem.setAttribute('alt', nameElem);

    card.append(imgElem, nameElem);
  
    card.classList.add('div_container')

    return card

    });
    users_container.append(...users_cards);   
}


const get_users = (num) => {
  fetch(`https://reqres.in/api/users?page=${num}`)
    .then(res => res.json())
    .then(json => render(json.data))
  }
  // get_users(1)

//// ==== переключение кнопок ==== делал сам
const show_user=()=>{
  btn.forEach(elem => elem.onclick=()=>{
    users_container.innerHTML = '';
    get_users(elem.innerHTML); 
    })
};
  btn.addeventlistener('click', show_user());


//// ==== переключение кнопок ==== сделали в классе
// const [ first_btn, second_btn ] = document.querySelectorAll('.triggers button');

// first_btn.addEventListener('click', () => getUsers(1));
// second_btn.addEventListener('click', () => getUsers(2));
     

  

  