//1. Отправить запрос по ссылке https://dummyjson.com/products и вывести полученные данные в консоль

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))

    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(json => console.log(json.products))



// 2. Для каждого элемента массива создать карточку с тремя параграфами: title, description и price. Вывести карточки на экран


// 3. Стилизовать все карточки. Использовать стили: width, border, border-radius, padding
// 4. Сделать из карточек grid - расположить карточки в 4 колонки

// 5. Если цена товара >= 500, то изменить цвет бордера на красный. А если < 500 - изменить на зеленый

// 6. Добавить в карточку товара картинку - первая картинка из массива images. Стилизовать картинку - задать размеры 150х150 px, изобрадение не должно транформироваться



const rootElem = document.querySelector('.root');

const render = products => {
  const products_cards = products.map(({ title, description, price, images }) => {
    const card = document.createElement('div');
    const titleElem = document.createElement('p');
    const descrElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const imgElem = document.createElement('img');

    titleElem.innerText = `Title: ${title}`;
    descrElem.innerText = `Description: ${description}`;
    priceElem.innerText = `Price: ${price}$`;

    imgElem.setAttribute('src', images[0]);
    imgElem.setAttribute('alt', title);

    card.classList.add('product_card');
    imgElem.classList.add('image');

    card.style.border = price >= 500 ? '3px dashed red' : '3px dashed green';

    card.append(imgElem, titleElem, descrElem, priceElem);
    return card
  });

  rootElem.append(...products_cards);
}

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => render(json.products))




