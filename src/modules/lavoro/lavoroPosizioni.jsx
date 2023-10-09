import './lavoro.css'
import { useState } from 'react'
import JobPositionItem from './jobPositionItem'
import { Positions } from '../../utils/database'
import { useSearchParams } from "react-router-dom";

export default function LavoroPosizioni(){
    const [searchParams, setSearchParams] = useSearchParams({query: "", type: Positions.services[0]})
    const search = searchParams.get("query")
    const positionType = searchParams.get("type")

    const filterSearch = Object.keys(Positions.jobs).filter(item => {
        return item.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='jobs-list-container'>
            <div className='search-container'>
                <input type="search" value={search} onChange={ e => setSearchParams(prev => {
                        prev.set("query", e.target.value)
                        return prev
                    }, {replace: true})
                } placeholder='Cerca posizioni...'/>
                <select name="Tipo di posizione" onChange={e => setSearchParams(prev => {
                    prev.set("type", e.target.value)
                    return prev
                }, {replace: true})}>
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
                            (positionType == Positions.services[0]) ||
                            (positionType == Positions.services[1] && jobType == "S") ||
                            (positionType == Positions.services[2] && jobType == "G") ||
                            (positionType == Positions.services[3] && jobType == "I")
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