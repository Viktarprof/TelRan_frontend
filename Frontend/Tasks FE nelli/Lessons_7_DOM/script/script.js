// 1. Из каждого объекта сформировать карточку с параграфами title и price
// 2. Добавить карточки в div с классом container

// const goods = [
//     {
//       id: 1,
//       title: 'Bike',
//       price: 500
//     },
//     {
//       id: 2,
//       title: 'Skate',
//       price: 700
//     },
//     {
//       id: 3,
//       title: 'Skies',
//       price: 450
//     },
//     {
//       id: 4,
//       title: 'Ball',
//       price: 100
//     },
//     {
//       id: 5,
//       title: 'Sport clothes',
//       price: 560
//     }
//   ]

//   const cards_container = document.querySelector('.container');
//   goods.forEach(element => {
//     const cardElem = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');
//      //titleElem.append('title');
//      //priceElem.append('price');
//     cardElem.append(titleElem, priceElem);
//     cards_container.append(cardElem);
//   })






//______________________________________________________
// добавили значения из title и price + сами title price: 
// const goods = [
//     {
//       id: 1,
//       title: 'Bike',
//       price: 500
//     },
//     {
//       id: 2,
//       title: 'Skate',
//       price: 700
//     },
//     {
//       id: 3,
//       title: 'Skies',
//       price: 450
//     },
//     {
//       id: 4,
//       title: 'Ball',
//       price: 100
//     },
//     {
//       id: 5,
//       title: 'Sport clothes',
//       price: 560
//     }
//   ]

//   const cards_container = document.querySelector('.container');
//   goods.forEach(element => {
//     const cardElem = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');
   
//     titleElem.innerText = `Title: ${element.title}`;
//     priceElem.innerText = `Price: ${element.price}`;

//     cardElem.append(titleElem, priceElem);
//     cards_container.append(cardElem);
//   }) 









// const goods = [
//     {
//       id: 1,
//       title: 'Bike',
//       price: 500,
//       country: 'Germany'
//     },
//     {
//       id: 2,
//       title: 'Skate',
//       price: 700,
//       country: 'France'
//     },
//     {
//       id: 3,
//       title: 'Skies',
//       price: 450,
//       country: 'Spain'
//     },
//     {
//       id: 4,
//       title: 'Ball',
//       price: 100,
//       country: 'Poland'
//     },
//     {
//       id: 5,
//       title: 'Sport clothes',
//       price: 560,
//       country: 'USA'
//     }
//   ]

//   const cards_container = document.querySelector('.container');
//   goods.forEach(element => {
//             // создаем див и параграф
//     const cardElem = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');
//     const countryElem = document.createElement('p');
   
//             // считываем информацию из массива
//     titleElem.innerText = `Title: ${element.title}`;
//     priceElem.innerText = `Price: ${element.price}$`;
//     countryElem.innerText = `Country: ${element.country}`;

//             // задали скласс нашим дивам и параграфам
//     cardElem.classList.add('card_elem');
//     priceElem.classList.add('price');

//             // ЗАДАЕМ СТИЛИ
//     priceElem.style.color = 'red';
//     priceElem.style.border = '1px solid black'; 
//     priceElem.style.backgroundColor = 'white';

//             // выводим информацию которую запрашивали выше
//     cardElem.append(titleElem, priceElem, countryElem);
//     cards_container.append(cardElem);
  
//   }) 