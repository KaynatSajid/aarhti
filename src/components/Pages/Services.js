import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
export default function Services() {

  return (
    <div> 
      {/* //hero section */}
    <div style={{textAlign:"center"}}>
      <img className='welcome-container' src= "/images/welcomefarmer.png"/>
      <h2 className='heading' >Crop Marketplace for Buyers</h2>
      <p className='subtitles'> Our marketplace offers a convenient platform for buyers to browse and purchase crops directly from farmers. Our users can view detailed information about each crop, including the quantity available, pricing, and delivery options. </p>
      <p className='subtitles'>With just a few clicks, buyers can add items to their cart and place an order for delivery straight to their doorstep. Our goal is to provide a seamless and hassle-free experience for both buyers and sellers, connecting them in a secure and trustworthy environment. </p>
    </div>
    
     {/* //service div 1*/}
  <div>
    <h1 className='heading' style={{marginTop:"50px" ,fontWeight:"200px",color:"#836420"}}>Our Services</h1>
    <div className='service-div'>
      <img className='image' src= "/images/buycrop.png" alt='Yield'/>

      <div style={{padding:"10px",  textAlign:"left", display:"flex" ,flexDirection:"column"}}>
          <p className='text2 ' style={{marginTop:"100px", fontWeight:"bold",color:"green"}}>Buy Crops directly from Farmers </p> 
          <p className='text2' style={{marginTop:"15px"}}>By providing a direct connection between farmers and consumers, we aim to promote transparency, fair pricing, and sustainable agriculture practices. </p>
          {/* <p className='text' style={{marginTop:"0px"}}>Join us today and become a part of our community supporting local farmers and enjoying fresh, high-quality produce.</p> */}
          <button className='link-no-underlined' style={{paddingLeft:"160px"}}>
            <Link to="/buyer" style={{ color: 'inherit', textDecoration: 'none' }}>Get Started</Link></button>
      
      </div>
    </div>
  </div>

  <Footer/>

    </div>
  )

}
