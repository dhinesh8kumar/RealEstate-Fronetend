import React from "react";
import Sidebar from "../../components/Ssidebar";
import { useNavigate } from "react-router-dom";
export default function List(){
    const navigate = useNavigate();
  if(!localStorage.getItem('Name')){
    navigate('/');
  }
  if(localStorage.getItem('authToken')!= "seller") {
    navigate('/Properties');
  }
    return(
        <>
        <Sidebar/>
        </>
    )
}