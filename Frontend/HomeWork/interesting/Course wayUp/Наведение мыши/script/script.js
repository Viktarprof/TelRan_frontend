// DOM (document   )
// <!-- номер 1 -->
const html = document.getElementById('html');
const css = document.getElementById('css');
const js1 = document.getElementById('js');

const p = document.querySelector('.paragraf');

const divs =document.querySelectorAll('div');


console.log(html);
console.log(css);
console.log(js1);
console.log(p);
console.log(divs);





//   замена текста 
//__________________________________
const js = document.getElementById('js');
// console.log(js.innerHTML);
js.innerHTML = 'Pyton';






//_________________________________________
//const div = document.getElementById('div');

//console.log(div.className);

//div.className = 'div-green';

// div.classList.add('div-green'); // добавили класс

 //div.classList.remove('div-red'); // удалили класс ред


// div.classList.toggle('div-green'); //  добавили класс класс ред





//___________   <!-- номер 2 -->________________________________

//const div = document.getElementById('div');
//заставялем скрываться и появляться текст от кнопки
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () =>{
//     div.classList.toggle('hide')
  
// })


//___________   <!-- номер 3 -->________________________________
// меняю стили
// const div = document.getElementById('div');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () =>{
// div.style.fontSize = '50px';
// div.style.color = 'orange';
// })


//___________   <!-- номер 4 -->________________________________

//  const btn = document.getElementById('btn');

// const showMessange1 = () =>{
//     alert('Ты нажал на кнопку1');
// }
// const showMessange2 = () =>{
//     alert('Ты нажал на кнопку2');
// }


// btn.addEventListener('click', () => {
//     showMessange1();
//     showMessange2();

// }) 


//___________   <!-- номер 5 -->________________________________
//наведение мыши
const div = document.querySelector('div');


// const showMessange = () =>{
//     alert('ты навел мышь);
// }
// div.addEventListener('mouseover', showMessange);
div.addEventListener('mouseout', () => {
    alert('Ты убрал мышь');
});
