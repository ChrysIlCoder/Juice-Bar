import './contact.css'
import { useState } from 'react'

export default function ContactForm(){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        Email.send({
            SecureToken: "794adbc2-32fa-4261-b0eb-1ec7b76cea5c",
            To: 'chri.boffa@gmail.com',
            From: 'Creepert11.creeper@gmail.com',
            Subject: name + " " + surname,
            Body: "Email: " + email + "<br>" +
                  "Messaggio: " + content
        }).then(
            message => alert("Email inviata con successo")
        );
    }

    return (
        <div className='contact-form'>
            <form method='GET' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <div className='form-name'>
                        <label>Nome</label>
                        <input type="text" placeholder='e.g "Jack"' required onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='form-surname'>
                        <label>Cognome</label>
                        <input type="text" placeholder='e.g "Jackson"' required onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                    <div className='form-email'>
                        <label>Email</label>
                        <input type="email" placeholder='jack.jackson@gmail.com' required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-messagge'>
                        <label>Messaggio</label>
                        <textarea cols="70" rows="10" placeholder='Messaggio qui...' required onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </div>
                <input type="submit" value='Invia' className='form-submit'/>
            </form>
        </div>
    )
}