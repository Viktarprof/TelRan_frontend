// 1) Повторение всех тем!
// 2)С помощью javascript создать простой слайдер(карусель) из изображений.
// Использовать только html,css и javascript (никаких сторонних плагинов).


const jpeg = document.querySelectorAll('.slide');       // массив
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const dots = document.querySelectorAll('.dot')

//========================================
let index = 0;                      // переменная для ориентации где находимся.

//========================================
const activeSlide = i =>{           // функция принимает индекс (i)картинок при переключении
for (pict of jpeg) {                // пробегаюсь циклом по массиву картинок: удаляем и добавляем стиль актив
    pict.classList.remove('active');
}
jpeg[i].classList.add('active');
};

//========================================
const activeDot = i =>{             // функция принимает индекс (i)картинок при переключении
    for (dott of dots) {            // пробегаюсь циклом по массиву картинок: удаляем и добавляем стиль актив
        dott.classList.remove('active');
       
    }
    dots[i].classList.add('active');
    };
//========================================
const twoFunkSlide = () => {
    activeSlide(index);
    activeDot(index)
}

//========================================
const funcNext = () => {            // функции кнопки переключения
   // console.log(index) проверка
if (index == jpeg.length -1){
    index = 0; 
    twoFunkSlide(index);
    } else {
        index++
    twoFunkSlide(index);
    }
};

//========================================
const funcPrev = () => {
   if(index == 0){
    index = jpeg.length-1;
    twoFunkSlide(index);
    } else{
        index--
    twoFunkSlide(index);
   }
};

//========================================
dots.forEach((element, indexDot) => { //элемент и индекс элемента
    element.addEventListener('click',  () =>{
        index = indexDot
        twoFunkSlide(index);
    });
});

//========================================
btnPrev.addEventListener('click', funcPrev); // прослушка с кликом у кнопки и функции кнопок
btnNext.addEventListener('click', funcNext);
// dots.addEventListener('click', funcDot);






