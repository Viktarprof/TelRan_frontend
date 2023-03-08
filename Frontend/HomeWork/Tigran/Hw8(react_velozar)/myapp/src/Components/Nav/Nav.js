import logo from "./media/logo.png"
import style from "./Nav.module.css"

function Nav(){
    return(
        <div id={style.nav}>
            <img className="logo" src={logo} alt="logo" style={{cursor: 'pointer'}}></img
            >
            <ul >
                <li>О нас</li>
                <li>Услуги</li>
                <li>Аренда</li>
            </ul>
            <button>Связаться</button>
        </div>
    )
}
export default Nav