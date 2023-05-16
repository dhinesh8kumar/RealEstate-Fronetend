import React, { useState } from 'react';

import Sidebar from "../../components/Sidebar"

import "../../styles/admin.css"

import { useNavigate } from 'react-router-dom';

import { useEffect } from "react";





import axios from "axios";


export default function Cverify() {

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

        const response = await axios.get("https://realestate-backend-b20k.onrender.com/api/complaint");

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

                            <th scope="col">complaint_id</th>

                            <th scope="col">fullname</th>

                            <th scope="col">email</th>

                            <th scope="col">id</th>

                            <th scope="col">issueid</th>

                            <th scope="col">subject</th>

                            <th scope="col">descrp</th>

                            <th scope="col">status</th>




                        </tr>

                    </thead>

                    <tbody>

                        {data.map((item, index) => {

                            const verify=item.Verify;
                            let statusText;
                            if (verify === -1) {
                                statusText = 'InProgress';
                            } else if (verify === 1) {
                                statusText = '✔ Resolved';
                            } else {
                                statusText = 'X Not Resolved';
                            }

                            const Accept = () => {

                                axios.put(`http://localhost:9091/caccept`, {

                                    verify: 1,

                                    id: item.complaint_id
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

                                axios.put(`http://localhost:9091/caccept`, {

                                    verify: 0,

                                    id: item.complaint_id

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

                                <tr key={item.complaint_id}>

                                   




                                    <td>{item.id}</td>

                                    <td>{item.Full_Name}</td>

                                    <td>{item.Email}</td>

                                    <td>{item.id}</td>

                                    <td>{item.issue_id}</td>

                                    <td>{item.Subject}</td>

                                    <td>{item.Descrp}</td>

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