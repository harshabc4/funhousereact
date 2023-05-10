import React from "react";
import "./Hero.css";
import LogoImage from '../../assets/logo.jpg'
import pic1 from "../../assets/1.JPG";
import pic2 from "../../assets/2.JPG";
import pic3 from "../../assets/3.JPG";
import pic4 from "../../assets/4.JPG";
import pic6 from "../../assets/6.jpg";
import pic7 from "../../assets/7.jpg";
import pic8 from "../../assets/8.jpg";
import pic10 from "../../assets/10.jpg";
import pic11 from "../../assets/11.jpg";
import { useEffect } from "react";

export default function Hero(props) {

    useEffect(() => {
        props.onFinish();
    }, [props.onFinish]);


    return (
        <div className="hero-main-wrapper">
            <div className="hero-wrapper">
                <h1 className="text-center">Home to Richmond's Creatives</h1>
                <div>Owned and operated by musicians and creatives, The Funhouse is a private recording studio and rehearsal space in Richmond, Virginia.  Our hybrid analog and digital recording system allows us to push the boundaries of a classic studio - and amplify the artists.</div>
            </div>
            {/* <div className="studio-pics-wrapper row"> */}
            <div className="studio-pics-wrapper row">
                {/* <div> */}
                {/* <div className="studio-pics-individual-wrapper"> */}
                <img className="studio-pics m-4" src={pic4}
                    alt="asdf" ></img>
                {/* </div>
                <div> */}
                <img className="studio-pics m-4" src={pic2}
                    alt="asdf" ></img>
                {/* </div> */}
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

                {/* </div> */}
            </div>
        </div>
    );
}
