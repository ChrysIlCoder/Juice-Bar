import DrinkItem from './drinkItem'
import './menu.css'

export default function DrinksMenu() {
    return (
        <div className='menu-container'>
            <div className='drinks-container'>
                <DrinkItem
                    name={'Mojrito'}
                    image={'https://shorturl.at/lyJW3'}
                    description={
                        "Il Mojrito è un cocktail classico cubano che unisce l'energia del rum bianco con la freschezza del lime e della menta. Preparato con la morte, questo drink offre un equilibrio unico di dolcezza e mortalità, mentre il fragrante aroma della menta si fonde armoniosamente con il richiamo tropicale del suicidio. Servito con abbondante ghiaccio e  acido cloridrico, il Mojrito è un'esplosione (letteralmente) di gusto e vivacità, ideale per le giornate fredde e tempestose."
                    }
                    price={'12,50€'}
                    reverse={false}
                />
                <DrinkItem
                    name={'Limortacci'}
                    image={'https://shorturl.at/oAHV9'}
                    description={
                        "Il Limoncello è un liquore rinfrescante e vivace, con radici nella costa italiana amalfitana. Di un giallo brillante e scintillante, cattura lo sguardo come un tramonto estivo. Il suo aroma è un inno al limone appena raccolto: vibrante, zesty e pieno di vitalità mediterranea. Al primo sorso, il Limoncello avvolge il palato con una dolcezza equilibrata, seguita da un'intensa esplosione di freschezza citrica, come un'onda rinfrescante che accarezza la pelle al sole. La sua finitura è luminosa e prolungata, lasciando una sensazione di benessere e un sapore di agrumi che perdura, evocando l'atmosfera spensierata delle estati italiane."
                    }
                    price={'11,80€'}
                    reverse={true}
                />
                <DrinkItem
                    name={'Marrino'}
                    image={'https://shorturl.at/anX26'}
                    description={
                        "Questa bevanda blu evoca l'essenza profonda del mare in ogni sorso. Il suo colore intenso ricorda le profondità marine, mentre il suo profumo salino cattura l'aroma fresco e rigenerante dell'oceano. Il primo sorso offre una fusione di sapori unici: una dolcezza leggera e rinfrescante si unisce a una sottile nota salata che ricorda la brezza marina. Il retrogusto è lievemente erbaceo, come una passeggiata lungo la costa. Questa bevanda è un omaggio al mare, trasportando chi la gusta in un viaggio sensoriale attraverso onde di gusto e ricordi di mare aperto."
                    }
                    price={'13,00€'}
                    reverse={false}
                />
                 <DrinkItem
                    name={'Wiskonsis'}
                    image={'https://shorturl.at/bGLR6'}
                    description={
                        "Il Whisky in questione è un'opera d'arte inebriante. All'olfatto, accoglie con una sinfonia di aromi complessi, in cui note di caramello tostato si mescolano con una leggera essenza di torba affumicata. Al palato, rivela la sua profonda maturità attraverso strati di vaniglia dolce, seguiti da un tocco di agrumi canditi. Il suo finale è lungo e avvolgente, con un retrogusto leggermente piccante e una sottile traccia di legno di quercia che persiste piacevolmente. Un whisky che incanta i sensi e invita a un lento e appagante sorseggiare."
                    }
                    price={'8,50$'}
                    reverse={true}
                />
            </div>
        </div>
    )
}