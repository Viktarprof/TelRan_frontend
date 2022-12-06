const user_Form = document.querySelector('.user_form');
const clik_btn = document.querySelector('.clik_btn');
const users_container = document.querySelector('.users_container');

user_Form.addEventListener('submit', (event)=>{
event.preventDefault() //запрет форме обновлять страницу после отправки 
console.log(event.target.firstName); // event.target - это ссылка на элемент , с котором происходит событие

// const firstName = event.target.firstName.value;
// const lastName = event.target.lastName.value;

const {firstName, lastName} = event.target // способ диструктуризации

const userCard = document.createElement('div');
const firstNameElem = document.createElement('p');
const lastNameElem = document.createElement('p');

    firstNameElem.innerText = `First name: ${firstName.value}`;
    lastNameElem.innerText = `Last name: ${lastName.value}`;

userCard.append(firstNameElem, lastNameElem);
users_container.append(userCard);

//console.log('Hello ' + firstName + ' ' +lastName); 
//console.log(event.target.firstName.value); 
//onsole.log(event.target.lastName.value);

firstName.value = '';
lastName.value = '';
});

clik_btn.addEventListener('click', (event) =>{
console.log(event.target);
});


//============================
const user = {
    first_name: 'Viktar',
    last_name: 'Kalosha',
    age: 27
}
const {first_name, last_name, age} = user;

console.log(user.age, user.first_name);
console.log(user.first_name);
console.log(user.last_name);
console.log(user.age)
//============================
