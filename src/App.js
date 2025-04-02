import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Loader from './components/Loader';

export default function App(){

    window.onload = function(){
        document.querySelector('.loader').style.display = 'none';
    }
    return (
        <>
            <Loader />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
            </Routes>
        </>
    )
}