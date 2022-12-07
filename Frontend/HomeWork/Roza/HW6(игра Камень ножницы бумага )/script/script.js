const startBtn = document.querySelector('#start');
const gameBody = document.querySelector('.game-body');
const btnGenerate = document.querySelector('.generate');
const container = document.querySelector('.container');
const btnPaper = document.querySelector('#paper');
const btnNails= document.querySelector('#nails');
const btnStoun = document.querySelector('#stoun');

//============= Генерация и добавление цифры в alert ========================================

// btnGenerate.onclick = () =>{
//   const p1 = document.createElement('p');
//   const getNum = () => Math.round(Math.random() * 3);
//   p1.innerText = `Попробуй ${getNum()}`;
//   container.append(p1) 
// }

// function start() {
//   let compMove = Math.floor(Math.random() * 3);
//   console.log(compMove);
//   let userMove = parseInt(prompt("Камень, ножницы, бумага?"));
//   // let numFromUserMove = parsenInt(userMove); преобразовывает из строки в число;
//   //&& - и / AND
//   if (isNaN(userMove)||userMove > 2 || userMove < 0){
//      alert ('Введите число от 0 до 2')

//   } else if (compMove === 0 && userMove === 1){
//     const img = document.createElement('img');
//     img.setAttribute('src', '..//media/paper.jpeg');
//     img.classList.add('imgWinner')
//     gameBody.append(img);
//       alert('Вы выйграли с помощью бумаги');

//   } else if (compMove === 0 && userMove === 2){
//     const img = document.createElement('img');
//     img.setAttribute('src', '..//media/Stone.jpeg');
//     img.classList.add('imgWinner')
//     gameBody.append(img);
//       alert('Комп выйграл Вас с помощью камня');

//   } else if (compMove === 1 && userMove === 0){
//     const img = document.createElement('img');
//     img.setAttribute('src', '..//media/paper.jpeg');
//       alert('Комп выйграл Вас с помощью бумаги');

//   } else if (compMove === 1 && userMove === 2){
//     const img = document.createElement('img');
//     img.setAttribute('src', '..//media/nails.jpeg');
//     img.classList.add('imgWinner')
//     gameBody.append(img);
//       alert('Вы выйграли с помощью ножниц');

//   } else if (compMove === 2 && userMove === 0){
//     const img = document.createElement('img')
//     img.setAttribute('src', '..//media/Stone.jpeg');
//       alert('Вы выйграли с помощью камня');

//   } else if (compMove === 2 && userMove === 1){
//     const img = document.createElement('img');
//     img.setAttribute('src', '..//media/nails.jpeg');
//       alert('Комп выйграл Вас с помощью ножниц');

//   } else{
//       alert('у вас ничья');
//   } 
// }
// startBtn.onclick = () =>{
//   start();
// }




//=============== Нажатие на область предмета ======================================
const img = document.createElement('img');
gameBody.append(img);

function start1() {
  const pinf = document.querySelector('.win');
  let compMove = Math.floor(Math.random() * 3);
 
  if (compMove === 0 && btnPaper){
    pinf.innerText = 'Вы выйграли с помощью БУМАГИ!';
    img.setAttribute('src', 'https://cs4.pikabu.ru/post_img/2015/05/09/6/1431162988_24579060.gif');

  } else if (compMove === 2 && btnPaper){
    pinf.innerText = 'Комп выйграл Вас с помощью НОЖНИЦ!';

  } else if (compMove === 1 && btnPaper){
    pinf.innerText = 'Ничья!';
  }
}

function start2() {
  const pinf = document.querySelector('.win');
    let compMove = Math.floor(Math.random() * 3);
  if (compMove === 1 && btnNails){
    pinf.innerText = 'Вы выйграли с помощью НОЖНИЦ!';
    img.setAttribute('src', 'https://cs4.pikabu.ru/post_img/2015/05/09/6/1431162988_24579060.gif');
    
  } else if (compMove === 0 && btnNails){
    pinf.innerText = 'Комп выйграл Вас с помощью КАМНЯ!';

  } else if (compMove === 2 && btnNails){
    pinf.innerText = 'Ничья!';
  }
}  

function start3() {
    const pinf = document.querySelector('.win');
    let compMove = Math.floor(Math.random() * 3);
  if (compMove === 2 && btnStoun){
    pinf.innerText = 'Вы выйграли с помощью КАМНЯ!';
    img.setAttribute('src', 'https://cs4.pikabu.ru/post_img/2015/05/09/6/1431162988_24579060.gif');

  } else if (compMove === 1 && btnStoun){
    pinf.innerText = 'Комп выйграл Вас с помощью БУМАГИ!';

  } else if (compMove === 2 && btnStoun){
    pinf.innerText = 'Ничья!';
  } 
}

btnPaper.onclick = ()=>{
  img.setAttribute('src','');
    start1();
}
btnNails.onclick = ()=>{
  img.setAttribute('src','');
    start2();
} 
btnStoun.onclick = ()=>{
  img.setAttribute('src','');
    start3()
}



  

