
// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.
// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.
// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.
// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).
// 5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.

// открывать очередно
//Можно ли кто-то сделать код короче во всех заданиях?


//1
const p = document.createElement('p');
p.innerText = 'В бесконечность и далее...';
const btn = document.createElement('button');
btn.innerText = 'Что сказал Баз Лейтер?';
 btn.append(p);

btn.onclick = () => {
    // if(p.classList[0] === 'active'){
    //     p.classList.remove('active') // почему сначала remove а потом add????
    // }else{
    //     p.classList.add('active')
    // }
//__________   
    // if( p.classList.contains('active')){ //contains(
    //     p.classList.remove('active')
    // } else {
    //     p.classList.add('active')
    // }
//__________   

// p.classList.toggle('active')// toggle
//__________
}
document.body.append(btn, p);




////2
// const arr = ['red', 'black', 'yellow', 'blue', 'pink','violet'];
// for (let i = 0; i < arr.length; i++) {
//  const div = document.createElement('div');
//  div.style.width = '200px'
//  const p = document.createElement('p');
//  p.innerText = arr[i];
//  div.append(p)
//  document.body.append(div);  
//  p.onmouseover = function (){
//     div.style.background = arr[i];
//     div.style.color= 'white';
//  }
//  p.onmouseout = () => {
// div.style.background = 'white';
// div.style.color= 'black';
//  }
//  }
 



//// 3
// const films = [
//     {
//      title: 'Зеленая миля',
//      about: '1 Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
//     }, 
//     {
//      title:'Список Шиндлера',
//      about:'2 Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
//     },
//     { 
//      title:'Назад в будущее',
//      about:'3 Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.',
//     },
// ];
// const div = document.createElement('div');
// const div1 = document.createElement('div');
// for (let i = 0; i < films.length; i++){
//     const h2 = document.createElement('h2');
//     h2.innerText = films[i].title;
//     div.append(h2);
    
// h2.onclick = () => {
//     const p = document.createElement('p');
//     p.innerText = films[i].about;
//     div1.append(p);
//         p.onmouseover = function (){
//         p.style.display= 'none';
//     }
// }
   
// }document.body.append(div,div1);  




//// 4,5

// const arr = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z', 'X', 'C', 'V', 'B', 'N', 'M'];

// const div = document.querySelector('.container');
// const writeText = document.createElement('p');
// writeText.setAttribute('class','words')

// const div1 = document.createElement('div');
// for (let i = 0; i < 9; i++){
//     const btn = document.createElement('button');
//     btn.setAttribute('class', 'variant2');
//     btn.innerText = arr[i];
//     div1.append(btn);
//     btn.onclick= ()=>{
//         writeText.innerText = arr[i]
//     }
// }

// const div2 = document.createElement('div');
// for (let j = 10; j < 18; j++){
//     const btn = document.createElement('button');
//     btn.setAttribute('class', 'variant2');
//     btn.innerText = arr[j];
//     div2.append(btn);
//     btn.onclick= ()=>{
//         writeText.innerText = arr[j]
//     }
// }
// const div3 = document.createElement('div');
// for (let q = 19; q < 25; q++){
//     const btn = document.createElement('button');
//     btn.setAttribute('class', 'variant2');
//     btn.innerText = arr[q];
//     div3.append(btn);
//     btn.onclick= ()=>{
//         writeText.innerText = arr[q]
//     }
// }
// div.append(div1,div2,div3,)

// document.body.append(writeText,div)

// считаю что все стили должны быть в стилях. Сначала я прописал все стили в JS и код превратился в полотно.


