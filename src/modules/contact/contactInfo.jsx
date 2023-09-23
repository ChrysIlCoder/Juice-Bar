import './contact.css'
import InfoItem from './contactInfoItem'
import phoneIcon from '../../assets/PhoneIcon.png'
import emailIcon from '../../assets/EmailIcon.png'
import instaIcon from '../../assets/InstaIcon.png'
import facebookIcon from '../../assets/FacebookIcon.png'

export default function ContactInfo(){
    return (
        <div className='contact-info-container'>
            <span className='contact-info-header'>Ecco alcuni nostri contattati</span>
            <div className='info-socials-line'>
                <InfoItem icon={phoneIcon} title={'Telefono'} info={'+1 605-475-6968'}/>
                <InfoItem icon={emailIcon} title={'Email'} info={'christian.anzolin.gay@gmail.com'}/>
                <InfoItem icon={instaIcon} title={'Instagram'} info={'@Juicebar.Illegal'}/>
                <InfoItem icon={facebookIcon} title={'Facebook'} info={'Juicebar_Ubriachi'}/>
            </div>
        </div>
    )      
}