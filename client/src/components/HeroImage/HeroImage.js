import { React, useState } from "react";
// import React, { lazy } from 'react';

export default function HeroImage(props) {
    const { key, src, alt } = props;
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };
    return (
        // <img key={key} className="studio-pics m-4" src={src} alt={alt} onLoad={handleLoad} style={{ display: isLoaded ? "block" : "none" }} />
        <img key={key} className="studio-pics m-4" src={src} alt={alt} onLoad={handleLoad} style={{ visibility: isLoaded ? "visible" : "hidden" }} />
        // <img key={key} className="studio-pics m-4" src={src} alt={alt} />
    );
}
