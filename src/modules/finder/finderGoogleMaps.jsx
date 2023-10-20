import './finder.css'

export default function FinderGoogleMaps(){
    return (
        <div className='finder-info-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2218.914572835704!2d11.632442043152297!3d45.51698012997918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f2e5dd17d0aa1%3A0x11f06080a34b08f0!2sLerino%2C%2036040%20Torri%20di%20Quartesolo%20VI!5e0!3m2!1sit!2sit!4v1697806724527!5m2!1sit!2sit" title='Centrale del latte' allowFullScreen="true" className='google-maps-finder'></iframe>
            <div className='bar-info'>
                <span className='finder-info-header'>Non sai dove andare?</span>
                <p className='finder-info-subtitle'>
                    Abbiamo trovato (grazie ad un hacker sconosciuto) la tua posizione in tempo reale! Ecco il bar più vicino a te:
                </p>
            </div>
        </div>
    )
}