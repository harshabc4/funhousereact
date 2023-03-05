import React from "react";
import "./Booking.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Booking() {
    return (
        <div className="booking">
            <Navbar />
            <div>Book stuff nerd</div>
            <button className="btn btn-success">Book it chump</button>
            <Footer />
        </div>
    );
}
