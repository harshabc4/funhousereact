import React from "react";
import "./Faq.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";


export default function Faq() {
    return (
        <div className="creatives faq-container">
            <div className="creatives-without-footer text-center faq">
                <Navmenu />
                <h1>FAQ</h1>
                <div>
                    <h2>What is included in the space rental?</h2>
                    <ul>
                        <li>Private Studio and Bathroom</li>
                        <li>Refrigerator and Microwave</li>
                        <li>Drum Shells and Hardware</li>
                        <li>Mixer and Speakers</li>
                        <li>Microphones w/ Stands and Cables</li>
                    </ul>
                </div>
                <div>
                    <h2>How can I pay for my session?</h2>
                    <p>Square, Venmo, or cash - @thefunhouserichmond</p>
                </div>
                <div>
                    <h2>What are your hours and how long is a session?</h2>
                    <p>We offer two 4-hour sessions a day, 7 days a week: 12-4 and 5-9</p>
                </div>
                <div>
                    <h2>What's the parking situation?</h2>
                    <p>Pull through the gate and park out back</p>
                </div>
                <div>
                    <h2>What’s the cancellation policy?</h2>
                    <p>48-hour cancellation notice is no charge, 50% for day-of cancellations, and full price for no show.</p>
                </div>
                <div>
                    <h2>Is gear available to rent during my session?</h2>
                    <p>We have tons of gear in the space, contact us before your session for rates and availability.</p>
                </div>
                <div>
                    <h2>I have a show coming up, can I promote it there?</h2>
                    <p>Absolutely, we encourage it!</p>
                </div>
                <div>
                    <h2>Can we smoke or vape while we practice?</h2>
                    <p>No smoking or vaping inside the studio.</p>
                </div><div>
                    <h2>Are food and drinks allowed in the space?</h2>
                    <p>Of course, just not on any gear!</p>
                </div>
                <div>
                    <h2>Is there Wi-Fi?</h2>
                    <p>Yes, we have the username and password written down in the space.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
