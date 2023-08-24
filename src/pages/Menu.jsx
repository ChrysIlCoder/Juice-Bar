import '../modules/menu/menu.css'
import '../App.css'
import DrinksMenu from '../modules/menu/drinksMenu'
import MenuHeader from '../modules/menu/drinkHeader'

export default function Menu(){
    return (
        <>
            <MenuHeader />
            <DrinksMenu />
        </>
    )
}