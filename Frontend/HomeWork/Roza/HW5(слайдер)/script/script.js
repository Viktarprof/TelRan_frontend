// 1) Повторение всех тем!
// 2)С помощью javascript создать простой слайдер(карусель) из изображений.
// Использовать только html,css и javascript (никаких сторонних плагинов).


const jpeg = document.querySelectorAll('.slide');       // массив
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const dots = document.querySelectorAll('.dot')



//1.2========================================
let index = 0;                      // переменная для ориентации где находимся.

//3========================================
const activeSlide = i =>{           // функция принимает индекс (i)картинок при переключении
for (pict of jpeg) {                // пробегаюсь циклом по массиву картинок: удаляем и добавляем стиль актив
    pict.classList.remove('active');
}
jpeg[i].classList.add('active');
};

//5========================================
const activeDot = i =>{             // функция принимает индекс (i) точек при переключении
    for (dott of dots) {            // пробегаюсь циклом по массиву картинок: удаляем и добавляем стиль актив
        dott.classList.remove('active');
       
    }
    dots[i].classList.add('active');
    };
//4========================================
const twoFunkSlide = () => {
    activeSlide(index);
    activeDot(index);
}

//2.1========================================
const funcNext = () => {            // функции кнопки переключения
if (index == jpeg.length -1){
    index = 0; 
    twoFunkSlide(index), 1000;
    } else {
        index++
    twoFunkSlide(index);
    }
};

//2.2========================================
const funcPrev = () => {
   if(index == 0){
    index = jpeg.length-1;
    twoFunkSlide(index);
    } else{
        index--
    twoFunkSlide(index);
   }
};

//6========================================
dots.forEach((element, indexDot) => { //элемент и индекс элемента
    element.addEventListener('click',  () =>{
        index = indexDot
        twoFunkSlide(index);
    });
});

//1.1========================================
btnPrev.addEventListener('click', funcPrev); // прослушка с кликом у кнопки и функции кнопок
btnNext.addEventListener('click', funcNext);









//====================== второй вариант ===============================

const root_elem = document.querySelector('#root');

let id_num = 1; //при первоначальной загрузке загружается продукт 1

//описываем работу функции render
let render = (json) => {

//очищаю страницу иначе данные будут все время добавляться
    root_elem.innerText = '';

//создаю элементы страницы
    const card = document.createElement('div');
    const avatarElem = document.createElement('img');
    const titleElem = document.createElement('p');
    titleElem.innerText = `${json.title}`;//берет json из стр.6
    avatarElem.setAttribute('src', json.image);
    avatarElem.setAttribute('alt', 'photo of product');

//добавляю класс ‘card’ для стилизации
    card.classList.add('card')

//элементы складываю в ‘card’ и root_elem
    card.append(avatarElem, titleElem);
    root_elem.append(card);
}

//создаем функцию с запросом для загрузки данных из интернета
let request = (id) => {
    fetch(`https://fakestoreapi.com/products/ ${id}`)
    .then(resp => resp.json())
    .then(json => render(json)) //если передаем в качестве аргумента json то в описании функции тоже должен быть указан аргумент json
}

//запускаем функцию для первоначальной загрузки страницы
request(id_num);

//создаем переменные кнопок и достаем из HTML соответствующие им кнопки
const [left_button, rigth_button] = document.querySelectorAll('.triggers button');
left_button.addEventListener('click', () => {
    request(--id_num)

});
rigth_button.addEventListener('click', () => {
    request(++id_num)
  
});


