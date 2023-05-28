import React, { lazy, Suspense } from "react";
import "./Hero.css";
import { useEffect, useState } from "react";
import HeroImages from "../../assets/HeroImages/HeroImages";
import HeroImage from "../../components/HeroImage/HeroImage";
import { Modal, Carousel } from 'react-bootstrap';
// import React, { lazy } from 'react';

export default function Hero(props) {
    // const [heroImages, setHeroImagesData] = useState([])

    // useEffect(() => {
    //     props.onFinish();
    // }, [props.onFinish]);
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const handleLoad = () => {
    //     // Update the current index to load the next image
    //     setCurrentIndex((currentIndex) => currentIndex + 1);
    // };
    const LoadingFallback = () => <div>Loading...</div>;

    // const HeroImage = lazy(() => import('../../components/HeroImage/HeroImage'));

    return (
        <div className="hero-main-wrapper">
            <div className="hero-wrapper">
                <h1 className="slogan text-center h1">Home to Richmond's Creatives</h1>
                {/* <div>Owned and operated by musicians and creatives, The Funhouse is a private recording studio and rehearsal space in Richmond, Virginia.  Our hybrid analog and digital recording system allows us to push the boundaries of a classic studio - and amplify the artists.</div> */}
            </div>
            <div className="studio-pics-wrapper row">
                {/* {HeroImages.sort((a, b) => a.order - b.order).map((image, index) => (
                    <img key={index} className="studio-pics m-4" src={image.src} alt={image.alt} />
                ))} */}
                {HeroImages.sort((a, b) => a.order - b.order).map((imageData, index) => (
                    <HeroImage key={index} src={imageData.src} alt={imageData.alt} small={imageData.small} medium={imageData.medium} large={imageData.large} />


                    // <Suspense fallback={<LoadingFallback />}>
                    //     <HeroImage key={index} src={imageData.src} alt={imageData.alt} />
                    // </Suspense>


                ))}
                {/* {HeroImages.sort((a, b) => a.order - b.order).map((imageData, index) => (
                    <HeroImage key={index} src={imageData.src} alt={imageData.alt} style={{ display: index === currentIndex ? "block" : "none" }}
                        onLoad={handleLoad} />
                ))} */}
            </div>
            {props.onFinish && props.onFinish()}
        </div>
    );
}
