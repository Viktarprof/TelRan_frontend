import style_rent from "./Rent.module.css"
import app_container from "../App/App.module.css"
import Picture from "../Picture/Picture"
import bikes from "./Media/bikes.png"

function Rent(){
    return(
        <div className= {`${style_rent.card_rent}`}>
            <Picture src = {bikes} alt = 'bikes'/>
            {/*или второй вариант <img className={style_rent.image}></img> */}

            <div className = {style_rent.info_text}>
                <h3>Прокат велосипедов</h3>
                <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
            </div>
        </div>
    )
}
export default Rent