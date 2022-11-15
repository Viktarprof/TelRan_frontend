// 1. В div с классом container добавить 2 параграфа с произвольным текстом (через DOM)

// const container = document.querySelector('.container');
// const new_p1 = document.createElement('p');
// const new_p2 = document.createElement('p');

// new_p1.innerText = 'Hello';
// new_p2.innerText = ' Group';

// container.append(new_p1, new_p2);



//_________________________________________
// 2. В div с классом container добавить карточку (div). Внутрь карточки добавить 2 парагафа с произвольным текстом.

// const container = document.querySelector('.container');
// const greeting = document.querySelector('.greting');


//     const divCard = document.createElement('div');
//     const new_p1 = document.createElement('p');
//     const new_p2 = document.createElement('p');

// new_p1.innerText = 'Hello';
// new_p2.innerText = ' Group';

// divCard.classList.add('card') //добавили класс нашему диву
// greeting.classList.remove('greting2')// удалилил класс 


//     divCard.append(new_p1, new_p2);
//     container.append(divCard);

   


//_________________________________________

// 3. Элементу с классом card добавить следующие стили: border, width, border-radius, background-color, padding, margin


const container = document.querySelector('.container');
const greeting = document.querySelector('.greting');


    const divCard = document.createElement('div');
    const new_p1 = document.createElement('p');
    const new_p2 = document.createElement('p');

new_p1.innerText = 'Hello';
new_p2.innerText = ' Group';

divCard.classList.add('card') //добавили класс нашему диву
greeting.classList.remove('greting2')// удалилил класс 


    divCard.append(new_p1, new_p2);
    container.append(divCard);

    new_p1.style.color = 'red';
    new_p1.style.fontSize = '40px';


    //new_p2.style += 'border: 1px solid black; border-radius: 10px;width: 50px; background-color: gray; color: white;';