import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navmenu from "./components/Navmenu/Navmenu";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Creatives from "./pages/Creatives/Creatives";
// import { Parallax, ParallaxLayer } from 'react-parallax';

function App() {
  useEffect(() => {
    document.title = "The Funhouse";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("/showMaterials")

          .then((res) => {
            console.log(res.data);
            console.log("this is materials from appjs frontend");
            return res.data;
          });
        // setItems(await response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    // <Parallax
    //   blur={{ min: -15, max: 15 }}
    //   bgImage={require('./assets/studiopic.jpg')}
    //   bgImageAlt="the dog"
    //   strength={800}
    // >
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route path="/creatives" element={<Creatives />} />
      </Routes>
    </div>
    // </Parallax>

  );
}

export default App;
