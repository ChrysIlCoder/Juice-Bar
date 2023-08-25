import './finder.css'

export default function FinderSpiegazione(){
    return (
        <div className='finder-spiegazione-container'>
            <div className='spiegazione-container'>
                <span className='spiegazione-header'>Perché dovrei venire nel vostro bar Marso?</span>
                <p className='spiegazione-p'>
                    Per venire a scoprire un'oasi di piacere nel cuore della città nel nostro accogliente bar! 
                    Goditi l'atmosfera incantevole e rilassante, dove la musica dal vivo si fonde armoniosamente 
                    con la selezione di cocktail artigianali che delizieranno i tuoi sensi. I nostri bartender 
                    esperti ti accoglieranno con sorrisi calorosi, offrendo un'esperienza indimenticabile per le 
                    tue serate tra amici o momenti di tranquillo godimento personale.
                </p>
                <small style={{ opacity: '0.6'}}>Generated Copyright © ChatGPT, OpenAI Inc.</small>
            </div>
            <img src="https://shorturl.at/dnCNU" alt="Immagine Bicchere" className='spiegazione-image'/>
        </div>
    )
}