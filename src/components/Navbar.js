import React from "react";
import "./Navbar.css";
import {Link, useNavigate} from "react-router-dom";
export default function Navbar(){
  
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{height:"60px"}}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand fw-bold">
    RealEtsy
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign Up
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/Bsign" className="dropdown-item"><li>Buyer</li></Link>
            <Link to="/Ssign" className="dropdown-item"><li>Seller</li></Link>
            <Link to="/Asign" className="dropdown-item"><li>Attorney</li></Link>
            
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/About" className="dropdown-item"><li>About Us</li></Link>
            <Link to="/Tandc" className="dropdown-item"><li>Terms & Conditions</li></Link>
            
            
            
          </ul>
        </li>
      </ul>
      <Link to="/Login"><button className="btn btn-outline-dark fw-bold" type="submit" style={{marginTop:"30px"}}>Log In</button></Link>
      
    </div>
  </div>
</nav>

       </>
    );
}