import React from "react";
import Navbar from "../../components/Newnavbar";
import Lottie from "lottie-react";
import animate from "./animate.json"
import { useNavigate } from "react-router-dom";
import "../../styles/transaction.css"
export default function Transaction(){
    const navigate = useNavigate();
  if(!localStorage.getItem('Name')){
    navigate('/');
  }
  else if(localStorage.getItem('authToken')!== "buyer") {
    navigate('/SDashboard/List');
  }
    return(
        <>
        <Navbar/>
        <div className="confirmed">
        <Lottie animationData={animate} loop={true}/>;
        
        </div>
        <h4 className="qwer">Transaction Confirmed</h4>
        </>
    )
}