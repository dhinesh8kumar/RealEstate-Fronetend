import React, { useState } from "react";
import "../../styles/Grid.css";
import Navbar from "../../components/Newnavbar"
// import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import axios from 'axios';


export default function Card() {
  
  const [data,setData] = useState([]);
  const loadProperty = async () => {
    const response = await axios.get("http://localhost:9091/api/attorney");
    setData(response.data);
  };
  useEffect(()=> {
    loadProperty();

  },[]);

  return (
    <>
    <Navbar/>
      <div className="grid-container1" style={{paddingTop:"80px"}}>
        <div className="item1">
          <h2>
            <b>Attorneys</b>
          </h2>
        </div>

        <div className="item2">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // onChange={(e) => {
              //   setSearchText(e.target.value);
              // }}
            />
            <button className="btn" type="submit" >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="grid-container">
        {data.map((attorney) => (
          <div className="grid-item">
            <div className="item">
              <img src={attorney.Profile} alt="photo" />
            </div>
            <div className="info">
              <div className="title">{attorney.Full_Name}</div>
              <p>Attorney ID:{attorney.id}</p>
              <br></br>
              <p>
                <b>Contact:</b>
                
              </p>
              <p>Mob: {attorney.Contact_Number}</p>
              <p>e-mail: {attorney.Email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="res-center">
        {" "}
        <div className="res-container">
          {" "}
          {attorneyList.map((p) => {
            return (
              <attorneyList src={p.src} name={p.name} contact={p.contact} />
            );
          })}{" "}
        </div>{" "}
      </div> */}
      <Footer/>
    </>
  );
}
