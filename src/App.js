import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Loader from './components/Loader';
import Education from './pages/Education';
import { Analytics } from '@vercel/analytics/react';


export default function App(){

    window.onload = function(){
        document.querySelector('.loader').classList.add('active');
    }
    return (
        <>
            <Loader />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/education' element={<Education />}></Route>
                <Route exact path='/about' element={<About />}></Route>
            </Routes>
        </>
    )
}