import React from "react";
import "./Home.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo"
import Youtube from "../../components/Youtube/Youtube";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Hero from "../../components/Hero/Hero";
import { Parallax, ParallaxLayer } from 'react-parallax';
import { useState } from "react";

export default function Home() {

    const [isFirstComponentFinished, setIsFirstComponentFinished] = useState(false);

    const handleFirstComponentFinish = () => {
        setIsFirstComponentFinished(true);
    };


    return (
        <div className="home">
            <div className="page-wrapper">
                <Navmenu />
                <Logo />
                <Parallax
                    className="first-parallax"
                    blur={{ min: -15, max: 12 }}
                    bgImage={require('../../assets/studiopic.jpg')}
                    bgImageSrcSet={`${require('../../assets/studiopicHalfSize2.jpg')} 1537w, ${require('../../assets/studiopicHalfSize1.jpg')} 3073w`}
                    // bgImageSrcSet={`${require('../../assets/1.JPG')} 2048w, ${require('../../assets/studiopicHalfSize1.jpg')} 3073w`}
                    // bgImageSrcSet="../../assets/studiopicHalfSize1.jpg, ../../assets/studiopicHalfSize1.jpg"
                    bgImageSize="(max-width: 600px) 1573px, 3073px"
                    // bgImageSize="(max-width: 1200px) 2048px, 3073px"
                    bgImageAlt="music studio with guitars"
                    bgImageStyle={{ height: '80%', maxWidth: '80%', opacity: '1' }}
                    strength={800}
                >
                    <Hero onFinish={handleFirstComponentFinish} />
                </Parallax>
                <Parallax
                    className="second-parallax"
                    blur={{ min: -15, max: 15 }}
                    bgImageSrcSet={`${require('../../assets/studiopic2HalfSize2.jpg')} 1537w, ${require('../../assets/studiopic2HalfSize1.jpg')} 3073w`}
                    bgImage={require('../../assets/studiopic2.jpg')}
                    bgImageSize="(max-width: 600px) 1573px, 3073px"
                    bgImageAlt="the dog"
                    bgImageStyle={{ height: '80%', maxWidth: '80%', opacity: '1' }}
                    strength={800}
                >
                    <div className="info-wrapper d-flex">
                        <div className="info text-center">Owned and operated by musicians and creatives, The Funhouse is a private recording studio and rehearsal space in Richmond, Virginia.  Our hybrid analog and digital recording system allows us to push the boundaries of a classic studio - and amplify the artists.</div>
                    </div>
                    {/* <div>and here is a test</div>
                    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small> */}
                    {isFirstComponentFinished && <SocialMedia />}
                </Parallax>
            </div>
            <Footer />
        </div >
    );
}
