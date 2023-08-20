import '../App.css'
import ImageBackground from '../modules/home/imageBackground'
import HomeObjective from '../modules/home/homeObjective'
import HomeIngredients from '../modules/home/homeIngredients'
import HomeMenu from '../modules/home/homeMenu'

export default function Home(){
  return (
    <>
     <ImageBackground />
     <HomeObjective />
     <HomeIngredients />
     <HomeMenu />
    </>
  )
}
