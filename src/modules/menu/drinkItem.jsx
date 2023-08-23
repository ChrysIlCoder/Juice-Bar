import './menu.css'

export default function DrinkItem({ name, image, description, price, reverse }) {
    return (
        <div className='drink' style={{ flexDirection: reverse ? 'row-reverse' : 'row'}}>
            <img src={image} alt={name} className='drink-image' />
            <div className='drink-info' style={{ textAlign: reverse ? 'right' : 'left', alignItems: reverse ? 'right' : 'left'}}>
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