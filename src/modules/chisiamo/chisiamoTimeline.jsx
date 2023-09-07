import './chisiamo.css'
import Milestone from './chisiamoMilestone'

export default function ChiSiamoTimeline(){
    return (
        <div className='timeline-container'>
            <div className='juicebar-story-container'>
                <span className='juicebar-header'>Come nacque il <u>Juice Bar</u>?</span>
                <p className='juicebar-desc'>
                    Il Juice Bar nacque durante una parlata tra amici, o meglio, quello che pensavo fossero i miei
                    amici, erano invece della così detta "finanza" e mi raccontavano che non stavo pagando le tasse. Io
                    li dissi che ero povero e non me le potevo permettere, ma loro continuavano! Che simpatici!.
                    Però poi uno di loro disse "Si vabbè allora ne parliamo ad un bar no? C'è dai". In quel momento, mi si accese
                    una lampadina. E fu così, il marzo del 1991, con i soldi rubati nelle fontane in centro, inziarono
                    i primi lavori. Da là (oltre a qualche sparatoria per ""problemini di poco conto"") fu l'inizio
                    di una grande storia.
                </p>
            </div>
            <ul className='list-container'>
                <Milestone date={'1991'} desc={'Fondazione bar Juice.'}/>
                <Milestone date={'1995'} desc={'Creazione del drink con ingredienti segreti.'}/>
                <Milestone date={'1995'} desc={'Primo cliente prova il drink, muore sul colpo.'}/>
                <Milestone date={'2003'} desc={"La polizia fa chiudere l'attività per motivi"}/>
                <Milestone date={'2015'} desc={'Riapertura dopo rivisite ai nostri drink'}/>
                <Milestone date={'2023'} desc={'In imminente banca rotta'}/>
            </ul>
        </div>
    )
}