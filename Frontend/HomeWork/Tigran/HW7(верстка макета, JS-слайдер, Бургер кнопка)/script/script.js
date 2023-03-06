//кнопка бургер
const menu = document.querySelector('menu');
const logo_company = document.querySelector('.logo_company')
const btn_burger = document.querySelector('.btn_burger');
const line_span = document.querySelector('.line');

btn_burger.addEventListener('click', () =>{
    line_span.classList.toggle('line_active');
    menu.classList.toggle('navigation_btn_active');
    btn_burger.height=90;
    open_menu()
});

let setModal = false

function open_menu(){
    if (!setModal) {
        let menu_elems = ['ГЛАВНАЯ', 'УСЛУГИ', 'КЕЙСЫ', 'О КОМПАНИИ', 'КОНТАКТЫ']
        let modal_div = document.createElement('div')
        modal_div.className = 'navigation_btn_active'

        for (let elem of menu_elems){
            let p_elem = document.createElement('p')
            p_elem.innerText = elem
            modal_div.append(p_elem)
        }

        logo_company.after(modal_div)
    } else {
        let modal = document.querySelector('.navigation_btn_active') 
        modal.remove()
    }
    setModal = !setModal
}










// первый сладйдер. не могу связать точки  с кнопками
const header = document.querySelector('header');
const pre_hed = document.querySelector('.pre_hed');

// массив картинок
const header_img = [
    '../media/Header_img/header_photo1.png',
    '../media/Header_img/header_photo2.png',
    '../media/Header_img/header_photo3.png',
    '../media/Header_img/header_photo4.png'
]

let count = 0

// цикл по добавлению картинок в background
for (const elem of header_img) {
    const card_hed = document.createElement('div')
    card_hed.className = 'card_hed'
    card_hed.style.backgroundImage = `url(${elem})`
    header.prepend(card_hed)
}

// див для "точек" и кнопок лево/право
const container_dots_btn = document.createElement('div');
container_dots_btn.className = 'container_dots_btn'

// кнопки лево/право
const head_btns = document.createElement('div'); 
const head_btn_left = document.createElement('div');
const p_btn_left = document.createElement('p');
const head_btn_rigth = document.createElement('div');
const p_btn_rigth = document.createElement('p');
p_btn_left.innerText = '<';
p_btn_rigth.innerText = '>';
head_btn_left.classList.add('head_btn_left');
head_btn_rigth.classList.add('head_btn_rigth');
head_btns.className = 'head_btns'


// переключение картинок по клику на кнопки
head_btn_left.addEventListener('click', () =>{
    if (count === 0){
        count = header_img.length
    }
    header.style.backgroundImage = `url(${header_img[--count % header_img.length]})`
})
head_btn_rigth.addEventListener('click', () =>{
    header.style.backgroundImage = `url(${header_img[++count % header_img.length]})`
})


// добавляю кнопки в разметку
head_btn_left.append(p_btn_left);
head_btn_rigth.append(p_btn_rigth);
head_btns.append(head_btn_left, head_btn_rigth);
pre_hed.append(container_dots_btn)


// функция для создания "точек"
create_dots=()=>{
    const div_dots = document.createElement('div');
    div_dots.className = 'div_dots'

    for (let i = 0; i <= header_img.length-1; i++) {
        const dots = document.createElement('button');
        div_dots.append(dots);
        container_dots_btn.append(div_dots);

    // переключение по "точкам"
    click_dots = () =>{
        count = i;
        header.style.backgroundImage = `url(${header_img[count % header_img.length]})`;
        const buttons = dots.parentElement.childNodes;
      
        buttons.forEach(elem => elem.classList.add('active'))
        dots.classList.remove('active')
    }

    dots.addEventListener('click', click_dots)
    }
    // добавляю в html
    container_dots_btn.append(head_btns);
}
create_dots()












const jpeg = document.querySelectorAll('.card_slider');       // массив
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const dots = document.querySelectorAll('.dot')



//1.2========================================
let index = 0;                     

//3========================================
const activeSlide = i =>{           // функция принимает индекс (i)картинок при переключении
for (pict of jpeg) {                
    pict.classList.remove('active_slide');
}
jpeg[i].classList.add('active_slide');
};

//5========================================
const activeDot = i =>{             // функция принимает индекс (i) точек при переключении
    // for(let i = 0; i <= dots.length; i++) {
    for(dott of dots) {            
    dott.classList.remove('dot_active');
       
    }
    dots[i].classList.add('dot_active');
    };
//4========================================
const twoFunkSlide = () => {
    activeSlide(index);
    activeDot(index);
}

//2.1========================================
const func_Next = () => {          
if (index == jpeg.length -1){
    index = 0; 
    twoFunkSlide(index), 1000;
    } else {
        index++
    twoFunkSlide(index);
    }
};

//2.2========================================
const func_Prev = () => {
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

btnPrev.addEventListener('click', func_Prev);
btnNext.addEventListener('click', func_Next);






//========= слайдер отзывы ========================================

const review = document.querySelectorAll('.rev_card');  // массив
const btn_prev_rev = document.querySelector('#btn-prev_rev');
const btn_next_rev = document.querySelector('#btn-next_rev');
const dots_rev = document.querySelectorAll('#reviews .dot')



//1.2========================================
let index_rev = 0;                     

//3========================================
const active_Rev = i =>{           // функция принимает индекс (i)картинок при переключении
for (rev of review) {                
    rev.classList.remove('active_rev');
}
review[i].classList.add('active_rev');
};

//5========================================
const activeDot_rev = i =>{ // функция принимает индекс (i) точек при переключении
 
    for(dott of dots_rev) {            
    dott.classList.remove('dot_rev_active');
       
    }
    dots_rev[i].classList.add('dot_rev_active');
    };
//4========================================
const twoFunkSlide_rev = () => {
    active_Rev(index_rev);
    activeDot_rev(index_rev);
}

//2.1========================================
const func_Next_rev = () => {          
if (index_rev == review.length -1){
    index_rev = 0; 
    twoFunkSlide_rev(index_rev), 1000;
    } else {
        index_rev++
    twoFunkSlide_rev(index_rev);
    }
};

//2.2========================================
const func_Prev_rev = () => {
   if(index_rev == 0){
    index_rev = review.length-1;
    twoFunkSlide_rev(index_rev);
    } else{
        index_rev--
    twoFunkSlide_rev(index_rev);
   }
};

//6========================================
dots_rev.forEach((element, indexDot) => { //элемент и индекс элемента
    element.addEventListener('click',  () =>{
        index_rev = indexDot
        twoFunkSlide_rev(index_rev);
    });
});

btn_prev_rev.addEventListener('click', func_Prev_rev);
btn_next_rev.addEventListener('click', func_Next_rev);
