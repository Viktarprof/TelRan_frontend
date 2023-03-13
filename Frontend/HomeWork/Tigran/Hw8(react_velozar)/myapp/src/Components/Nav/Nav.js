import logo from "./media/logo.png"
import style from "./Nav.module.css"
import Rent from "../Rent/Rent";

function Nav(){
   const heandle = () => {
            scrollTo(0, <Rent/>)}

    return(
        <div id={style.nav}>
            <img className="logo" src={logo} alt="logo" style={{cursor: 'pointer'}}></img>
            <ul >
                <li>О нас</li>
                <li>Услуги</li>
                <li onClick = {heandle}>Аренда</li>
            </ul>
            <button>Связаться</button>
        </div>
    )
}
export default Nav