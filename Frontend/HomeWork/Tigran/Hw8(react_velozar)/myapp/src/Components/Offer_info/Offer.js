import styleOffer from "./Offer.module.css"
import app_container from "../App/App.module.css"

function Offer(){
    return(
        <div className={styleOffer.offerCard + ' '+ app_container.container}>
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
            <div className={styleOffer.image}>

            </div>

        </div>
    )
}
export default Offer