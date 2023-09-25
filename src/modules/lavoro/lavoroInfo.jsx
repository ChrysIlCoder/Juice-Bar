import './lavoro.css'
import baule from '../../assets/BauleIcon.png'

export default function LavoroInfo(){
    return (
        <div className='job-info-container'>
            <img src={baule} alt="Gemme" className='baule-gemme'/>
            <h1 className='job-info-title'>Schiavizzati</h1>
            <p className='job-info'>
                Siamo sempre alla ricerca di nuovi dipendenti da schiavizzare e sottopagare. Scegli pure
                la posizione più adatta a te.
                Oppure inviaci il tuo CV! Tanto, tranquillo, noi di Juice Bar
                ci impegniamo a schiavizzare tutto e tutti in modo equo!
            </p>
        </div>
    )
}