import './home.css'
import logo from '../../assets/Logo.png'

export default function HomeObjective(){
    return (
        <div className='objective-home-container'>
            <div><img src={logo} className='drink-image' alt="Logo" className='objective-logo'/></div>
            <span className='header objective-title'>L'Obiettivo di Juice</span>
            <p className='objective-exp-home-p'>
                Il nostro obiettivo è quello di creare bevande stupefacenti. Il nostro<br/>
                segreto rimane un segreto, ma sappiate solo che le nostre bevande sono le bevande<br/>
                più bevande che abbiate mai bevuto, perché hanno un ingrediente segreto che rimane segreto.
            </p>
        </div>
    )
}