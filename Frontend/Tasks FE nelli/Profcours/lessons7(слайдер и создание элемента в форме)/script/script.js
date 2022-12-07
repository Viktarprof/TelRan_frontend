// Создать описанный в форме элемнт.
const addForm = document.querySelector('.add_form');
const add_form_result= document.querySelector('.add_form_result');

addForm.addEventListener('submit', (event) =>{
   event.preventDefault();
   const {type, content, color} = event.target;
   //event.target = ссылка на элемент в котором происходит событие

   // console.log(type.value);
   // console.log(content.value);
   // console.log(color.value);
   const elem = document.createElement(type.value);
   elem.innerText = content.value;
   elem.style.color = color.value;
   add_form_result.append(elem);

   type.value = '';
   content.value = '';
   color.value = '';

})
//==================================================
// создать сладер при клике на картинку меняется на след-ю в массиве

const images = [
   'https://cdnn21.img.ria.ru/images/155666/00/1556660022_36:0:2767:2048_1920x0_80_0_0_0f95880a02fc9e226884ce632677e009.jpg',
   'https://n1s1.hsmedia.ru/bc/a3/fe/bca3fe6f32ac44ec9af8520490d26be2/1920x1152_0xac120003_15211652711625304484.jpg',
   'https://bigenc.ru/media/2016/10/27/1235177203/11340.jpg',
   'https://vot-enot.com/wp-content/uploads/2021/11/94895c23dcc1cf7.jpg'
 ];
let imgIndex1 = 0;

 const imgSlider = document.querySelector('.img_slider');
 imgSlider.addEventListener('click', (event) =>{
   event.target.src = images[imgIndex1++ % images.length];
 })

//==================================================
const images2 = [
   'https://cdnn21.img.ria.ru/images/155666/00/1556660022_36:0:2767:2048_1920x0_80_0_0_0f95880a02fc9e226884ce632677e009.jpg',
   'https://n1s1.hsmedia.ru/bc/a3/fe/bca3fe6f32ac44ec9af8520490d26be2/1920x1152_0xac120003_15211652711625304484.jpg',
   'https://bigenc.ru/media/2016/10/27/1235177203/11340.jpg',
   'https://vot-enot.com/wp-content/uploads/2021/11/94895c23dcc1cf7.jpg'
 ];
let imgIndex2 = 0;

const imgSlider2 = document.querySelector('.img_slider_2');
const left_btn = document.querySelector('.left_btn');
const right_btn = document.querySelector('.right_btn');

left_btn.addEventListener('click', () => {
 if(imgIndex2 === 0){
  imgIndex2 = images.length;
 } 
  imgSlider2.src = images2[--imgIndex2 % images2.length]
console.log(imgIndex2)
});

right_btn.addEventListener('click', () => imgSlider2.src = images2[++imgIndex2 % images2.length]);



//  imgIndex++ % images.length
// 0 % 4 = 0 .      4 - 0 = 4
// 1 % 4 = 1        3 - 0 = 3
// 2 % 4 = 2        2 - 0 = 2
// 3 % 4 = 3        1 - 0 = 1
// 4 % 4 = 0        
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0


// -1 - 4 = -3
// -2 - 4 = -2
// -3 - 4 = -1
// -4 - 4 = -0
// -5 - 4 = -1
// -6 - 4 = -2
// -7 - 4 = -3
// -8 - 4 = -4
// -9 - 4 = -5

// 4 + -4 = 0
// 4 + -3 = 1
// 4 + -2 =2
// 4 + -2 =3
// 4 + -0 =4
// 4 



