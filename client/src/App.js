import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProjectTiles from "./components/ProjectTiles/ProjectTiles";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

function App() {
  useEffect(() => {
    document.title = "Finish Line";
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
