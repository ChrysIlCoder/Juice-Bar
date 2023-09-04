import '../app.css'
import logo from '../assets/Logo.png'

export default function Footer(){
    return (
        <footer>
            <div className='footer-container'>
                <span className='footer-logo'>Juicy</span>
                <span className='footer-copyright'>Copyright © 2023, Juice Bar</span>
                <ul className='footer-links-list'>
                    <li className='footer-links'><a href="/" className='underline-effect'>Privacy</a></li>
                    <li className='footer-links'><a href="/menu" className='underline-effect'>Termini & Condizioni</a></li>
                    <li className='footer-links'><a href="/trova" className='underline-effect'>Policy Rimborsi</a></li>
                </ul>
            </div>
        </footer>
    )
}