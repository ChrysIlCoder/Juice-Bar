import '../app.css'
import logo from '../assets/Logo.png'

export default function Footer(){
    return (
        <footer>
            <div className='footer-container'>
                <span className='footer-logo'>Juice.</span>
                <span className='footer-copyright'>Copyright © 2023, Juice Bar</span>
                <ul className='footer-links-list'>
                    <li className='footer-links underline-effect'><a href="/">Home</a></li>
                    <li className='footer-links underline-effect'><a href="/menu">Menù</a></li>
                    <li className='footer-links underline-effect'><a href="/finder">Trova Bar</a></li>
                    <li className='footer-links underline-effect'><a href="/chisiamo">Chi Siamo</a></li>
                    <li className='footer-links underline-effect'><a href="/contact">Contattaci</a></li>
                </ul>
            </div>
        </footer>
    )
}