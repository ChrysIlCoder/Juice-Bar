import './contact.css'
import SocialItem from './contactSocialItem'

export default function ContactSocialsItems(){
    return (
        <div className='contact-socials-container'>
            <SocialItem image={'https://shorturl.at/bgiRV'} name={'Instagram'}/>
            <SocialItem image={'https://shorturl.at/jpsM1'} name={'Facebook'}/>
            <SocialItem image={'https://shorturl.at/dktNS'} name={'Twitter/X'} />
            <SocialItem image={'https://shorturl.at/sBF47'} name={'Youtube'} />
        </div>
    )
}