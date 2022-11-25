
// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.
// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.
// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.
// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).
// 5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.

// открывать очередно
//Можно ли кто-то сделать код короче во всех заданиях?

const test = document.querySelector('.test');
// //1
const p = document.createElement('p');
p.innerText = 'В бесконечность и далее...';
const btnShowe = document.createElement('button');
btnShowe.innerText = 'Что сказал Баз Лейтер?';
btnShowe.append(p);

btnShowe.onclick = () => {
    if(p.classList[0] === 'active'){
        p.classList.remove('active') 
    }else{
        p.classList.add('active')
    }
//__________   
    // if( p.classList.contains('active')){ //contains(
    //     p.classList.remove('active')
    // } else {
    //     p.classList.add('active')
    // }
//__________   

    //p.classList.toggle('active')// toggle
//__________
}
document.body.append(test,btnShowe, p);




// ////2
const box_colors = document.createElement('div');
    box_colors.style.width = '300px'
    box_colors.style.height = '30px'

const arrColors = ['red','yellow','blue','pink','violet'];
for (let i = 0; i < arrColors.length; i++) {
    const color_btn = document.createElement('button');
    color_btn.innerText = arrColors[i];
    color_btn.style.width='50px';
    color_btn.style.height='50px';
    color_btn.style.margin='5px';
    color_btn.style.border='1px solid black';
    color_btn.style.background = arrColors[i] ;
    box_colors.append(color_btn);
    document.body.append(test, box_colors); 
// первый вариант
    color_btn.onclick = () =>{
        document.body.style.background = document.body.style.background === arrColors[i] ? 'white' : arrColors[i];
        }
    // второй вариант
    // color_btn.onmouseover = function (){
    // document.body.style.background = arr[i];
    // } 
    // color_btn.onmouseout = function (){
    //     document.body.style.background = 'white';
    //     } 
 }
 



// //// 3
const films = [
    {
     title: 'Зеленая миля',
     about: '1 Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
    }, 
    {
     title:'Список Шиндлера',
     about:'2 Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
    },
    { 
     title:'Назад в будущее',
     about:'3 Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.',
    },
];
const divTitle = document.createElement('div');
const divAbout = document.createElement('div');
for (let i = 0; i < films.length; i++){
    const h2 = document.createElement('h2');
    h2.innerText = films[i].title;
    divTitle.append(h2);
    
h2.onclick = () => {
    const p = document.createElement('p');
    p.innerText = films[i].about;
    divAbout.append(p);
        p.onmouseover = function (){
        p.style.display= 'none';
    }
}
}document.body.append(test, divTitle,divAbout);  




//// 4,5

const arr = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const div = document.querySelector('.container');
const writeText = document.createElement('p');
writeText.setAttribute('class','words')

const div1 = document.createElement('div');
for (let i = 0; i < 9; i++){
    const btn = document.createElement('button');
    btn.setAttribute('class', 'variant2');
    btn.innerText = arr[i];
    div1.append(btn);
    btn.onclick = ()=>{
        writeText.innerText += arr[i]
    }
}
const div2 = document.createElement('div');
for (let j = 10; j < 18; j++){
    const btn = document.createElement('button');
    btn.setAttribute('class', 'variant2');
    btn.innerText = arr[j];
    div2.append(btn);
    btn.onclick = ()=>{
        writeText.innerText += arr[j]
    }
}
const div3 = document.createElement('div');
for (let q = 19; q < 25; q++){
    const btn = document.createElement('button');
    btn.setAttribute('class', 'variant2');
    btn.innerText = arr[q];
    div3.append(btn);
    btn.onclick = ()=>{
        writeText.innerText += arr[q]
    }
}
div.append(div1,div2,div3,)


document.body.append(test, writeText,div)


