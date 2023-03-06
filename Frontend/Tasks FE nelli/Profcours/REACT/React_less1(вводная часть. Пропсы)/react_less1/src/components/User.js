// import React from 'react'

export default function User({firstname, lastname, age}) {
  return (
    <div>
        <h1>Информация о юзере</h1>
        <p>Name: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Age: {age}</p>
    </div>

  )
}



//2. В App.js создать контейнер (div) с информацией о юзере - имя, фамилия, возраст
//3. Создать компонент User, перенести всю конструкцию в компонент, импортировать компонент в App.js