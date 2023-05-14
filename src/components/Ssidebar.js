import React from "react";
import "./Sidebar.css";
import {Link, useNavigate} from "react-router-dom";


export default function Sidebar(){
  const navigate = useNavigate();
  const logout= ()=>{
    localStorage.removeItem("data");
    localStorage.removeItem("authToken");
    navigate('/');
  }
    return(
        <div className="sidebar open">
        <div className="logo-details">
          <i className='bx bxs-bar-chart-alt-2 icon' ></i>
            <div className="logo_name">RealEtsy</div>
            <i className='bx bx-menu' id="btn" ></i>
        </div>
        <ul className="nav-list">
          
          <li>

            <Link to="/Properties">
            <i class='bx bx-book-bookmark'></i>
              <span className="links_name">Properties</span>
            </Link>

            </li>
            <li>
            <Link to="/Addproperty">
            <i class='bx bx-buildings'></i>
              <span className="links_name">Add Property</span>
            
            </Link>
            </li>
            <li>
            <Link to="/Addproperty">
            <i class='bx bxs-bank'></i>
              <span className="links_name">Transactions</span>
            
            </Link>
            </li>
            
          
         
         <li className="profile">
             <div className="profile-details">
              
               <div className="name_job">
                 <div className="name">Seller</div>
                 <div className="job">RealEtsy </div>
               </div>
             </div>
             <i className='bx bx-log-out' onClick={logout} id="log_out" ></i>
         </li>
        </ul>
      </div> 
    );
}