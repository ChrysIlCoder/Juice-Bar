import './home.css'
import '../../app.css'
import { Drinks } from '../../utils/database'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ThreeJS from '../THREE'
import { useProgress } from '@react-three/drei'

export default function HomeMenu() {
    const [changeObject, setChangeObject] = useState("Mojrito")

    const selectedDrink = Drinks[changeObject];

    return (
        <>
            <div className='home-menu-title'>
                <span>Gusta un <b style={{ color: "orange" }}>drink.</b></span>
            </div>
            <div className='home-drinks-showcase'>
                <div className='menu-drink-selector'>
                    {Object.keys(Drinks).map((drink, index) => (
                        <button key={index} onClick={e => setChangeObject(drink)}>{drink}</button>
                    ))}
                </div>
                    <div className='menu-detail-photo'>
                        <Canvas id='three-canvas'>
                            <Suspense fallback={null}>
                                <ThreeJS model={changeObject}/>
                            </Suspense>
                        </Canvas>
                    </div>
                <div className='menu-drink-details'>
                    <h2 className='menu-drink-name'>
                        {selectedDrink ? selectedDrink.name : ''}
                    </h2>
                    <p className='menu-drink-desc'>
                        {selectedDrink ? selectedDrink.details : ''}
                    </p>
                    <span className='menu-drink-price'>
                        {selectedDrink ? selectedDrink.price : ''}
                    </span>
                    <button className='menu-drink-view'><a href="/menu">Altri Dettagli</a></button>
                </div>
            </div>
        </>
    )
}
