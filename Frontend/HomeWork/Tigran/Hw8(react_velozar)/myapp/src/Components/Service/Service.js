import style_Service from './Service.module.css'
import app_container from "../App/App.module.css"

function Service(props){
    const {title,background} = props;

    return(
        <div className = {`${style_Service.card_item} ${app_container.container}`}
        style={{backgroundColor: background}}>
            <div className={style_Service.line}></div>
            <h3>{title}</h3>
        </div>
    )
}
export default Service