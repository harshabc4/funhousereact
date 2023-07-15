import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import "./Feed.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const Feed = (props) => {


    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id, caption, media_type, media_url, children } = props.feed
    let post;
    let carouselItems;

    switch (media_type) {
        case "VIDEO":
            post = (
                // <>
                // <div className="col-md-4">
                <div className="carousel-image-wrapper col-md-12 d-flex">
                    {/* <div className="feed-item-wrapper "> */}
                    <video
                        // width='100%'
                        // height='auto'
                        // className='feed-item'
                        className="carousel-image m-auto"
                        src={media_url}
                        onClick={handleShow}
                        type="video/mp4"
                        controls playsinline
                    // controls
                    >
                        <button className="btn btn-primary">
                            <i className="bi bi-play"></i>
                        </button>
                    </video>
                    {/* <button className="btn btn-primary position-absolute top-50 start-50 translate-middle"> */}


                </div>
            )
            break;
        case "CAROUSEL_ALBUM":

            carouselItems = children.data;
            console.log(carouselItems);
            post = (
                <div className="carousel-image-wrapper col-md-12 d-flex">

                    <img
                        className="carousel-image m-auto"
                        id={id}
                        src={media_url}
                        alt={caption}
                    />
                </div>
            );
            break;
        default:
            post = (
                // <>
                // <div className="col-md-4">
                <div className="carousel-image-wrapper col-md-12 d-flex">

                    <img

                        id={id}

                        className="carousel-image m-auto"
                        src={media_url}
                        alt={caption}
                    />
                </div>

            );

    }

    return (
        <React.Fragment>
            {/* <div> */}
            {post}
            {/* </div> */}
        </React.Fragment>
    );
}

export default Feed;