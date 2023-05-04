import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import "./Feed.css";



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
                <video
                    // width='100%'
                    // height='auto'
                    className='feed-item'
                    src={media_url}
                    type="video/mp4"
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":

            carouselItems = children.data;
            // console.log("these are children");
            // console.log(children);
            console.log(carouselItems);
            // carouselItems = children;
            // carouselItems.map((item) => (
            //     <Carousel.Item>
            //         <img
            //             src={item.media_url}
            //             alt={item.caption}></img>
            //     </Carousel.Item>
            // ))
            post = (
                <>

                    {/* {carouselItems.map((item) => (
                        <Carousel.Item>
                            <img
                                src={item.media_url}
                                alt={item.caption}></img>
                        </Carousel.Item>
                    ))} */}

                    <img
                        // width='100%'
                        // height='auto'
                        className='feed-item'
                        id={id}
                        src={media_url}
                        alt={caption}
                        onClick={handleShow}
                    />
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Lightbox Title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* <img
                                src={media_url}
                                alt={caption}
                                className='modal-image'
                                onClick={handleClose}
                            /> */}
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {carouselItems.map((item) => (
                                    <Carousel.Item>
                                        <img
                                            src={item.media_url}
                                            alt={item.caption}></img>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            {/* 
                            <React.Fragment>
                                {carouselItems}
                            </React.Fragment> */}
                            {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img src="https://example.com/image1.jpg" alt="lightbox image 1" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="https://example.com/image2.jpg" alt="lightbox image 2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="https://example.com/image3.jpg" alt="lightbox image 3" />
                                </Carousel.Item>
                            </Carousel> */}
                        </Modal.Body>
                        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
                    </Modal>


                </>
            );
            break;
        default:
            post = (
                <>
                    <img
                        // width='100%'
                        // height='auto'
                        // height='20%'
                        id={id}
                        // id="feed-item"
                        className='feed-item'
                        src={media_url}
                        alt={caption}
                        onClick={handleShow}
                    />

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Lightbox Title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                src={media_url}
                                alt={caption}
                                className='modal-image'
                                onClick={handleClose}
                            />
                        </Modal.Body>
                        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
                    </Modal>
                </>

            );

    }

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;