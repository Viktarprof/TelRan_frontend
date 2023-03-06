import User from "./User"
import { data } from "../data/users" 
import { tasks } from "../data/tasks"
import Task from "./Task"

function App(){
  return(
    
    <div>
      <User firstname='Anton' lastname='Gribov' age='55' />
      <User firstname='Olga' lastname='Ivanova' age='23' />
      <User firstname='Irina' lastname='Petrova' age='11' />

      {
        data.map(el => <User key = {el.id} {...el} />)
      }
      <div>
        <h3>список дел</h3>
        {
        tasks.map(elem => <Task key = {elem.id} {...elem} />)
        }
      </div>
     
    
    </div>
      /* или вот так {data.map(el => <User firstname = {el.firstname} lastname = {el.lastname} age = {el.age}/>)} */
    
  )
}
export default App
