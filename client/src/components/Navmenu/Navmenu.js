import React from "react";
import "./Navmenu.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default function Navmenu() {
  return (
    <Navbar expand="lg">
      <Container>
        {/* <Navbar.Brand href="home">The FunHouse</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <div className="" id="">
            <ul className="navbar-nav" id="navbarSupportedContent">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/booking">Booking</Link>
              <li><a className="nav-link" href="#">Testimonials</a></li>
              <li><a className="nav-link" href="/social">Social</a></li>
              <li><a className="nav-link" href="/dbtesting">dbtesting</a></li>
            </ul>
          </div>
        </Navbar.Collapse>
        {/* <div className="col-md-3 d-none"></div> */}
      </Container>
    </Navbar>
  );
}