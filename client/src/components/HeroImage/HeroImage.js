import { React, useState } from "react";
import "./HeroImage.css";
// import React, { lazy } from 'react';
import { Modal, Carousel } from 'react-bootstrap';

export default function HeroImage(props) {
    const { key, src, alt, small, medium, large } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLoad = () => {
        setIsLoaded(true);
    };
    return (
        <div className="col-md-4 col-6 studio-pics">
            {/* <img key={key} className="" src={src} alt={alt} onLoad={handleLoad} style={{ visibility: isLoaded ? "visible" : "hidden" }} onClick={handleShow} /> */}
            <img key={key} className="" src={isLoaded ? small : src} srcSet={`${medium} 1573w, ${large} 3073w`} alt={alt} onLoad={handleLoad} onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Lightbox Title</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    {/* <img
                src={media_url}
                alt={caption}
                className='modal-image'
                onClick={handleClose}
            /> */}
                    {/* <img key={key} className="col-md-4 col-6 studio-pics" src={src} alt={alt} onLoad={handleLoad} style={{ visibility: isLoaded ? "visible" : "hidden" }} /> */}
                    {/* <img key={key} className="modal-image" src={src} alt={alt} onLoad={handleLoad} style={{ visibility: isLoaded ? "visible" : "hidden" }} onClick={handleClose} /> */}
                    <img key={key} className="modal-image" src={src} alt={alt} onLoad={handleLoad} style={{ visibility: isLoaded ? "visible" : "hidden" }} onClick={handleClose} />

                </Modal.Body>
                {/* <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
</Modal.Footer> */}
            </Modal>

            {/* <img key={key} className="col-md-4 col-6 studio-pics" src={src} alt={alt} onLoad={handleLoad} style={{ visibility: isLoaded ? "visible" : "hidden" }} /> */}
        </div>
    );
}
