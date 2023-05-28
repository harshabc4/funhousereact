import React from "react";
import "./Studio.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";
import StudioData from "../../assets/StudioData";


export default function Studio() {
    return (
        <div className="creatives">
            <div className="creatives-without-footer">
                <Navmenu />
                <div className="studio-data-wrapper text-center row">
                    <h1 className="h1">Studio</h1>
                    {Object.entries(StudioData).map(([category, items]) => (
                        <div key={category} className="col-lg-3 studio-category m-2">
                            <h2 className="h2 my-2">{category}</h2>
                            {items.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
                {/* <h1 className="h1 text-center creatives-header">Studio</h1>
                <div className="d-flex text-align-center creatives-content row">
                    <div className="text-center col-lg-6">
                        <h2 className="h2 text-center">Drums</h2>
                        <div className="creatives-data-container m-4">
                            {StudioData.Drums.sort((a, b) => a.order - b.order).map((drums, index) => (
                                <div key={index} className="creative-wrapper m-4">
                                    {drums}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center col-lg-6">
                        <h2 className="h2 text-center">Cymbals</h2>
                        <div className="creatives-data-container m-4">
                            {StudioData.Cymbals.sort((a, b) => a.order - b.order).map((cymbals, index) => (
                                <div key={index} className="creative-wrapper m-4">
                                    {cymbals}
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    );
}
