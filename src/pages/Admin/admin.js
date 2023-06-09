import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar"
import "../../styles/admin.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';  
import CloseIcon from '@mui/icons-material/Close';  
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
export default function Admin(){
  const navigate= useNavigate();
  if(!localStorage.getItem("authToken")){
    navigate('/Login')
  }
  else if(localStorage.getItem("authToken")==='buyer'){
    navigate('/Properties')
  }
  else if(localStorage.getItem("authToken")==='seller'){
    navigate('/SDashboard/List')
  }
  const [data,setData] = useState([]);
  const loadBuyer = async () => {
    const response = await axios.get("https://realestate-backend-b20k.onrender.com/api/buyer");
    setData(response.data);
  };
  useEffect(()=> {
    loadBuyer();

  },[]);
    return (
        <> 
        <Sidebar/>
        <div className="main">
        <table className="table">
  <thead className="k">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Passport No.</th>
      <th scope="col">Verification</th>

    </tr>
  </thead>
  <tbody>
    {data.map((item,index)=>{
      const Accept = () => {
        axios.put(`https://realestate-backend-b20k.onrender.com/baccept`, {
          verify:1,
          id: item.id
        })
        .then(response => {
          console.log(response.data);
          alert('User information updated successfully');
        })
        .catch(error => {
          console.error(error);
          alert('Error updating user information');
        });
        window.location.reload()
      };
      const Reject = () => {
        axios.put(`https://realestate-backend-b20k.onrender.com/baccept`, {
          verify:0,
          id: item.id
        })
        .then(response => {
          console.log(response.data);
          alert('User information updated successfully');
        })
        .catch(error => {
          console.error(error);
          alert('Error updating user information');
        });
        window.location.reload()
      };
      return(
        <tr key={item.buyer_id}>
          <th scope='row'>{index+1}</th>

          <td>{item.Full_Name}</td>
          <td>{item.Email}</td>
          <td>{item.Contact_Number}</td>
          <td>{item.Address}</td>
          <td>{item.Aadhar_id}</td>
          <td><Stack direction="row" spacing={1}>
      
      <Button onClick={Accept} size="small" variant="contained" color="success" startIcon={<DoneIcon />} disableElevation>
        Accept
      </Button>
      <Button size="small" onClick={Reject} variant="outlined" color="error" startIcon={<CloseIcon/>}>
        Reject
      </Button>
    </Stack></td>


        </tr>
      )
    })}
   
  </tbody>
</table>
        </div>
        </>
    );
}