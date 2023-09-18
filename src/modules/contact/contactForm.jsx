import './contact.css'

export default function ContactForm(){
    return (
        <div className='contact-form'>
            <form action="">
                <div className='form-names-container'>
                    <input type="text" placeholder='Nome'/>
                    <input type="text" placeholder='Cognome'/>
                </div>
                <input type="text" placeholder='Email'/>
                <input type="tel" placeholder='Telefono' inputMode='numeric' pattern='[0-9]+'/>
                <input type="submit" value="Invia"/>
            </form>
        </div>
    )
}