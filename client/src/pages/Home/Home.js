import React from "react";
import "./Home.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo"
import Youtube from "../../components/Youtube/Youtube";

export default function Home() {
    return (
        <div className="home">
            <Navmenu />
            <Logo />
            <Youtube />
            <Footer />
        </div>
    );
}
