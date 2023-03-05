import React from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Navbar() {

  window.addEventListener('load', (event) => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.navbar');
    let menuOpen = false;
    navbarToggler.addEventListener('click', () => {
      ToggleHamburger();

      function ToggleHamburger() {
        if (!menuOpen) {
          // menuBtn.classList.add('open')
          navbarToggler.classList.add('open')
          // navOptions.classList.remove('hidden')
          navbar.classList.remove('hidden')
          // navOptions.classList.add('fade-in')
          navbar.classList.add('fade-in')
          // main.classList.add('repositioned')
          // main.classList.add('ease-in')

          menuOpen = true
        } else {
          // menuBtn.classList.remove('open')
          navbarToggler.classList.remove('open')
          // navOptions.classList.add('hidden')
          navbar.classList.add('hidden')
          // main.classList.remove('repositioned')
          menuOpen = false
        }
      }
    })

  })



  return (

    <nav className="navbar navbar-expand-lg justify-content-center h4">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/booking">Booking</Link>
          <li><a className="nav-link" href="#">Testimonials</a></li>
          <li><a className="nav-link" href="/social">Social</a></li>
          <li><a className="nav-link" href="/dbtesting">dbtesting</a></li>
        </ul>
      </div>
    </nav>
  );
}
