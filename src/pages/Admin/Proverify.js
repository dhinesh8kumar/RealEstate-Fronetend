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


export default function Proverify() {
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


    const [data, setData] = useState([]);

    const loadBuyer = async () => {

        const response = await axios.get("https://realestate-backend-b20k.onrender.com/api/admin/property");

        setData(response.data);

    };

    useEffect(() => {

        loadBuyer();




    }, []);

    return (

        <>

            <Sidebar />

            <div className="main">

                <table className="table">

                    <thead className="k">

                        <tr>

                            <th scope="col">Proeprty ID</th>
                            <th scope="col">Reg No.</th>
                            <th scope="col">Purpose</th>

                            <th scope="col">Address</th>

                            <th scope="col">property_image</th>

                            <th scope="col">Price</th>

                            <th scope="col">Area</th>
                            <th scope='col'>Owner Name</th>

                            <th scope="col">Property_doc</th>

                            <th scope="col">Verify</th>




                        </tr>

                    </thead>

                    <tbody>

                        {data.map((item, index) => {

                            const Accept = () => {

                                axios.put(`https://realestate-backend-b20k.onrender.com/proaccept`, {

                                    verify: 1,

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

                                axios.put(`https://realestate-backend-b20k.onrender.com/proaccept`, {

                                    verify: 0,

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

                            return (

                                <tr key={item.property_id}>

                                    <th scope='row'>{item.id}</th>
                                    <td>{item.Reg_no}</td>



                                    <td>{item.purpose}</td>

                                    <td>{item.Address}</td>

                                    <td>{item.property_image}</td>

                                    <td>{item.Price}</td>

                                    <td>{item.Area_Size}sqkm</td>

                                    <td>{item.Owner_Name}</td>

                                    <td>{item.property_doc}</td>

                                    

                                    <td><Stack direction="row" spacing={1}>



                                        <Button onClick={Accept} size="small" variant="contained" color="success" startIcon={<DoneIcon />} disableElevation>

                                            Accept

                                        </Button>

                                        <Button size="small" onClick={Reject} variant="outlined" color="error" startIcon={<CloseIcon />}>

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