
// let url1 = "https://reqres.in/api/users?page=1"
// let url2 = "https://reqres.in/api/users?page=2"




// 1. Написать fetch-запрос по ссылке https://reqres.in/api/users?page=1 и выводить на страницу карточку с пользователем (картинка + имя)


const users_container = document.querySelector('.users_container');
let triggers = document.querySelector(".triggers");
let btn = document.querySelectorAll('button');


const render = products => {
  products.innerHTML = '';
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



const show_user=()=>{
  btn.forEach(elem => elem.onclick=()=>{
    users_container.innerHTML = '';
    get_users(elem.innerHTML); 
    })
};
  btn.addeventlistener('click', show_user());
   
     

  

  