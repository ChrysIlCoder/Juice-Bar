import ContactSocialsItems from "./contactSocialsItems";
import './contact.css'
import ContactSpiegazione from "./contactSpiegazione";

export default function ContactSocials(){
    return (
        <div className="socials-container">
            <ContactSocialsItems/>
            <hr className="contact-divider-socialgazione"/>
            <ContactSpiegazione />
        </div>
    )
}