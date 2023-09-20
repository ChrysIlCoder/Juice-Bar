import './contact.css'

export default function InfoItem({ icon, title, info }){
    return (
        <div className='info-item'>
            <img src={icon} alt="Contact Info Icon" className='info-icon'/>
            <hr className='info-divider'/>
            <div className='info'>
                <span className='info-title'>{title}</span>
                <span className='info-info'>{info}</span>
            </div>
        </div>
    )
}