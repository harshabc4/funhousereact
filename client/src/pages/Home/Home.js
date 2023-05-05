import React from "react";
import "./Home.css";
import Navmenu from "../../components/Navmenu/Navmenu";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo"
import Youtube from "../../components/Youtube/Youtube";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Hero from "../../components/Hero/Hero";
// import pic1 from "../../assets/1.JPG";
// import pic2 from "../../assets/2.JPG";
// import pic3 from "../../assets/3.JPG";
// import pic4 from "../../assets/4.JPG";
// import pic6 from "../../assets/6.jpg";
// import pic7 from "../../assets/7.jpg";
// import pic8 from "../../assets/8.jpg";
// import pic10 from "../../assets/10.jpg";
// import pic11 from "../../assets/11.jpg";
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
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../../assets/studiopic.jpg')}
                    bgImageAlt="the dog"
                    bgImageStyle={{ height: '50%', maxWidth: '50%', opacity: '1' }}
                    strength={800}
                >
                    {/* <div className="hero-wrapper">
                        <h1 className="text-center">Home to Richmond's Creatives</h1>
                        <div>Owned and operated by musicians and creatives, The Funhouse is a private recording studio and rehearsal space in Richmond, Virginia.  Our hybrid analog and digital recording system allows us to push the boundaries of a classic studio - and amplify the artists.</div>
                    </div>
                    <div className="studio-pics-wrapper">

                        <img className="studio-pics m-4" src={pic4}
                            alt="asdf" ></img>
                        <img className="studio-pics m-4" src={pic2}
                            alt="asdf" ></img>
                        <img className="studio-pics m-4" src={pic3}
                            alt="asdf" ></img>

                        <img className="studio-pics m-4" src={pic10}
                            alt="asdf" ></img>
                        <img className="studio-pics m-4" src={pic6}
                            alt="asdf" ></img>
                        <img className="studio-pics m-4" src={pic1}
                            alt="asdf" ></img>
                        <img className="studio-pics m-4" src={pic7}
                            alt="asdf" ></img>




                        <img className="studio-pics m-4" src={pic11}
                            alt="asdf" ></img>

                        <img className="studio-pics m-4" src={pic8}
                            alt="asdf" ></img>

                    </div> */}
                    {/* <Hero /> */}
                    {<Hero onFinish={handleFirstComponentFinish} />}
                </Parallax>
                {/* <Youtube /> */}
                <Parallax
                    className="second-parallax"
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../../assets/studiopic2.jpg')}
                    bgImageAlt="the dog"
                    strength={800}
                >
                    <div>and here is a test</div>
                    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                    {/* <SocialMedia /> */}
                    {isFirstComponentFinished && <SocialMedia />}
                </Parallax>
            </div>
            <Footer />
        </div >
    );
}
