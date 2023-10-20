import './contact.css'
import InfoItem from './contactInfoItem'
import phoneIcon from '../../assets/PhoneIcon.png'
import emailIcon from '../../assets/EmailIcon.png'
import instaIcon from '../../assets/InstaIcon.png'
import facebookIcon from '../../assets/FacebookIcon.png'

export default function ContactInfo(){
    return (
        <div className='contact-info-container'>
            <span className='contact-info-header'>Inviaci un messaggio qui.</span>
            <div className='info-socials-line'>
                <InfoItem icon={phoneIcon} title={'Telefono'} info={'+39 3515130308'}/>
                <InfoItem icon={emailIcon} title={'Email'} info={'juice-bar@gmail.com'}/>
                <InfoItem icon={instaIcon} title={'Instagram'} info={'@Juicebar_official'}/>
                <InfoItem icon={facebookIcon} title={'Facebook'} info={'Juicebar_official'}/>
            </div>
        </div>
    )      
}