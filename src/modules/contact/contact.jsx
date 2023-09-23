import './contact.css'
import ContactForm from './contactForm'
import ContactFormHeader from './contactFormHeader'
import ContactHeader from './contactHeader'
import ContactInfo from './contactInfo'

export default function Contact(){
    return (
        <div className='contact-container'>
            <ContactInfo />
            <div className='contact-form-container'>
                <ContactFormHeader/>
                <ContactForm />
            </div>
        </div>
    )
}
