import './finder.css'

export default function FinderGoogleMaps(){
    return (
        <div className='finder-info-container'>
            <iframe src="https://shorturl.at/xCEN2" title='Centrale del latte' allowFullScreen="true" className='google-maps-finder'></iframe>
            <div className='bar-info'>
                <span className='finder-info-header'>Non sai dove andare?</span>
                <p className='finder-info-subtitle'>
                    Vieni in uno dei nostri bar più vicini e inziare ad
                    ubricarti a merda fino allo svenimento
                </p>
            </div>
        </div>
    )
}