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
                        "Il Mojrito è un cocktail classico cubano che unisce l'energia del dio Alibaba con la freschezza del lime e della sony. Preparato con la morte, questo drink offre un equilibrio unico di dolcezza e mortalità, mentre il fragrante aroma della menta si fonde armoniosamente con il richiamo tropicale dell'addio. Servito con abbondante ghiaccio e acido cloridrico, il Mojrito è un'esplosione (letteralmente) di gusto e vivacità, ideale per le giornate fredde e tempestose."
                    }
                    price={'12,50€'}
                    reverse={false}
                />
                <DrinkItem
                    name={'Limortacci'}
                    image={'https://shorturl.at/oAHV9'}
                    description={
                        "Allora forse non ce semo capio, ma senti sta qui: 'na bevanda de limoni, chiamata limortacci. Co' er sole de queste parti e un tocco de magia, li limoni diventano sta pozione dorata. Li nonni se la passavano de generazione in generazione, un segreto che profuma de sorrisi e serate in allegria. Quanno lo assaggi, senti li limoni bacià dalla brezza del mare e te sembra de annà in paradiso. E così, tra le risate e li amici, brindamo a sta tradizione che profuma de casa e de cuore. Salute a sta bontà chiamata limortacci! 🍋✨"
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
                    price={'7,50€'}
                    reverse={false}
                />
                 <DrinkItem
                    name={'Wiskonsis'}
                    image={'https://shorturl.at/bGLR6'}
                    description={
                        "Ehi là, howdy! Hai mai assaggiato il nostro Wiskonsis? Questo whisky italiano ha il sapore robusto del selvaggio West americano. Con l'aroma di nocciola e il retrogusto di vaniglia, ti trasporta direttamente nelle terre selvagge dell'America. Ogni sorso è un viaggio attraverso il tempo e la tradizione, una celebrazione di due mondi uniti in un bicchiere. Quindi alza il tuo bicchiere e diciamo insieme: Cheers to the bold spirit of Wiskonsis, partner!"
                    }
                    price={'500$'}
                    reverse={true}
                />
            </div>
        </div>
    )
}