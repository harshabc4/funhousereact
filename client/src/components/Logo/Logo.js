import React from "react";
import "./Logo.css";
import LogoImage from '../../assets/logo.jpg'

export default function Logo() {
  return (
    <div className="d-flex logo-wrapper">
      <img src={LogoImage}
        id="main-logo" className="img-fluid"></img>
    </div>
  );
}
