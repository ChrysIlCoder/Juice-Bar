import './finder.css'

export default function Finder(){
    return (
        <div className='finder-container'>
            <iframe src="https://shorturl.at/lvLOY" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='google-maps-finder'></iframe>
            <div className='finder-info'>
                <span className='finder-info-header'>Non sai dove andare?</span>
                <p className='finder-info-subtitle'>
                    Vieni in uno dei nostri bar più vicini e inziare ad ubricarti
                    a merda fino allo svenimento
                </p>
            </div>
        </div>
    )
}