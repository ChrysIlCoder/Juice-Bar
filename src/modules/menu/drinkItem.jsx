import './menu.css'

export default function DrinkItem({ name, image, description, price }) {
    return (
        <div className='drink'>
            <img src={image} alt={name} className='drink-image' />
            <div className='drink-info'>
                <span className='drink-header'>{name}</span>
                <p className='drink-desc'>
                    {description}
                </p>
                <span className='drink-header'>Costo</span>
                <span className='drink-price'>{price}</span>
            </div>
        </div>
    )
}