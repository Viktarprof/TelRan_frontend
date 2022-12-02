//==============================================
// дотягиваемся до узлов
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const container = document.querySelector('#container');
const btnSum = document.querySelector('.btnSum');
const paswBtn = document.querySelector('.paswBtn');
const paswInp = document.querySelector('#paswInp')

const products = [];


//==============================================
form.onsubmit = (elem) => {
    elem.preventDefault(); // заглушка отправки данных

products.push({
    title: title.value,
    price: price.value,
    });

//// вызов функций после push
// cards(title.value, price.value); // вызов второй функции
containerCard () // вызов первой функции

    title.value = '';
    price.value = '';// ставить после push
}

//==============================================
function cards (title, price){
    const div = document.createElement('div');
    div.classList.add('cardDiv');
    const pTitle = document.createElement('p');
    const pPrice = document.createElement('p');
    pTitle.innerText = 'Название товара : ' + title;
    pPrice.innerText = 'Цена товара : ' + price;
    div.append(pTitle, pPrice);
    container.append(div);
    div.addEventListener('dblclick', () =>{
        alert(title);
    });
}

//==============================================
function containerCard (){ //внутри второй функции вызываем вторую
    container.innerHTML = ('');
for (const iterator of products) {
    cards(iterator.title, iterator.price);
    }
}

//==============================================
// вывод общей суммы
btnSum.onclick = () => {
let sum = 0;
    for(let i = 0; i < products.length; i++){
        sum += +products[i].price;
    }
    alert(sum);
}

//==============================================
//  скрыть / показать пароль
paswBtn.onclick=()=>{
    paswInp.type = paswInp.type === 'text' ? 'password' : 'text';
}