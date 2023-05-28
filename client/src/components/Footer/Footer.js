import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer w-100">
      <section className="d-flex justify-content-center">
        {/* <a href="mailto:harshabc4@gmail.com" role="button">
          <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
        </a>

        <a href="https://github.com/harshabc4" role="button">
          <FontAwesomeIcon className="fa-icon" icon={faGithub} />
        </a> */}
        <a href="mailto:welcometothefunhouserichmond@gmail.com" role="button" className="footer-icon">
          <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
        </a>

        <a href="https://www.instagram.com/thefunhouserichmond/" role="button" className="footer-icon">
          <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
        </a>
        {/* <a href="https://twitter.com/Brian_Harsha4" role="button">
          <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
        </a> */}
        {/* <a href="https://www.linkedin.com/in/brianharsha/" role="button">
          <FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />
        </a> */}
      </section>

      {/* <div className="d-flex justify-content-center">
        <div className="design">
          Design by: <a href="https://brianharsha.netlify.app/">Brian Harsha</a>
        </div>
      </div> */}
    </footer>
  );
}
