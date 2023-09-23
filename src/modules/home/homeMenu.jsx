import './home.css'
import '../../app.css'
import ImageBackground from './imageBackground'

export default function HomeMenu() {
    return (
        <div className='menu-home-container'>
            <div className='menu-nav-div'>
                <span className='header'>Sbronzo con tanti <span className='link-home-menu underline-effect'><a href="/menu">Gusti.</a></span></span>
            </div>
            <div className='menu-grid-container'>
                <div className='drink-item' style={{ backgroundImage: "url(https://shorturl.at/lyJW3)" }}>
                    <div className="text-menu-container">
                        <span className='item-home-menu-title'>Mojrito</span>
                        <span className='item-home-menu-subtitle'>Un classico gusto di morte</span>
                    </div>
                </div>
                <div className='drink-item' style={{ backgroundImage: "url(https://shorturl.at/oAHV9)" }}>
                    <div className="text-menu-container">
                        <span className='item-home-menu-title'>Limortacci</span>
                        <span className='item-home-menu-subtitle'>Non sta a fà troppi danni ok?</span>
                    </div>
                </div>
                <div className='drink-item' style={{ backgroundImage: "url(https://shorturl.at/anX26)" }}>
                    <div className="text-menu-container">
                        <span className='item-home-menu-title'>Marrino</span>
                        <span className='item-home-menu-subtitle'>Gusta la freschezza del mare</span>
                    </div>
                </div>
                <div className='drink-item' style={{ backgroundImage: "url(https://shorturl.at/bGLR6)" }}>
                    <div className="text-menu-container">
                        <span className='item-home-menu-title'>Wiskonsis</span>
                        <span className='item-home-menu-subtitle'>Per sbloccare l'americano in te</span>
                    </div>
                </div>
            </div>
        </div>
    )
}