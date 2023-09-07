import './chisiamo.css'

export default function Milestone({ desc, date }){
    return (
        <li>
            <span>{date}</span>
            <p>{desc}</p>
        </li>
    )
}