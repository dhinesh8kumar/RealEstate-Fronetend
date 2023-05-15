import React from "react";
import "./Navbar.css";
import {Link, useNavigate} from "react-router-dom";
export default function NewNavbar(){
  const navigate = useNavigate();

  const logout= ()=>{
    localStorage.removeItem("data");
    localStorage.removeItem("authToken");
    localStorage.removeItem("Name");
    navigate('/');
  }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container-fluid">
    <Link to="/Properties" className="navbar-brand fw-bold">
    RealEtsy
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Properties" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/Attorney" className="nav-link">Attorney</Link>
        </li>
        <li className="nav-item">
        <Link to="/Payment" className="nav-link"><li>Payment</li></Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/About" className="dropdown-item"><li>About Us</li></Link>
            <Link to="/T&C" className="dropdown-item"><li>Terms & Conditions</li></Link>
            <Link to="/Complaint" className="dropdown-item"><li>Complaint</li></Link>
            
            
          </ul>
        </li>
      </ul>
      <button onClick={logout}  className="btn btn-outline-dark fw-bold" type="submit">Log Out</button>
      
    </div>
  </div>
</nav>

       </>
    );
}