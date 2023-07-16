import React from "react";
import "./Creatives.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";
import CreativesData from "../../assets/CreativesData";
import RehearsalData from "../../assets/RehearsalData";


export default function Creatives() {
    return (
        <div className="creatives">
            <div className="creatives-without-footer">
                <Navmenu />
                <h1 className="h1 text-center creatives-header">Rehearsal Suite</h1>
                <div className="info text-center mx-auto creatives-info"><div className="mb-3">Book a session for the Rehearsal Suite and get a four hour slot in our private recording studio. Looking to join The Funhouse? Upgrade to a membership to lock in weekly sessions at a discounted rate.
                </div><div>
                        The Studio will be equipped with a PA, Microphones and stands, Bass Amp, and Drum Shells (BYOBreakables) for you to use. We also have rental gear (guitars/amps) accessible - reach out before your session for rates and availability.</div></div>
                <div className="d-flex text-align-center creatives-content row">
                    {/* <div className="w-50 text-center"> */}
                    <div className="text-center col-lg-6 creatives-item-container">
                        <h2 className="h2 text-center creatives-item">Recording Studio</h2>
                        <div className="creatives-data-container m-4">
                            {CreativesData.sort((a, b) => a.order - b.order).map((creativeData, index) => (
                                <div key={index} className="creative-wrapper m-4">
                                    <div className="creative-name">
                                        <a href={creativeData.url}>{creativeData.name}</a>
                                    </div>
                                    {/* <div><a className="creative-url" href={creativeData.url}>
                                        {creativeData.url}
                                    </a></div> */}
                                    {/* <a className="creative-url" href={creativeData.url}>
                                        {creativeData.url}
                                    </a> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="w-50 text-center"> */}
                    <div className="text-center col-lg-6 creatives-item-container">
                        <h2 className="h2 text-center creatives-item">Rehearsal Suite</h2>
                        <div className="creatives-data-container m-4">
                            {RehearsalData.sort((a, b) => a.order - b.order).map((rehearsalData, index) => (
                                <div key={index} className="creative-wrapper m-4">
                                    <div className="creative-name">
                                        {rehearsalData.name}
                                    </div>
                                    {/* <div>
                                        <br></br>
                                    </div> */}
                                    {/* <a className="creative-url" href={creativeData.url}>
                                        {creativeData.url}
                                    </a> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
