import React from "react";
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer(){
    return(
        
        <section id="footer">
  <div className="row" >
    <div className="col-lg-4 col-md-4 col-12">
      <p className="headf">Important Links</p>
      <p>Privacy Policy</p>
      <p>Terms and Conditions</p>
      <p>Contact Us</p>
    </div>
    <div className="col-lg-4 col-md-4 col-12">
      <p className="headf">Social Links</p>
      <p><FacebookIcon/> Facebbok</p>
      <p><TwitterIcon/>Twitter</p>
      <p><InstagramIcon/> Instagram</p>
    </div>
    <div className="col-lg-4 col-md-4 col-12 contactinfo ">
      <p className="headf">Contact Info</p>
      <p><LocalPhoneIcon/> +91-XXXXX-XXXXX</p>
      <p><EmailIcon/> realestate@gmail.com</p>
      <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp; Philippines, Philippines. </p>
      
    </div>
  </div>

  
  <p style={{textAlign:"center"}}>Copyright Ⓒ RealEtsy</p>
</section>
        
    );
}