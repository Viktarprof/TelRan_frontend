console.log('================');
// let a = 44;
// setTimeout(() => {
//   a = 33
//   console.log(a);
// }, 2000);
// console.log(a);



console.log('================');
let my_promies = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(a = 33);
  }, 2000);
})
.then(() => console.log(a))
.then()


console.log('================');
// 1. Используя Math.random(), выводить в консоль "все хорошо", если Math.random() сгененрирует число больше или равно 0.5, или выводить "все плохо" - если сгенерирует число меньше 0.5
// const random_promies = new Promise((resolve, reject) => {
//   const random_num = Math.random()
//     if(random_num >= 0.5){
//       resolve(random_num)
//     } else {
//      reject(random_num)
//    }
// });



// random_promies.then(
//   (value) =>  console.log(value + ' все хорошо'),
//   (value) =>  console.log('все плохо ' + value)
// );



console.log('================');
// fetch('https://jsonplaceholder.typicode.com/users') // отправляю запрос
//   .then(resp => resp.json()) // получаю ответ, преобразовываю в json
//   .then(json => console.log(json)) // беру сформированный json и что-то с ним делаю (вывожу в консоль)


console.log('================');
  // 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/users
// 2. Из полученного массива для каждого юзера сформировать карточку с именем, фамилией и юзернэймом

const root = document.querySelector('.root');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(json => render_user(json))

const render_user = json =>{
  json
  .sort((a,b) => a.username.localeCompare(b.username))
  .forEach(({name, username}) => {

    const cardElem = document.createElement('div');
    const name_elem = document.createElement('p');
    const user_name_elem = document.createElement('p');

    name_elem.innerText = `Name: ${name}`;
    user_name_elem.innerText = `User_name: ${username}`;

    cardElem.classList.add('card')

    cardElem.append(name_elem, user_name_elem);
    root.append(cardElem);
  });
}



