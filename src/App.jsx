import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import NavBar from './modules/navbar.jsx'
import TrovaBar from './pages/TrovaBar.jsx'
import Footer from './modules/footer.jsx'
import { Routes, Route } from 'react-router-dom'

export default function App(){
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/trova' element={<TrovaBar />}/>
            </Routes>
            <Footer />
        </>
    )
}