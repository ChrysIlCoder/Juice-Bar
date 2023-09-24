import './lavoro.css'

export default function JobPositionItem({ title, desc, hours }){
    return (
        <div className='job-position'>
            <h2 className='job-name'>{title}</h2>
            <p className='job-desc'>{desc}</p>
            <span className='job-hours'>{hours}</span>
            <button className='job-apply'>Visona</button>
        </div>
    )
}