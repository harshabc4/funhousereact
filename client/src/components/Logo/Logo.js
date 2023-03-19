import React from "react";
import "./Logo.css";
import LogoImage from '../../assets/logo.jpg'

export default function Logo() {
  return (
    <div className="d-flex">
      <img src={LogoImage}></img>
    </div>
  );
}
