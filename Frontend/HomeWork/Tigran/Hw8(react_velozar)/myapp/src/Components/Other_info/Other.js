
import style_other from "./Other.module.css"
import app_container from "../App/App.module.css"
function Other(){
    return(
        <div className={`${style_other.card_info} ${app_container.container}`}>
            <div className={style_other.text_p}>
                <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
                <p>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
            </div>
        </div>
    )
}
export default Other