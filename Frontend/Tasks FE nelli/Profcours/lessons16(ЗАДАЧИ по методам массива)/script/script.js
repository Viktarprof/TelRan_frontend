const products = [
  {
    id: 1,
    title: 'Apple',
    price: 500,
    discount: 0.15
  },
  {
    id: 2,
    title: 'Orange',
    price: 400,
    discount: 0.05
  },
  {
    id: 3,
    title: 'Pineapple',
    price: 560,
    discount: 0.25
  },
  {
    id: 4,
    title: 'Kiwi',
    price: 50,
    discount: 0.1
  },
  {
    id: 5,
    title: 'Lime',
    price: 120,
    discount: 0.07
  }
]
const root = document.querySelector('.root');

// 1. Используя массив products, для каждого товара создать карточку (title, price)
// const card = document.createElement('div');
// const p_title = document.createElement('p');
// const p_price = document.createElement('p');
// const {title, price} = products;
// p_title.innerText = `title: ${title}`;
// p_price.innerText = `price: ${price}`;

// card.append(p_title, p_price);
// root.append(card);



// 2. Используя массив products, для каждого товара создать карточку (title, price) - forEach()

// const {title, price} = products;
// products.forEach(({price, title}) =>{
  
//   const card = document.createElement('div');
//   const p_title = document.createElement('p');
//   const p_price = document.createElement('p');

//   p_title.innerText = `title: ${title}`;
//   p_price.innerText = `price: ${price}`;

//   card.append(p_title, p_price);
//   root.append(card);
// })


// 3. Используя массив products, для каждого товара создать карточку (title, price) - map()

// const {title, price} = products;

// const cards = products.map(({price, title}) =>{
//   const card = document.createElement('div');
//   const p_title = document.createElement('p');
//   const p_price = document.createElement('p');

//   p_title.innerText = `title: ${title}`;
//   p_price.innerText = `price: ${price}`;

//   card.append(p_title, p_price);
//   return card
// })
// root.append(...cards)
// console.log(...cards);



// 4. Используя массив products, для каждого товара, цена которого больше или равно 500, создайте карточку товара со следующей информацией - Наименование, старая цена, цена со скидкой. Стилизовать старую цену - сделать ее серого цвета. А новую цену - красного цвета и крупнее шрифт


const discountPrice = products.filter((el) =>  el.price >= 500);

discountPrice.forEach(({title, price, discount}) => {
  const card = document.createElement('div');
  const p_title = document.createElement('p');
  const p_price = document.createElement('p');
  const new_price = document.createElement('p');

  let discount_price = price - price * discount;

  card.classList.add('card');
  p_price.classList.add('p_price');
  new_price.classList.add('new_price');

  p_title.innerText = `Название продукта: ${title}`;
  p_price.innerText = `Старая цена: ${price}`;
  new_price.innerText = `Новая цена: ${discount_price}`;
  new_price.style.color = discount_price > 424 ? 'green' : 'red';
  
  card.append(p_title, p_price, new_price);
  root.append(card);

}) 