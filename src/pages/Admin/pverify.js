import React, { useState } from 'react';

import Sidebar from "../../components/Sidebar"

import "../../styles/admin.css"

import { useNavigate } from 'react-router-dom';

import { useEffect } from "react";





import axios from "axios";


export default function Admin() {

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

        const response = await axios.get("http://localhost:9091/api/payment");

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

                            <th scope="col">Payment ID</th>

                            <th scope="col">Name</th>
                            <th scope="col">Buyer</th>
                            <th scope="col">Seller</th>
                            <th scope="col">Attorney</th>
                            <th scope="col">Property ID</th>
                            <th scope="col">Email</th>







                            <th scope="col">Status</th>




                        </tr>

                    </thead>

                    <tbody>

                        {data.map((item, index) => {
                            const verify=item.Verify;
                                let statusText;
                                if (verify === -1) {
                                    statusText = 'O In process';
                                } else if (verify === 1) {
                                    statusText = '✔ Approved';
                                } else {
                                    statusText = 'X Denied';
                                }
                            return (

                                <tr key={item.id}>

                                    <th scope='row'>{item.id}</th>




                                    <td>{item.Full_Name}</td>

                                    <td>{item.Buyer_id}</td>

                                    <td>{item.Seller_id}</td>

                                    <td>{item.Attorney_id}</td>

                                    <td>{item.Property_id}</td>

                                    <td>{item.Email}</td>

                                    <td>{statusText}</td>







                                </tr>

                            )

                        })}



                    </tbody>

                </table>

            </div>

        </>

    );

}