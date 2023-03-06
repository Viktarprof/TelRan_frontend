function Task({title, completed}){
    const status = completed ? 'done' : 'not done'
    return(
            <div>
                <h3>список задач</h3>
                <p>title: {title}</p>
                <p>completed: {status}</p>
            </div>
        )
}
export default Task