import './lavoro.css'
import baule from '../../assets/BauleIcon.png'

export default function LavoroInfo(){
    return (
        <div className='job-info-container'>
            <img src={baule} alt="Gemme" className='baule-gemme'/>
            <h1 className='job-info-title'>Lavora con noi</h1>
            <p className='job-info'>
                Siamo sempre alla ricerca di persone con voglia di lavorare e entusismo. Che vogliono
                imparare e fare, ma anche divertirsi! Non siamo così seri! Se pensi di essere all'altezza,
                applicati in una delle seguenti posizioni aperte, ti aspetteremo a braccia aperte!
            </p>
        </div>
    )
}