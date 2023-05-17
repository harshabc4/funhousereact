import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Feed from '../Feed/Feed';
import "./SocialMedia.css";

const SocialMedia = ({ token, ...props }) => {
   const [feeds, setFeedsData] = useState([])
   //use useRef to store the latest value of the prop without firing the effect
   // const tokenProp = useRef(token);
   // tokenProp.current = token;

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
      <div className="social-media-pics-container row">
         {feeds.map((feed) => (
            <Feed key={feed.id} feed={feed} />
         ))}
      </div>
   );
}

export default SocialMedia;