import './contact.css'

export default function SocialItem({ image, name }){
    return (
        <div className='social-item' style={{ background: `url(${image}) no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className='social-overlay-shadow'>
                <span className='social-name'>{name}</span>
            </div>
        </div>
    )
}