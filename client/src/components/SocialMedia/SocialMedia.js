import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Feed from '../Feed/Feed';
import "./SocialMedia.css";
import { Modal, Carousel } from 'react-bootstrap';

const SocialMedia = ({ token, ...props }) => {
   const [feeds, setFeedsData] = useState([])
   //use useRef to store the latest value of the prop without firing the effect
   // const tokenProp = useRef(token);
   // tokenProp.current = token;

   const [index, setIndex] = useState(0);
   const LoadingFallback = () => <div>Loading...</div>;


   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios
               // .get("/showMaterials")
               .get("/getPosts")
               // .then((res) => setFeedsData(res))
               .then((res) => {
                  console.log(res.data);
                  console.log("this is materials from appjs frontend socialmedia");
                  // return res.data;
                  setFeedsData(res.data);
               });

         } catch (err) {
            console.error(err);
         }
      };
      fetchData();
   }, []);

   return (
      // <div className="container">
      // <div className="studio-pics-container">
      <div className="social-media-pics-container mt-3 row">
         <div className="carousel-wrapper row">
            {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
            {feeds.map((feed) => (
               // <Carousel.Item className='carousel-item'>
               <Feed key={feed.id} feed={feed} />
               // </Carousel.Item>

            ))}
            {/* </Carousel> */}
         </div>
      </div>
   );
}

export default SocialMedia;