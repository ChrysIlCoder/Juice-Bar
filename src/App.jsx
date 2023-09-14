import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import NavBar from './modules/navbar.jsx'
import TrovaBar from './pages/TrovaBar.jsx'
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Footer from './modules/footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Contattaci from "./pages/Contattaci.jsx";

export default function App(){
    return (
        <>
            <NavBar />
            <section>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/menu' element={<Menu />}/>
                    <Route path='/trova' element={<TrovaBar />}/>
                    <Route path='/chisiamo' element={<ChiSiamo />}/>
                    <Route path='/contattaci' element={<Contattaci />}/>
                </Routes>
            </section>
            <Footer />
        </>
    )
}