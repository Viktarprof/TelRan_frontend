// 1. Отправить get-запрос на https://fakestoreapi.com/products и вывести в консоль полученный ответ (в формате JSON)
// 2. В html-документе создать контейнер для карточек товаров
// 3. В js-файле для каждого товара отрисовать карточку (image, title, price), добавить все карточки в контейнер
// 4. Стилизовать карточки
// 5. Создать форму, которая собирает данные о товаре (title, price, image). При отправке формы выводить в консоль собранные данные в формате объекта
// 6. Стилизовать форму

const products_container = document.querySelector('.products_container');
const add_product_form = document.querySelector('.add_product_form');

add_product_form.addEventListener('submit', event => {
  event.preventDefault();
  const { title, price } = event.target;
  const productItem = {
    title: title.value,
    price: +price.value // щапишет как число
  }
  add_product(productItem);
  title.value = '';
  price.value = '';
});

const cards_render = json => {
  const products_cards = json.map(({ images, title, price }) => {
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;

    imgElem.src = images[0];
    imgElem.alt = title;

    cardElem.classList.add('product_card');

    cardElem.append(imgElem, titleElem, priceElem);
    return cardElem
  });
  products_container.append(...products_cards);
}


fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => cards_render(json.products))


const add_product = (obj_from_form) => {
  fetch('https://dummyjson.com/products/add',{
            method:"POST",
            body: JSON.stringify(obj_from_form),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res=>res.json())
        .then(json=>console.log(json))
}

// GET - получает данные
// POST - добавляет данные
// PUT - изменяет данные
// DELETE - удаляет данные
  