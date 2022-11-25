// Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. 

//Нужно сделать два бокса. Разместить их вертикально один большой внизу (в нем будет большое изображение), второй узкий сверху (в нем будет галерея изображений маленького размера). В эту галерею динамически в js создаёте циклом список с изображениями превью и сразу вешаете на каждый итем слушатель на клик. При клике на итем значение его src передаёте в src большого изображения. Надеюсь понятно изложил...

// const arrIMG = [
//     {
//         link: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
//         link: "https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg",
//         link: "https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480",
//     }
// ];




 const arrLinks = ["https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg","https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg","https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480"];

let div1 = document.createElement('div');

for (let elem of arrLinks) {
    let img_mini = document.createElement('img');
    img_mini.setAttribute('src', elem);
    img_mini.setAttribute('class', 'elems');

    div1.append(img_mini);
    img_mini.onclick = () => {
        img_big.setAttribute('src', elem);
    } 

    
}
let img_big = document.createElement('img');
    img_big.setAttribute('src', arrLinks[2])

let div2 = document.createElement('div');
div2.style.width= '500px';

img_big.style.width = '500px';
div2.append(img_big);

div1.style.display = 'flex';
div1.style.justifyContent= 'center';


div2.style.display = 'flex';
div2.style.justifyContent = 'center';
div2.style.boxShadow = "0px 0px 10px 5px red";

let body = document.querySelector('body')
body.style.display = 'flex';
body.style.flexDirection = 'column';

body.style.justifyContent = 'center';
body.style.alignItems = 'center';


body.append(div1,div2)
// в работе заметил что все начинало работать когда создание дива, картинки, добавление шло последовательно внутри скобок. А если все было за скобками то ломалось.

function test1(n){
    if (n === 1){
       return 1;
    }
    for (let i = 1; i <= n; i++){
        i++
        for (let j = n; j >= 1; j--){
            j--
        }       
        console.log("*");
    } 
}
test1(-5)