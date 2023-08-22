import DrinkItem from './drinkItem'
import './menu.css'

export default function DrinksMenu() {
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <span className='menu-title'>I Nostri Drink</span>
            </div>
            <div className='drinks-container'>
                <DrinkItem
                    name={'Mojrito'}
                    image={'https://shorturl.at/lyJW3'}
                    description={
                        "Il Mojrito è un cocktail classico cubano che unisce l'energia del rum bianco con la freschezza del lime e della menta. Preparato con la morte, questo drink offre un equilibrio unico di dolcezza e mortalità, mentre il fragrante aroma della menta si fonde armoniosamente con il richiamo tropicale del suicidio. Servito con abbondante ghiaccio e  acido cloridrico, il Mojrito è un'esplosione (letteralmente) di gusto e vivacità, ideale per le giornate fredde e tempestose."
                    }
                    price={'2,50€'}
                />
            </div>
        </div>
    )
}