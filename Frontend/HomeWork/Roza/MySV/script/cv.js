
//  кнопка показать и скрыть
const responsibilities = document.querySelector('.responsibilities');
const responsibilities1 = document.querySelector('.responsibilities1');
const responsibilities2 = document.querySelector('.responsibilities2');

const active = document.querySelector('.active');
const active1 = document.querySelector('.active1');
const active2 = document.querySelector('.active2');

const btnShow = document.querySelector('.btnShow');
const btnclose = document.querySelector('.btnclose');
const slider = document.querySelector('.slider')

function showCard(){
    responsibilities.classList.remove('active');
    responsibilities1.classList.remove('active1');
    responsibilities2.classList.remove('active2');
    btnShow.classList.add('active');
    btnclose.classList.remove('active');
    slider.classList.add('active');
}

function closeCard(){
    responsibilities.classList.add('active');
    responsibilities1.classList.add('active1');
    responsibilities2.classList.add('active2');
    btnShow.classList.remove('active');
    btnclose.classList.add('active');
    slider.classList.remove('active');
}

btnShow.addEventListener('click',showCard);
btnclose.addEventListener('click',closeCard);



// слайдер
const images = [
    './media/clider/1.png',
    './media/clider/2.png',
    './media/clider/3.jpeg',
    './media/clider/4.jpeg'
];
let imgIndex1 = 0;
 const imgSlider = document.querySelector('.img_slider');
 imgSlider.addEventListener('click', (event) =>{
   event.target.src = images[imgIndex1++ % images.length];
 })



// рамдомная смена цвета кнопки
const getColorNum = () => Math.round(Math.random() * 255);
btnShow.addEventListener('click',(event)=>{
   event.target.style.backgroundColor = `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()})`;
}); 
btnclose.addEventListener('click',(event)=>{
    event.target.style.backgroundColor = `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()})`;
 }); 




