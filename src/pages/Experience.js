import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LoadingBar from "react-top-loading-bar";

export default function Experience(){
    const [isloading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(false);
    })

    return (
        <>
            <LoadingBar color="#f00" height={1.5} progress={isloading ? 90:100} />
            <Navbar />
            
            <header className="header">
                <div className="education-header">
                    <div className="inner">
                        <div className="head">
                            <h2>My Experience</h2>
                            <label>Professional Work Experience</label>
                        </div>

                        {/* <div className="eduCon">
                            <div className="eduInner">
                                <div className="education">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="M480-166.16 220-307.39v-216.92L81.54-600 480-816.92 878.46-600v287.69h-60v-254.46L740-524.31v216.92L480-166.16ZM480-452l273.62-148L480-748 206.38-600 480-452Zm0 217.54 200-108v-149.85L480-383.15 280-492.31v149.85l200 108ZM480-452Zm0 72.31Zm0 0Z"/></svg>
                                    </div>
                                    <div className="branch">Bachelor of Technology in Electronics & Communcation</div>
                                    <div className="college">TKR College of Engineering and Technology</div>
                                    <div className="year">2017 - 2021</div>
                                </div>
                                <div className="education">
                                <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="M480-166.16 220-307.39v-216.92L81.54-600 480-816.92 878.46-600v287.69h-60v-254.46L740-524.31v216.92L480-166.16ZM480-452l273.62-148L480-748 206.38-600 480-452Zm0 217.54 200-108v-149.85L480-383.15 280-492.31v149.85l200 108ZM480-452Zm0 72.31Zm0 0Z"/></svg>
                                    </div>
                                    <div className="branch">Higher Secondary Education</div>
                                    <div className="college">Resonance Junior College</div>
                                    <div className="year">2015 - 2017</div>
                                </div>
                                <div className="education">
                                <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="M480-166.16 220-307.39v-216.92L81.54-600 480-816.92 878.46-600v287.69h-60v-254.46L740-524.31v216.92L480-166.16ZM480-452l273.62-148L480-748 206.38-600 480-452Zm0 217.54 200-108v-149.85L480-383.15 280-492.31v149.85l200 108ZM480-452Zm0 72.31Zm0 0Z"/></svg>
                                    </div>
                                    <div className="branch">Secondary Education</div>
                                    <div className="college">Ravindra Bharathi School</div>
                                    <div className="year">2014-2015</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    )
}