import React, { useState } from 'react';

import Sidebar from "../../components/Sidebar"

import "../../styles/admin.css"

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

import DoneIcon from '@mui/icons-material/Done';

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";





import axios from "axios";
import { AdsClick } from '@mui/icons-material';

export default function Averify() {

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

        const response = await axios.get("https://realestate-backend-b20k.onrender.com/api/admin/attorney");

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

                            <th scope="col">Attorney ID</th>

                            <th scope="col">License No.</th>

                            <th scope="col">Name</th>

                            <th scope="col">Email</th>

                            <th scope="col">Address</th>

                            

                            <th scope="col">Contact_Number</th>

                            <th scope="col">Verify</th>






                        </tr>

                    </thead>

                    <tbody>

                        {data.map((item, index) => {

                            const Accept = () => {

                                axios.put(`https://realestate-backend-b20k.onrender.com/aaccept`, {

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

                                axios.put(`https://realestate-backend-b20k.onrender.com/aaccept`, {

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

                                <tr key={item.id}>

                                <td>{item.id}</td>




                                    

                                    <td>{item.Aadhar_id}</td>

                                    <td>{item.Full_Name}</td>

                                    <td>{item.Email}</td>

                                    <td>{item.Address}</td>

                                    <td>{item.Contact_Number}</td>

                                    

                                    


                                    

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