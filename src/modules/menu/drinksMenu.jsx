import './menu.css'

export default function TrovaNome(){
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <span className='header'>Le Nostre Prelibatezze</span>
                <p className='menu-desc'>
                    Qui sono tenuti tutti i drink che da sempre hanno fatto
                    ubricare e scontrare la gente. Vuoi far parte del <span className='menu-team'>Team?</span>
                </p>
            </div>
            <div className='menu-grid-container'>
                <div className='drink-item-menu'>
                    <img src="" alt="" />
                    <p className='drink-desc'>

                    </p>
                    <span className='drink-price'></span>
                </div>
            </div>
        </div>
    )
}