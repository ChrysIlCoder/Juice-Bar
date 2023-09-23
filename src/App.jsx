import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import NavBar from './modules/navbar.jsx'
import TrovaBar from './pages/TrovaBar.jsx'
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Footer from './modules/footer.jsx'
import Contattaci from "./pages/Contattaci.jsx";
import Lavoro from "./pages/Lavoro.jsx";
import { Routes, Route } from 'react-router-dom'

export default function App(){
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/trova' element={<TrovaBar />}/>
                <Route path='/chisiamo' element={<ChiSiamo />}/>
                <Route path='/contattaci' element={<Contattaci />}/>
                <Route path='/lavoro' element={<Lavoro />}/>
            </Routes>
            <Footer />
        </>
    )
}