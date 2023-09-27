import './lavoro.css'
import { useState } from 'react'
import JobPositionItem from './jobPositionItem'
import { Positions } from '../../utils/database'

export default function LavoroPosizioni(){
    const [query, setQuery] = useState("")
    const [selectedType, setSelectedType] = useState(Positions.services[0])

    const filterSearch = Object.keys(Positions.jobs).filter(item => {
        return item.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div className='jobs-list-container'>
            <div className='search-container'>
                <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder='Cerca posizioni...'/>
                <select name="Tipo di posizione" onChange={e => setSelectedType(e.target.value)}>
                    {Positions.services.map((type, index) =>(
                        <option value={type} key={index}>{type}</option>
                    ))}
                </select>
            </div>
            <div className='jobs-positions-container'>
                {
                    filterSearch.map((job, index) => {
                        const jobType = Positions.jobs[job].type;
                        if (
                            (selectedType == Positions.services[0]) ||
                            (selectedType == Positions.services[1] && jobType == "S") ||
                            (selectedType == Positions.services[2] && jobType == "G") ||
                            (selectedType == Positions.services[3] && jobType == "I")
                        ) {
                            return (
                                <JobPositionItem 
                                    title={Positions.jobs[job].title}
                                    desc={Positions.jobs[job].desc}
                                    hours={Positions.jobs[job].hours}
                                    type={Positions.jobs[job].type}
                                    key={index}
                                />
                            )
                        } return null
                    })
                }
            </div>
        </div>
    )
}