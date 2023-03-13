
import Nav from "../Nav/Nav"
import dino from "./media/dino.png"
import style from "./Header.module.css"
import app_container from "../App/App.module.css"
import Picture from "../Picture/Picture"

function Header(){
    return(
        <div className={app_container.container}
        >
            <Nav/>
            <div className={style.head_elem}>
                <div className={style.about_company}>
                    <h1>Веломастерская “Велозар”</h1>
                    <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
                </div>
                <Picture src = {dino} alt = 'dino'/>
                    {/* или второй вариант <img src={dino} alt='dino'></img> */}
            </div>
        </div>
    )
}
export default Header