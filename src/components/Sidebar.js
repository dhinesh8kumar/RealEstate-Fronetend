import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";


export default function Sidebar(){
    return(
        <div className="sidebar open">
        
        <div className="logo-details">
          <i className='bx bxs-bar-chart-alt-2 icon' ></i>
            <div className="logo_name">RealEtsy</div>
            <i className='bx bx-menu' id="btn" ></i>
        </div>
        
        <ul className="nav-list">
          
          <li>
            <Link to='/Admin/Buyer'>
            <i class='bx bx-user-check'></i>
              <span className="links_name">Buyer</span>
              </Link>
            
          </li>
          <li>
          <Link to='/Admin/Seller'>
           <i class='bx bxs-user-plus'></i>
             <span className="links_name">Seller</span>
           </Link>
           
         </li>
         <li>
         <Link to='/Admin/Property'>
           <i class='bx bx-buildings'></i>
             <span className="links_name">Property</span>
           </Link>
           
         </li>
         <li>
         <Link to='/Admin/Attorney'>
             <i class='bx bx-book-bookmark'></i>
             <span className="links_name">Attorney</span>
           </Link>
           
         </li>
         <li>
         <Link to='/Admin/Payment'>
           <i class='bx bxs-bank'></i>
             <span className="links_name">Payment</span>
           </Link>
          
         </li>
         <li>
         <Link to='/Admin/Complaints'>
           <i class='bx bxs-book-content'></i>
             <span className="links_name">Comaplaints</span>
           </Link>
           
         </li>
         
         <li className="profile">
             <div className="profile-details">
              
               <div className="name_job">
                 <div className="name">Admin</div>
                 <div className="job">RealEtsy </div>
               </div>
             </div>
             <i className='bx bx-log-out' id="log_out" ></i>
         </li>
        </ul>
      </div> 
    );
}