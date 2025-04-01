import { NavLink } from "react-router-dom";

export default function Navbar(){

    const menuFunc = () => {
        var menuBtn = document.querySelector('.menu');
        menuBtn.classList.toggle('active');
    }
    
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
        </>
    )
}