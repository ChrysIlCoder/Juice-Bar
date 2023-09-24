import './lavoro.css'

export default function LavoroInfo(){
    return (
        <div className='job-application-container'>
            <div className='job-spiegazione'>
                <h1 className='job-application-title'>Schiavizzati</h1>
                <div className='job-application-desc'>
                    <p>
                        Siamo sempre alla ricerca di nuovi dipendenti da schiavizzare e sottopagare. Scegli pure
                        la posizione più adatta a te.<br />
                        Oppure inviaci il tuo CV! Tanto, tranquillo, noi di Juice Bar
                        ci impegniamo a schiavizzare tutto e tutti in modo equo!
                    </p>
                    <img src='src\assets\GemsIcon.png' alt="Gemme" className='gemme'/>
                </div>
            </div>
        </div>
    )
}