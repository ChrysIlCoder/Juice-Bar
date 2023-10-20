import './chisiamo.css'
import { Gallery } from './chisiamoGallery'

export default function ChiSiamoGrazie(){
    return (
        <div className='thanks-container'>
            <div className='thanks-text'>
                <span className='thanks-title'>Un grazie enorme.</span>
                <p className='thanks-desc'>
                    Un grazie enorme da parte di tutto il team Juice Bar, che nonostante gli anni, avete sempre supportato
                    e adorato. Senza di voi non saremo qui ma bensì sul divano di casa a non fare un bel niente!.
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