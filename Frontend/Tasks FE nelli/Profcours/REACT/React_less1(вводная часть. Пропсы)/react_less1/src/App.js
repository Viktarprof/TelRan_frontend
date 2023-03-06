import Professions from "./components/Professions";
import User from "./components/User"

function App(){

    const users = [
        {
          id: 1,
          firstname: 'Oleg',
          lastname: 'Petrov',
          age: 28
        },
        {
          id: 2,
          firstname: 'Anna',
          lastname: 'Orlova',
          age: 54
        },
        {
          id: 3,
          firstname: 'Irina',
          lastname: 'Ivanova',
          age: 76
        },
        {
          id: 4,
          firstname: 'Ivan',
          lastname: 'Sokolov',
          age: 21
        }
      ]
      const professions = ['doctor', 'teacher', 'engineer', 'programmer'];

    return (
        <div>
          <div>
            {
              users.map(el => <User {...el} key={el.id} />)
                
                //{ если отдельные ключи нужно ТО пишем так
                    //users.map(el => <User firstname={el.firstname} lastname={el.lastname} age={el.age} />) 
                //}
            }
        
          </div>
          
          <div>
            {
              professions.map((el, index) => <Professions title={el} key={index} />)
            }
          </div>
        </div>
    );






}
export default App