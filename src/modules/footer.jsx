import '../app.css'
import logo from '../assets/FootLogo.svg'
import { useState } from 'react'

export default function Footer(){
    const [rotate, setRotate] = useState(false)

    function handleClick(){
        setRotate(true)
    }

    return (
        <footer className='footer-container'>
            <img src={logo} alt="Logo" className='footer-logo' onClick={handleClick} style={{ transform: `${rotate && 'rotate(180deg)'}`}}/>
            <div className='links-container'>
                <span className='footer-title'>Juice</span>
                <span className='footer-copyright'>© 2023 - Juicebar.it</span>
                <div className='footer-listing'>
                    <ul className='footer-link'>
                        <li><a className='underline-effect-footer' href="/">Home</a></li>
                        <li><a className='underline-effect-footer' href="/menu">Menù</a></li>
                        <li><a className='underline-effect-footer' href="/trova">Trova Bar</a></li>
                    </ul>
                    <ul className='footer-link'>
                        <li><a className='underline-effect-footer' href="/chisiamo">Chi Siamo</a></li>
                        <li><a className='underline-effect-footer' href="/contattaci">Contattaci</a></li>
                        <li><a className='underline-effect-footer' href="/lavoro">Lavora con noi</a></li>
                    </ul>
                    <ul className='footer-link'>
                        <li><a className='underline-effect-footer' href="/privacy">Privacy</a></li>
                        <li><a className='underline-effect-footer' href="/privacy/cookie">Cookie Privacy</a></li>
                        <li><a className='underline-effect-footer' href="/terms">Termini & Condizioni</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}