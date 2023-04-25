import React from "react";
import "./Home.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo"
import Youtube from "../../components/Youtube/Youtube";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

export default function Home() {
    return (
        <div className="home">
            <div className="page-wrapper">
                <Navmenu />
                <Logo />
                <Youtube />
                <div>and here is a test</div>
                <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                <small>You are trying to get {process.env.REACT_APP_INS_TOKEN}</small>
                <SocialMedia token={process.env.REACT_APP_INS_TOKEN} limit={12} />
            </div>
            <Footer />
        </div>
    );
}
