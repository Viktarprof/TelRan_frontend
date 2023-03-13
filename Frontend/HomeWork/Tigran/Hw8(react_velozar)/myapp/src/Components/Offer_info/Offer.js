import styleOffer from "./Offer.module.css"
import app_container from "../App/App.module.css"
import bike_service from './Media/bike_service.png'
import Picture from "../Picture/Picture"

function Offer(){
    return(
        <div className={styleOffer.offerCard + ' '+ app_container.container_cards}>
            <div className={styleOffer.offerText}  >
                <h2>
                    Что мы предлагаем
                </h2>
                <p>
                    В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, 
                    ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО 
                    велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы 
                    выполняем качественно и с душой. 
                </p>
            </div>
            <Picture src = {bike_service} alt = 'bike_service'/>
            {/* или второй вариант <div className={styleOffer.image}></div> */}

        </div>
    )
}
export default Offer