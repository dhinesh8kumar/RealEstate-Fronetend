import React from "react";
import { useState } from "react";
import {TextField, Box} from '@mui/material'
import Button from '@mui/material/Button';
import "../styles/payment.css"
import Lottie from "lottie-react";
import paymentanimate from "./37960-online-payment.json"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Navbar from "../components/Newnavbar";
import {Formik} from "formik";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Payment(){
    const navigatex = useNavigate();
  if(!localStorage.getItem('Name')){
    navigatex('/');
  }
  if(localStorage.getItem('authToken')!= "buyer") {
    navigatex('/SDashboard/List');
  }
    const navigate = useNavigate();
    let id = localStorage.getItem("data");
    const x = localStorage.getItem("Name");
    const token= localStorage.getItem("authToken");
    

      
    const [email, setEmail]= useState('');
    const [name, setName]= useState(x);
    const [seller, setSeller]= useState('');
    const [property, setProperty]= useState('');
    const [attorney, setAttorney]= useState('');
    const [buyer, setBuyer]= useState(id);
    const [amount,setAmount]= useState('');
    const [values, setValues] = useState({

        email: '',
    
        name: '',
    
        seller: '',
        property: '',
        attorney:'',
        buyer:'',
        amount:'',
    
})

    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post("https://realestate-backend-b20k.onrender.com/payment",{
            email:email,
            name: name,
            seller:seller,
            property:property,
            attorney:attorney,
            buyer:buyer,
            amount:amount
        }).then(()=>{
            console.log("success");
            navigate('/Transaction');
        });

    };


    return (
        <>
        <Navbar/>  
        <div className="rect">
            <div className="row">
                
                <div className="col-6">
                    <p> Payment Details</p>
                    <form onSubmit={handleSubmit} >
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <TextField type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  id="outlined-basic" label="Email Address" variant="outlined" sx={{ width: 300 }} />
                    <TextField value={name} onChange={(e)=> setName(e.target.value)}  id="outlined-basic" disabled={true} label="Name" variant="outlined" type="text" sx={{width: 250}}/>
                    <TextField value={seller} onChange={(e)=> setSeller(e.target.value)}  id="outlined-basic" label="Seller ID" variant="outlined"   />
                    <TextField value={property} onChange={(e)=> setProperty(e.target.value)}  id="outlined-basic" label="Property ID" variant="outlined" />
                    <TextField value={attorney} onChange={(e)=> setAttorney(e.target.value)}  id="outlined-basic" label="Attorney ID" variant="outlined" />
                    <TextField value={buyer}  disabled={true} id="outlined-basic" label="Buyer ID" variant="outlined"  />
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <MonetizationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField value={amount} onChange={(e)=>setAmount(e.target.value)} id="input-with-sx" label="Amount" variant="standard" />
                    </Box>
                    <Button type="submit" variant="contained" disableElevation size="large" onClick={handleSubmit}>CONFIRM TRANSACTION</Button>
                    </Box>
                    
                    
                    </form>
                </div>
                <div className="col-6">
                <Lottie animationData={paymentanimate} loop={true} />;
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}