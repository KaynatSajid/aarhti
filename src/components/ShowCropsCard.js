import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";


const ShowCropsCard=(props)=>{
    return(
        <div className="hero-container">
            <h1>No Crops Available for {props.message}</h1>
        </div>
    )
}

export default ShowCropsCard;