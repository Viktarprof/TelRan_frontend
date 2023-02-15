// 1. Написать функцию, при вызове которой отправляется fetch-запрос по адресу https://jsonplaceholder.typicode.com/todos
// 2. Вывести в консоль то, что придет по запросу

let todos_container = document.querySelector('.todos_container')

const getAllTasks = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  // .then(json => console.log(json)) // получили массив
  .then(json => render(json)) 
}



// 3. Наполнить контейнер карточками с двумя параграфами (task и status). В status выводить текст 'done', если задача выполнена, и 'not done' - если не выполнена

const render = json => {
  const cards_dotos = json.map(({title, completed}) => {

    const card = document.createElement('div');
    const task = document.createElement('p');
    const status = document.createElement('p');

    let statusText = completed == false ? 'done' : 'not done';

    task.innerText = `Task: ${title}`; 
    status.innerText = `Status: ${statusText}`; 

    card.append(task, status)

    card.classList.add('card');
    // card.style.backgroundColor = statusText == 'done' ? '#47f168' : '#8a8989';
    card.style.backgroundColor = completed ? 'lightgreen' : 'lightgray';
    
    card.style.fontSize = statusText == 'not done' ? '25px': '20px';

    return card
  });
  todos_container.append(...cards_dotos);
}

getAllTasks();