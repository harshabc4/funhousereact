import React from "react";
import "./Studio.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";
import StudioData from "../../assets/StudioData";


export default function Studio() {
    const sortedCategories = Object.entries(StudioData)
        .sort(([, a], [, b]) => a.Order - b.Order);
    return (
        <div className="creatives">
            <div className="creatives-without-footer mb-4">
                <Navmenu />
                <div className="studio-data-wrapper text-center row">
                    <h1 className="h1 creatives-header recording-header">Recording Studio</h1>
                    <div className="row">
                        {sortedCategories.map(([category, items]) => (
                            <div key={category} className="col-lg-3 studio-category">
                                <h2 className="h2 my-2">{category}</h2>
                                <ul className="mb-2">
                                    {items.Items.sort().map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
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
