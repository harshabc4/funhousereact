import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navmenu from "./components/Navmenu/Navmenu";
import Footer from "./components/Footer/Footer";
import ProjectTiles from "./components/ProjectTiles/ProjectTiles";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

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
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
