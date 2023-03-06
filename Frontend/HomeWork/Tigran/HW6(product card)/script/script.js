// Задана ссылка на источник: 
// let url = "https://dummyjson.com/products"

// Цель задачи -  реализовать страницу с переключением товаров. К работе выдвинуты следующие требования:

// Структура страницы должна приблизительно соответствовать макету (см ниже). Стилизация элементов может быть произвольной
// Должны быть реализованы следующие функции: fetch, render, rating и события для кнопок. 
// В момент загрузки страницы должен отображаться первый товар (id = 1)
// После наступления события должен формироваться новый запрос, получающий id следующего/предыдущего товара.
// Предусмотрите возможность ограничить переключение на несуществующие товары (id которых меньше 1 или больше 30)

const div_root = document.querySelector('#root');
const btn_left = document.querySelector('.btn_left');
const btn_rigth = document.querySelector('.btn_rigth');
let id_user = 1; // по умолчанию юзер 1

function get_fetch(id){
    let url = `https://dummyjson.com/products/${id}`
    fetch(url)
    .then(res => res.json())
    // .then(json => console.log(json)) // объект
    .then(json => render(json))
}

function render ({images, title, price, rating}) { 
    div_root.innerHTML = '';
    const div_card = document.createElement('div');
    div_card.className = 'div_card'

    const img_elem = document.createElement('img');
    const img_div = document.createElement('div');
    const div_desr = document.createElement('div');
    const title_elem = document.createElement('h4');
    const price_elem = document.createElement('p');
    img_elem.className = 'img_elem'
    div_desr.className = 'div_desr';
   

    img_elem.src = images[0];
    img_elem.alt = title;

    title_elem.innerText = `Title: ${title}`;
    price_elem.innerText = `Price: ${price}`;

    price > 1000 ? price_elem.style.color = 'red' : price_elem.style.color = 'green'; // замена цвета прайса


div_card.addEventListener('mouseover', () => {
    btn_left.style.transform = `translateX(${-35}px)`
    btn_rigth.style.transform = `translateX(${35}px)`

})
div_card.addEventListener('mouseout', () => {
    btn_left.style.transform = `translateX(${2}px)`
    btn_rigth.style.transform = `translateX(${-2}px)`
})

    div_desr.append(title_elem, price_elem)
    div_card.append(img_elem,div_desr, ratings(Math.round(rating)))
    div_root.append(div_card)
};

ratings = (n) => {
    const div_star = document.createElement('div');
    div_star.className = 'div_star';
    div_star.width = 350;

        for (let i = 1; i <= 5; i++) {
            const span_star = document.createElement('span');
            if(i <= n){
                span_star.className = 'fa fa-star active'
                div_star.append(span_star)
            } else {
                span_star.className = 'fa fa-star'
                div_star.append(span_star)
            }
        }
        return div_star
}

const text = document.createElement('p');
btn_left.addEventListener('click', () => {
    if (id_user === 1) {
        btn_left.disabled = true;
        text.innerText = 'Кнопка не активна, листай в другую сторону.'
      
        document.body.prepend(text)
        get_fetch(id_user);
     } else {
        btn_left.disabled = false;
        text.innerHTML = '';
        get_fetch(--id_user);
    }
})

btn_rigth.addEventListener('click', () => {
    if (id_user === 30) {
        btn_rigth.disabled = true;
        text.innerText = 'Кнопка не активна, листай в другую сторону.'
        document.body.append(text)
        get_fetch(id_user);
     } else {
        btn_rigth.disabled = false;
        text.innerHTML = '';
        get_fetch(++id_user);
    }
})

get_fetch(id_user)








