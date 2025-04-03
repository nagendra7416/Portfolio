import LoadingBar from "react-top-loading-bar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Projects(){
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
                            <h2>My Projects</h2>
                            <label>Innovative Solutions, Crafted with Code</label>
                        </div>

                        <div className="eduCon">
                            <div className="eduInner">
                                so
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}