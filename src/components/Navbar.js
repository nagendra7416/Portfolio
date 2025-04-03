import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar(){
    const location = useLocation();

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

    const element = document.querySelector('.menuCon');
    const mediaQuery = window.matchMedia("(min-width: 800px)");

    function handleMediaChange(e) {
        if(element){
            if (e.matches) {
                element.classList.remove("active");
            }
        }
      }
      mediaQuery.addEventListener("change", handleMediaChange);
      handleMediaChange(mediaQuery);


      const isHomePage = location.pathname === `/`;
      const isEducationPage = location.pathname === `/education`;
      const isExperiencePage = location.pathname === `/experience`;
      const isProjectPage = location.pathname === `/projects`;
      const isAboutPage = location.pathname === `/about`;
    
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
                                <li className={isEducationPage ? 'active':''}>
                                    <NavLink to='/education'>Education</NavLink>
                                </li>
                                <li className={isExperiencePage ? 'active':''}>
                                    <NavLink to='/experience'>Experience</NavLink>
                                </li>
                                <li className={isProjectPage ? 'active':''}>
                                    <NavLink to='/projects'>Projects</NavLink>
                                </li>
                                <li className={isAboutPage ? 'active':''}>
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
                        <li className={isEducationPage ? 'active':''}>
                            <NavLink to='/education'>Education</NavLink>
                        </li>
                        <li className={isExperiencePage ? 'active':''}>
                            <NavLink to='/experience'>Experience</NavLink>
                        </li>
                        <li className={isProjectPage ? 'active':''}>
                            <NavLink to='/projects'>Projects</NavLink>
                        </li>
                        <li className={isAboutPage ? 'active':''}>
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