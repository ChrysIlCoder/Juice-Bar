import '../app.css'
import logo from '../assets/Logo.png'
import { useState } from 'react'

export default function NavBar(){
    const [active, setActive] = useState(false)
    const handleBurgerClick = () => {setActive(active => !active)}

    return (
        <header>
            <nav className='navbar'>
                <a href="/"><img src={logo} alt="Logo" className='nav-logo'/></a>
                <ul className={`nav-menu ${active ? 'nav-active' : ''}`}>
                    <li className='nav-links underline-effect'><a href="/menu">Menu</a></li>
                    <li className='nav-links underline-effect'><a href="/trova">Trova un Bar</a></li>
                    <li className='nav-links underline-effect'><a href="/chisiamo">Chi Siamo</a></li>
                    <li className='nav-links underline-effect'><a href="/contact">Contattaci</a></li>
                </ul>
                <div className='burger' onClick={handleBurgerClick}>
                    <div className='burger-line1'></div>
                    <div className='burger-line2'></div>
                    <div className='burger-line3'></div>
                </div>
            </nav>
        </header>
    )
}