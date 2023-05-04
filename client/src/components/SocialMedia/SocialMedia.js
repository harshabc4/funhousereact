import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Feed from '../Feed/Feed';

const SocialMedia = ({ token, ...props }) => {
   const [feeds, setFeedsData] = useState([])
   //use useRef to store the latest value of the prop without firing the effect
   const tokenProp = useRef(token);
   tokenProp.current = token;

   // useEffect(() => {
   //    // this is to avoid memory leaks
   //    const abortController = new AbortController();

   //    async function fetchInstagramPost() {
   //       console.log("fetching")
   //       console.log(token)
   //       console.log(props.token)
   //       try {
   //          axios
   //             .get(`https://graph.instagram.com/v16.0/17841400385468108/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`)
   //             .then((resp) => {
   //                console.log("this is feeds data")
   //                console.log(resp)
   //                // console.log(resp.data.media.data)
   //                setFeedsData(resp.data.data)
   //                // setFeedsData(resp.data.media.data)
   //             })

   //       } catch (err) {
   //          console.log('error', err)
   //       }
   //    }

   //    // manually call the fecth function 
   //    fetchInstagramPost();

   //    return () => {
   //       // cancel pending fetch request on component unmount
   //       abortController.abort();
   //    };
   // }, [props.limit])

   // useEffect(() => {
   //    const fetchData = async () => {
   //       try {
   //          const response = await axios
   //             .get("/getPosts")


   //             .then((resp) => {
   //                console.log("this is feeds UI data")
   //                console.log(resp)
   //                // console.log(resp.data.media.data)
   //                // setFeedsData(resp.data.data)
   //                // setFeedsData(resp)
   //                // setFeedsData(resp.data.media.data)
   //                return resp;
   //             })


   //          // .then((res) => {
   //          //    console.log(res.data);
   //          //    return res.data;
   //          // })
   //          // .then((res) => setItems(res));
   //          // .then((res) => setFeedsData(res));
   //          // setItems(await response);
   //       } catch (err) {
   //          console.error(err);
   //       }
   //    };
   //    fetchData();
   // }, []);

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
      <div className="container">
         {feeds.map((feed) => (
            <Feed key={feed.id} feed={feed} />
         ))}
      </div>
   );
}

export default SocialMedia;