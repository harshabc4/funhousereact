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
                <h1 className="h1 text-center creatives-header">Creatives</h1>
                <div className="d-flex text-align-center creatives-content row">
                    {/* <div className="w-50 text-center"> */}
                    <div className="text-center col-lg-6">
                        <h2 className="h2 text-center">Recording Studio</h2>
                        <div className="creatives-data-container m-4">
                            {CreativesData.sort((a, b) => a.order - b.order).map((creativeData, index) => (
                                <div key={index} className="creative-wrapper m-4">
                                    <div className="creative-name">
                                        {creativeData.name}
                                    </div>
                                    <div><a className="creative-url" href={creativeData.url}>
                                        {creativeData.url}
                                    </a></div>
                                    {/* <a className="creative-url" href={creativeData.url}>
                                        {creativeData.url}
                                    </a> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="w-50 text-center"> */}
                    <div className="text-center col-lg-6">
                        <h2 className="h2 text-center">Rehearsal Suite</h2>
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
