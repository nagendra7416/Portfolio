import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Loader from './components/Loader';
import Education from './pages/Education';
import { Analytics } from '@vercel/analytics/react';
import Experience from './pages/Experience';
import Projects from './pages/Projects';


export default function App(){

    window.onload = function(){
        if(document.querySelector('.loader')){
            document.querySelector('.loader').classList.add('active');
        }
    }
    return (
        <>
            <Loader />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/experience' element={<Experience />}></Route>
                <Route exact path='/education' element={<Education />}></Route>
                <Route exact path='/projects' element={<Projects />}></Route>
                <Route exact path='/about' element={<About />}></Route>
            </Routes>
        </>
    )
}