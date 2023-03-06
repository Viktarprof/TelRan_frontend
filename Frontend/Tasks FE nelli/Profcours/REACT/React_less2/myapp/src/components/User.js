// 1. Создать компонент User (имя, фамилия, возраст)
// 2. Импортировать компонент User в App.js
// 3. Создать трех пользователей, передав в компонент информацию о пользователях через пропсы
// 4. Создать массив data с информацией о пользователях (пользователь = объект). На основе этого массива создать пользователей
// 6. В компоненте User создать параграф Status и вывести в этот параграф значение из свойства active. Если true - active, fasle - not active
// 7. Создать компонент Task, который будет принимать задачу и статус выполнения
// 8. Создать в отдельном файле массив с задачами (id, title, completed)
// 9. На основе этого массива создать в App.js карточки с задачами. Если у задачи completed true, в статусе выполнения написать 'done', а если false - то 'not done'


function User({firstname, lastname, age, active}){
   const status = active ? 'online' : 'offline'
    return(
        <div>
            <h1>Карточка клиента</h1>
            <p>Имя: { firstname } { lastname }</p>
            <p>Возраст: { age }</p>
            <p>Status: { status }</p>
        </div>
    )
}
export default User