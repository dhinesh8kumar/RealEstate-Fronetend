import React from "react";
import "../styles/About_us.css";

export default function About_us() {
  return (
    <>
    <div className="bgabt">
      <div className="container">
        <div className="itemabt">
          <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        </div>

        <div className="infoabt">
          <h1><b>About Us</b></h1>
          <h5><u>TEAM 3 SOZO</u></h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit consequatur dolorum fugiat iste in quisquam blanditiis totam iure commodi, corporis debitis nemo dolor magnam reiciendis alias sapiente enim accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit consequatur dolorum fugiat iste in quisquam blanditiis totam iure commodi, corporis debitis nemo dolor magnam reiciendis alias sapiente enim accusantium.</p>
        </div>
      </div>
      <div id="contact"><button type="Contact">Contact Us</button></div>
      </div>
    </>
  );
}
