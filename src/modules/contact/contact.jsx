import './contact.css'
import ContactForm from './contactForm'
import ContactHeader from './contactHeader'

export default function Contact(){
    return (
        <div className='contact-container'>
            <ContactHeader />
            <ContactForm />
        </div>
    )
}
