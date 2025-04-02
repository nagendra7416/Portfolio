import Navbar from "../components/Navbar";

export default function Education(){
    return (
        <>
            <Navbar />
            
            <header className="header">
                <div className="education-header">
                    <div className="inner">
                        <div className="head">
                            <h2>My Education</h2>
                            <label>Steps towards the career</label>
                        </div>

                        <div className="eduCon">
                            <div className="eduInner">
                                <div className="education">.</div>
                                <div className="education">.</div>
                                <div className="education">.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}