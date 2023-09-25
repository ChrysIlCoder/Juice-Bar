import './lavoro.css'
import { useState } from 'react'
import JobPositionItem from './jobPositionItem'
import { Positions } from '../../utils/database'

export default function LavoroPosizioni(){
    const [query, setQuery] = useState("")

    const filterSearch = Object.keys(Positions.jobs).filter(item => {
        return item.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div className='jobs-list-container'>
            <div className='search-container'>
                <input type="search" value={query} onChange={e=> setQuery(e.target.value)} placeholder='Cerca posizioni...'/>
                <select name="Tipo di posizione">
                    {Positions.services.map((type, index) =>(
                        <option value={type} key={index}>{type}</option>
                    ))}
                </select>
            </div>
            <div className='jobs-positions-container'>
                {filterSearch.map((job, index) => (
                    <JobPositionItem
                        title={Positions.jobs[job].title}
                        desc={Positions.jobs[job].desc}
                        hours={Positions.jobs[job].hours}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}