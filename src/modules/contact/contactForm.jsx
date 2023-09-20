import './contact.css'

export default function ContactForm(){
    return (
        <div className='contact-form'>
            <form action="">
                <div className='form-inputs'>
                    <div className='form-name'>
                        <label>Nome</label>
                        <input type="text" />
                    </div>
                    <div className='form-surname'>
                        <label>Cognome</label>
                        <input type="text" />
                    </div>
                    <div className='form-email'>
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className='form-messagge'>
                        <label>Messaggio</label>
                        <textarea cols="70" rows="10"></textarea>
                    </div>
                </div>
                <input type="submit" value='Invia' className='form-submit'/>
            </form>
        </div>
    )
}