import './chisiamo.css'
import Milestone from './chisiamoMilestone'

export default function ChiSiamoTimeline(){
    return (
        <div className='timeline-container'>
            <div className='juicebar-story-container'>
                <span className='juicebar-header'>Come nacque il <u>Juice Bar</u>?</span>
                <p className='juicebar-desc'>
                    "Il Juice Bar nacque durante una parlata tra amici. Eravamo in questo bar, all'epoca avevo solo 25 anni,
                    e mi ricordo che mentre bevavamo la nostra solita birra, qualcosa mancava, mancava gusto! Questo non era
                    un problema sono di quel bar, ma di tutti! Allora, insieme al mio amico <b>Frank</b> decidemmo di aprire un bar tutto nostro.
                    Dopo tanto tempo di <i>planning</i> finalmente iniziarono i lavori, a <b>Vicenza</b>. Dopo un annetto finirono, era un bar piuttosto piccolo,
                    ma per noi era perfetto. Da lì, bhe, è tutta storia"<br />
                    - <small><i>Fondatore, "<b>Giorgino Pistacchio</b>", durante un'intervista nel 2023</i></small>
                </p>
            </div>
            <ul className='list-container'>
                <Milestone date={'1994'} desc={'Fondazione del bar Juice - "Frutta Fresca".'}/>
                <Milestone date={'1995'} desc={'Il primo drink viene creato, il "Mojrito".'}/>
                <Milestone date={'1995'} desc={'Primo cliente prova il drink, muore sul colpo.'}/>
                <Milestone date={'1997'} desc={'Chiusura per problemi'}/>
                <Milestone date={'2000'} desc={'Riapertura dopo alcune rivisite ad alcuni dei nostri drink'}/>
                <Milestone date={'2023'} desc={'Festeggiamento del 29° anno di Juice bar'}/>
            </ul>
        </div>
    )
}