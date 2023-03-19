import React from "react";
import "./Booking.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";

export default function Booking() {
    return (
        <div className="booking">
            <Navmenu />
            <div>Book stuff nerd</div>
            <button className="btn btn-success">Book it chump</button>
            <Footer />
        </div>
    );
}
