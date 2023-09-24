import './lavoro.css'
import LavoroInfo from './lavoroInfo'
import LavoroPosizioni from './lavoroPosizioni'

export default function LavoroContet(){
    return (
        <div className='work-with-us-container'>
            <LavoroInfo />
            <hr />
            <LavoroPosizioni />
        </div>
    )
}