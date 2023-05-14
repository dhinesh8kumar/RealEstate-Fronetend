import React from "react";
import Navbar from "../../components/Newnavbar";
import Lottie from "lottie-react";
import animate from "./animate.json"
export default function Transaction(){
    return(
        <>
        <Navbar/>
        <div className="confimed">
        <Lottie animationData={animate} loop={true} width={400} height={400}/>;
        </div>
        </>
    )
}