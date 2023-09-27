import './home.css'
import '../../app.css'
import { Drinks } from '../../utils/database'
import { useState } from 'react'

export default function HomeMenu() {
    const [changeObject, setChangeObject] = useState("Mojrito")

    return (
            <>
                <div className='home-menu-title'>
                    <span>Gusta un <b style={{ color: "orange" }}>drink.</b></span>
                </div>
                <div className='home-drinks-showcase'>
                    <div className='menu-drink-selector'>
                        {Object.keys(Drinks).map((drink, index) => (
                            <button key={index}>{drink}</button>
                        ))}
                    </div>
                    {console.log(changeObject)}
                    <div className='menu-detail-photo'>
                        <img 
                            src={
                                changeObject === "Mojrito"
                                ? "https://shorturl.at/lyJW3" // Mojito
                                : changeObject === "Limortacci"
                                ? "https://shorturl.at/oAHV9" // Limortacci
                                : changeObject === "Marrino"
                                ? "https://shorturl.at/anX26" // Marrino
                                : changeObject === "Wiskyonsis"
                                ? "https://shorturl.at/bGLR6" // Wiskyonsis

                                : null // Ritorna Niente 
                            }
                            alt="Drink"
                        />
                    </div>
                    <div className='menu-drink-details'>
                        <h2 className='menu-drink-name'>{Drinks.Mojrito.name}</h2>
                        <p className='menu-drink-desc'>
                            {Drinks.Mojrito.details}
                        </p>
                        <button className='menu-drink-view'><a href="/menu">Altri Dettagli</a></button>
                    </div>
                </div>
            </>
    )
}