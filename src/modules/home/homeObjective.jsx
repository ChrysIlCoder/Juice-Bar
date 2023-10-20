import './home.css'
import logo from '../../assets/NavLogo.svg'

export default function HomeObjective(){
    return (
        <div className='objective-home-container'>
            <div><img src={logo} className='objective-logo' alt="Logo"/></div>
            <span className='header objective-title'>L'Obiettivo di Juice</span>
            <hr className='objective-point-breaker'/>
            <p className='objective-exp-home-p'>
                Il nostro obbiettivo è quello di creare bevande che restino nella storia,
                che restino nel cuore delle persone che un qualcosa di mai gustato prima.
                Che i migliori cirtici dicano che i nostri drink sono i miglori di tutta la galassia.
                Vuoi entrare a far parte di questa nuova era del gusto? Allora, vieni da noi.
            </p>
        </div>
    )
}