import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){

    const menuFunc = () => {
        var menuBtn = document.querySelector('.menuCon');
        menuBtn.classList.add('active');
    }

    const menuConFunc = () => {
        const menu = document.querySelector('.menuCon');
        menu.classList.remove('active');
    }

    window.addEventListener('scroll', function(){
        const navbar = this.document.querySelector('.nav');
        if(this.window.scrollY > 40){
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    })

    useEffect(() => {

    }, [])
    
    return (
        <>
            <nav className="nav">
                <div className="inner">
                    <div className="left">
                        <div className="logo">
                            <h2>
                                <NavLink to='/'>Nagendra Babu</NavLink>
                            </h2>
                        </div>
                    </div>
                    <div className="right">
                        <div className="links">
                            <ul>
                                <li>
                                    <NavLink to='/education'>Education</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Experience</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Contact</NavLink>
                                </li>
                            </ul>

                            <div className="menu" onClick={menuFunc}>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="menuCon">
                <div className="menuInner">
                    <div className="top">
                        <span onClick={menuConFunc}></span>
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/education'>Education</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Experience</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}