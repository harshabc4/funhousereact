import React, { lazy, Suspense } from "react";
import "./Hero.css";
import { useEffect, useState } from "react";
import HeroImages from "../../assets/HeroImages/HeroImages";
import HeroImage from "../../components/HeroImage/HeroImage";
import { Modal, Carousel } from 'react-bootstrap';
// import React, { lazy } from 'react';

export default function Hero(props) {
    const [index, setIndex] = useState(0);
    const LoadingFallback = () => <div>Loading...</div>;

    const HeroImage = lazy(() => import('../../components/HeroImage/HeroImage'));

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="hero-main-wrapper">
            <div className="hero-wrapper">
                <h1 className="slogan text-center h1 p-4">WELCOME TO THE FUNHOUSE</h1>
                {/* <div>Owned and operated by musicians and creatives, The Funhouse is a private recording studio and rehearsal space in Richmond, Virginia.  Our hybrid analog and digital recording system allows us to push the boundaries of a classic studio - and amplify the artists.</div> */}
            </div>
            <div className="studio-pics-wrapper row">
                {/* {HeroImages.sort((a, b) => a.order - b.order).map((image, index) => (
                    <img key={index} className="studio-pics m-4" src={image.src} alt={image.alt} />
                ))} */}
                {/* {HeroImages.sort((a, b) => a.order - b.order).map((imageData, index) => ( */}
                <div className="carousel-wrapper">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {HeroImages.map((item) => (
                            // <div className="my-carousel">
                            <Carousel.Item className="carousel-item">
                                <div className="carousel-image-wrapper">
                                    <img className="carousel-image"
                                        src={item.small}></img>
                                </div>
                            </Carousel.Item>
                            // </div>
                        ))}
                    </Carousel>


                </div>
                {/* ))} */}
                {/* {HeroImages.sort((a, b) => a.order - b.order).map((imageData, index) => (
                    <HeroImage key={index} src={imageData.src} alt={imageData.alt} style={{ display: index === currentIndex ? "block" : "none" }}
                        onLoad={handleLoad} />
                ))} */}
            </div>
            {props.onFinish && props.onFinish()}
        </div>
    );
}
