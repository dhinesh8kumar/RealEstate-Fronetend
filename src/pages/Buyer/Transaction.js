import React from "react";
import Navbar from "../../components/Newnavbar";
import Lottie from "lottie-react";
import animate from "./animate.json"
import { useNavigate } from "react-router-dom";
export default function Transaction(){
    const navigate = useNavigate();
  if(!localStorage.getItem('Name')){
    navigate('/');
  }
  else if(localStorage.getItem('authToken')!= "buyer") {
    navigate('/SDashboard/List');
  }
    return(
        <>
        <Navbar/>
        <div className="confimed">
        <Lottie animationData={animate} loop={true} width={400} height={400}/>;
        </div>
        </>
    )
}