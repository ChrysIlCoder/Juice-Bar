import '../app.css'

export default function Footer(){
    return (
        <footer className='footer-container'>
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
                </ul>
                <ul className='footer-link'>
                    <li><a className='underline-effect-footer' href="/privacy">Privacy</a></li>
                    <li><a className='underline-effect-footer' href="/privacy/cookie">Cookie Privacy</a></li>
                    <li><a className='underline-effect-footer' href="/terms">Termini & Condizioni</a></li>
                </ul>
            </div>
        </footer>
    )
}