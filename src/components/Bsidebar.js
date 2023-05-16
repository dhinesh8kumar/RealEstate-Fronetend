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
  const x= localStorage.getItem("Name");
  const user_id = localStorage.getItem("data");
    return(
        <div className="sidebar open">
        <Link to="/Properties"><div className="logo-details">
          <i className='bx bxs-bar-chart-alt-2 icon' ></i>
            <div className="logo_name">RealEtsy</div>
            <i className='bx bx-menu' id="btn" ></i>
        </div>
        </Link>
        <ul className="nav-list">
          
          <li>
            <a href="#">
            <i class='bx bxs-bank'></i>
              <span className="links_name">Transactions</span>
            </a>
            
          </li>
          
         <li className="profile">
             <div className="profile-details">
              
               <div className="name_job">
                 <div className="name">{x}</div>
                 <div className="job">ID: #{user_id} </div>
               </div>
             </div>
             <i className='bx bx-log-out' onClick={logout} id="log_out" ></i>
         </li>
        </ul>
      </div> 
    );
}