import './contact.css'
import InfoItem from './contactInfoItem'
import phoneIcon from '../../assets/PhoneIcon.png'
import emailIcon from '../../assets/EmailIcon.png'
import waypointIcon from '../../assets/PosizioneIcon.png'
import facebookIcon from '../../assets/FacebookIcon.png'

export default function ContactInfo(){
    return (
        <div className='contact-info-container'>
            <span className='contact-info-header'>Ecco alcuni nostri contattati</span>
            <div className='info-socials-line'>
                <InfoItem icon={phoneIcon} title={'Telefono'} info={'+1 605-475-6968'}/>
                <InfoItem icon={emailIcon} title={'Email'} info={'christian.anzolin.gay@gmail.com'}/>
                <InfoItem icon={waypointIcon} title={'Posizione'} info={'Via 4405 Neese Ln, Moss Point, MS 39563'}/>
                <InfoItem icon={facebookIcon} title={'Facebook'} info={'@Juicebar_Ubriachi'}/>
            </div>
        </div>
    )      
}