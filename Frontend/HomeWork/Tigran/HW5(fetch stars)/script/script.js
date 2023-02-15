// Задана ссылка на api:
// let url = "https://dummyjson.com/products"
// Напишите fetch-запрос, который получит данные от сервера в виде массива и для каждого полученного элемента формирует div элемент с описанием товара.

// В div необходимо указать следующую информацию: 
// Изображение товара
// Имя продукта
// Стоимость продукта
// Рейтинг продукта (*)

// Приблизительный макет элемента одного продукта: 

// Требования к работе: 
// В работе должна присутствовать небольшая стилизация (grid/flex сетка). Все элементы можно расположить по правилам grid сетки (по 3 элемента)
// Скрипт должен быть разделен на назначенные функции (fetch, render, rating (*) )
// (*) У каждого товара назначен рейтинг (дробное число). Необходимо написать функцию rating(n), которая получает рейтинг и выводит в разметке 5 иконок звезды. В зависимости от n аргумента на разметке должно появиться n активных звезд из 5.
// Внутри функции аргумент необходимо округлить до целого числа по правилам математики


// Иконку можно импортировать сразу на разметку:
 
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

// Элемент неактивной звезды:
// <span class="fa fa-star"></span> 

// Активная звезда: 
// <span class="fa fa-star active"></span> 

// (css)
// .active {
// 	color: orange
// }


let url = "https://dummyjson.com/products"
fetch(url)
.then(res => res.json())
// .then(json => console.log(json)) // получил объект => массив
.then(json => render(json.products));

const root_container = document.querySelector('#root'); // обратился к созданному узлу

const render = products =>{  // запускаю функцию по созданию карточек

const product_cards = products.map(({title, price, images, rating}) =>{  // через метод обрабатываю старый массив и получаю нужны мне массив

    // создаю узлы новых карточек
    const one_card = document.createElement('div');
    const product_title = document.createElement('h3');
    const product_price = document.createElement('p');
    const order_prod = document.createElement('p');
    const product_img = document.createElement('img');
    
    // наполняю информацией
    product_title.innerText = `Title: ${title}`;
    product_price.innerText = `Price: ${price} $`;
    order_prod.innerText = 'Оформить';
   
    product_img.setAttribute('src', images[2]);
    product_img.setAttribute('alt', title);

    // создаю классы для стилей
    one_card.classList.add('one_card');
    product_title.classList.add('product_title');
    product_price.classList.add('product_price');
    order_prod.classList.add('order_prod');
    product_img.classList.add('product_img');

    // добавляю 
    one_card.prepend(product_img, product_title, product_price, ratings(Math.round(rating)), order_prod);

    // получаю число для функции raitings
    //    ratings(Math.round(`${rating}`));

    // венрул новый массив
    return one_card
});

// добавляю и расспаковываю новый массив
root_container.append(...product_cards);
}


function ratings(n){
    const div_star = document.createElement('div');
        for (let i = 1; i <= 5; i++){
            const p_stars = document.createElement('span');

            if(i <=`${n}`){
                p_stars.classList.add('active')
                div_star.append(p_stars)
            }
            p_stars.classList.add('fa');
            p_stars.classList.add('fa-star');
    
            div_star.append(p_stars)    
        }
        return div_star
}




/* scc. 140 строка. заставил вращаться картинки вокруг своей оси */