import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar"
import "../../styles/admin.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';  
import CloseIcon from '@mui/icons-material/Close';  
import { useEffect } from "react";


import axios from "axios";
export default function Admin(){
    const [data,setData]= useState([])
    
    return (
        <>
        <Sidebar/>
        <div className="main">
        <table className="table">
  <thead className="k">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Verification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
      <Stack direction="row" spacing={2}>
      
      <Button variant="contained" color="success" startIcon={<DoneIcon />} disableElevation>
        Accept
      </Button>
      <Button variant="outlined" color="error" startIcon={<CloseIcon/>}>
        Reject
      </Button>
    </Stack>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
        </>
    );
}