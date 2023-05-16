import React from "react";
import SSidebar from "../../components/Ssidebar"
import "../../styles/admin.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function SDashboard(){
  const navigate = useNavigate();
  if(!localStorage.getItem('Name')){
    navigate('/');
  }
  if (localStorage.getItem('authToken')!= "seller") {
    navigate('/Properties');
  }
  const [data,setData] = useState([]);
  const loadPayment = async () => {
    let id = localStorage.getItem("data");
    
    const response = await axios.get('http://localhost:9091/api/spayment/', {
      params: {
        user: id,
        
      }
      
    })
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
      
    });
    
  };
  
  useEffect(()=> {
    loadPayment();

  },[]);
    return (
        <>
        <SSidebar/>
        <div className="main">
        <h2>Transactions</h2>
        <table className="table">
  <thead className="k">
    <tr>  
    <th scope="col">#</th>
      <th scope="col">Payment ID</th>
      <th scope="col">Buyer</th>
      <th scope="col">Property ID</th>
      <th scope="col">Amount</th>
      <th scope="col">Seller</th>
      <th scope="col">Attorney</th>
      <th scope="col">Verification</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map((item,index)=> {
      const verify=item.Verify;
      let statusText;
      if (verify === -1) {
          statusText = 'O In process';
      } else if (verify === 1) {
          statusText = '✔ Approved';
      } else {
          statusText = 'X Denied';
      }
      return(
        <tr key={item.id}>
          <th scope='row'>{index+1}</th>
          <td>{item.id}</td>
        <td>{item.Buyer_id}</td>
        <td>{item.Property_id}</td>
        <td>$ {item.Amount}</td>
        <td>{item.Seller_id}</td>
        <td>{item.Attorney_id}</td>
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