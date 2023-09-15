import ContactAlternativaSocial from "./contactAlternativa";
import ContactSocials from "./contactSocials";

export default function ContactContent(){
    return (
        <div className="contact-container">
            <ContactSocials />
            <ContactAlternativaSocial />
        </div>
    )
}
