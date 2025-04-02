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

    useEffect(() => {

    }, [])
    
    return (
        <>
            <nav class="nav">
                <div class="inner">
                    <div class="left">
                        <div class="logo">
                            <h2>
                                <NavLink to='/'>Nagendra Babu</NavLink>
                            </h2>
                        </div>
                    </div>
                    <div class="right">
                        <div class="links">
                            <ul>
                                <li>
                                    <NavLink to='/'>Education</NavLink>
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

                            <div class="menu" onClick={menuFunc}>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="menuCon">
                <div class="menuInner">
                    <div class="top">
                        <span onClick={menuConFunc}></span>
                    </div>
                    <ul>
                        <li>
                            <a href="#">Education</a>
                        </li>
                        <li>
                            <a href="#">Experience</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}