import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";

export default function Home(){
    const [isloading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(false);
    })

    return (
        <>
            <LoadingBar color="#f00" height={1.5} progress={isloading ? 90:100} />
            <Navbar />

            <header className="header">
                <div className="home-header">
                    <div className="inner">
                        <div className="left">
                            <h2>Nagendra Babu Mekapothula</h2>
                            <h4>Software Engineer & Quality Engineer</h4>
                            <p>📍 Hyderabad, Telangana, India</p>
                            <div className="social-links">
                                <div className="box">
                                    <NavLink target="_blank" to='https://www.linkedin.com/in/nagendra-babu-mekapothula-222152247/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </NavLink>
                                </div>
                                <div className="box">
                                    <NavLink target="_blank" to='https://github.com/nagendra7416'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </NavLink>
                                </div>
                                <div className="box">
                                    <NavLink to='mailto:nagendra.mekapothula@gmail.com'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="hireme">
                                <button>Download Resume</button>
                            </div>
                        </div>
                        <div className="right">
                            <div className="imgbox">
                                <img alt="s" src="https://media.licdn.com/dms/image/v2/D5635AQFh16tZcaLP8w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1692342819095?e=1744135200&v=beta&t=R4W_vl3h5G_LTjTCezlaPLreMSKHxLxITvxeHlrUO90" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}