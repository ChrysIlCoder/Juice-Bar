import './menu.css'

export default function DrinksMenu(){
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <span className='menu-text-header'>I Nostri Drink</span>
            </div>
            <div className='drinks-container'>
            <div className='drink-menu-item'>
                <div className='drink-info'>
                    <img src="https://shorturl.at/lyJW3" alt="Mojrito" className='drink-image'/>
                    <ul className='drink-ingredients'>
                        <li>Zucchero di canna bianco</li>
                        <li>Rum bianco</li>
                        <li>Succo di lime fresco</li>
                        <li>Soda</li>
                        <li>Ghiaccio</li>
                        <li>Menta fresca</li>
                    </ul>
                </div>
                <div className='drink-text'>
                    <span className='drink-header'>Mojrito</span>
                    <p className='drink-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget volutpat dolor. Proin porta tellus a magna placerat mattis. Vivamus vel faucibus quam. Ut mauris nulla, accumsan eu viverra vitae, euismod non eros. Integer in arcu sit amet neque imperdiet luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer nulla tortor, mollis a quam ac, rutrum euismod ex. Sed placerat rhoncus dui, in dignissim ipsum porta in. In sed dapibus erat. Maecenas ut elit vel metus facilisis aliquet non in quam. Ut vestibulum felis erat. Donec nec convallis ipsum. Morbi euismod ipsum quis est finibus venenatis.
                    </p>
                    <span className='drink-header'>Costo</span>
                    <span className='drink-price'>2,50€</span>
                </div>
            </div>
            </div>
        </div>
    )
}