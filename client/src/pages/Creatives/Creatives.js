import React from "react";
import "./Creatives.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";

export default function Creatives() {
    return (
        <div className="creatives">
            <Navmenu />
            <div>Creatives</div>
            <button className="btn btn-success">Book it chump</button>
            <Footer />
        </div>
    );
}
