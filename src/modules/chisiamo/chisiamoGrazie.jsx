import './chisiamo.css'
import { Gallery } from './chisiamoGallery'

export default function ChiSiamoGrazie(){
    return (
        <div className='thanks-container'>
            <div className='thanks-text'>
                <span className='thanks-title'>Un grazie enorme.</span>
                <p className='thanks-desc'>
                    Una grazie enorme, per tutti gli anni che ci avete supportato, nonostante i vari
                    "problemini" che si sono fromati nel tempo. Per ringraziarvi, abbiamo deciso di fare
                    un video che racchiuda un po' questi 30 anni e passa di attività, di gioie, di obbiettivi.
                    Ma non bisogna dimenticare anche gli avvenimenti brutti... Come la chiusura nel 2003... Ma
                    noi non ci siamo fermati e ci siamo rialzati, grazie anche a voi. Buona degustazione a tutti voi negri!
                </p>
            </div>
            <div className='thanks-gallery'>
                <div className='gallery'>
                    <Gallery />
                </div>
            </div>
        </div>
    )
}