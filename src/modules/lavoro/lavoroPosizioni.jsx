import './lavoro.css'
import { useState } from 'react'
import JobPositionItem from './jobPositionItem'

export default function LavoroPosizioni(){
    const [query, setQuery] = useState("")

    const positions = {
        services: [
            "Tutti",
            "Servizio Clienti",
            "Gestione e Amministrazione"
        ],

        jobs: {
            Barista: {
                title: "Barista notturno",
                desc: "Lavora come barista notturno per servire drink e cocktails ai clienti",
                hours: "01:00 - 06:00",
            },
            Cameriere: {
                title: "Cameriere",
                desc: "Servi ai clienti i drink e pietanze richieste e preparate dallo chef di fiducia",
                hours: "Mattina - Pomeriggio - Sera",
            },
            Barman: {
                title: "Barman",
                desc: "Crea, prepara e servi drink ai clienti facendoli ubricare per massimizzare i guadagni",
                hours: "Mattina - Pomeriggio - Sera",
            },
            StorageManager: {
                title: "Storage Manager",
                desc: "Gestici la prenotazione e consegna dei pacchi Juice Bar",
                hours: "9:00 - 17:00",
            },
            HeadMarketing: {
                title: "Head Marketing",
                desc: "Gestisci le pubblicità e strategie di marketing per far risaltare Juice bar",
                hours: "Orario d'ufficio",
            },
            Commercialista: {
                title: "Commercialista",
                desc: "Gestici la commercializzazione aziendale dal punto di vista economico",
                hours: "Chiamata o da accordare",
            },
            Fotografo: {
                title: "Fotografo",
                desc: "Scatta e modifica foto che siano all'altezza dell'altezza",
                hours: "Ingaggio",
            },
            Grafico: {
                title: "Grafico",
                desc: "Crea album, copertine, poster e altre grafiche per il logo Juice Bar",
                hours: "Orario d'ufficio",
            },
            AddettoAllePulizie: {
                title: "Addetto alla pulizia",
                desc: "Pulisci la merda lasciata dai clienti molto ma molto garbati... E ovviamente anche da noi",
                hours: "Mattina - Pomeriggio - Sera",
            },
            DoorManager: {
                title: "Door Manager",
                desc: "Apri tutte le porte dell'edificio, compreso il bagno",
                hours: "Non puoi più uscire",
            },
        },
    }

    const filterSearch = Object.keys(positions.jobs).filter(item => {
        return item.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div className='jobs-list-container'>
            <div className='search-container'>
                <input type="search" value={query} onChange={e=> setQuery(e.target.value)} placeholder='Cerca posizioni...' className='search-bar'/>
                <select name="Tipo di posizione" className='lavoro-tipo-selection'>
                    {positions.services.map((type, index) =>(
                        <option value={type} key={index}>{type}</option>
                    ))}
                </select>
            </div>
            <div className='jobs-positions-container'>
                {filterSearch.map((job, index) => (
                    <JobPositionItem
                        title={positions.jobs[job].title}
                        desc={positions.jobs[job].desc}
                        hours={positions.jobs[job].hours}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}