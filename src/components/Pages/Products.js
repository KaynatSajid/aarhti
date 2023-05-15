import React from 'react';
import '../../App.css';
import './Products.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function Products() {
  return (
    <div> 
    {/* //hero section */}
  <div style={{textAlign:"center"}}>
    <img className='welcome-containerP' src= "/images/sellerfarm.jpg"/>
    <h2 className='headingP'>We are a Solution for Farmers </h2>
    <p className='subtitlesP'> Welcome to our services for farmers! We are excited to introduce our latest feature that allows you to easily estimate your wheat crop yield.</p>
    <p className='subtitlesP'>Unlike many ideas of our time, we didn't come about by t
    yping code in a garage but by growing oranges on a farm. While trying to make a living as young farmers, we learnt that we had to sell directly to end-consumers if we wanted to succeed.</p>
  </div>
  
  {/* //service div 1*/}
  <div>
    <h1 className='headingP' style={{marginTop:"50px" ,fontWeight:"200px"}}>Our Products</h1>
    <div className='service-div'>
      <img className='imageP' src= "/images/video-service.png" alt='Yield'/>

      <div style={{padding:"10px",  textAlign:"left", display:"flex" ,flexDirection:"column"}}>
          <p className='text' style={{marginTop:"100px", fontWeight:"bold",color:"green"}}>Get Your Crop Yield Estimate. </p> 
          <p className='text' style={{marginTop:"15px"}}>Our user-friendly interface makes it simple for farmers to use this service, ensuring that you receive accurate results in a timely manner.</p>
          <p className='text' style={{marginTop:"0px"}}>We understand the importance of having accurate yield estimates, and our goal is to help you achieve the best possible outcomes for your farm.</p>
          <button className='link-no-underlined' style={{paddingLeft:"160px"}}>
            <Link to="/seller" style={{ color: 'inherit', textDecoration: 'none' }}>Get Started</Link></button>
      
      </div>
    </div>
  </div>

  {/* //service div 2*/}
  <div>
    <h1 className='headingP' style={{marginTop:"50px" ,fontWeight:"200px"}}>Our Services</h1>
    <div className='service-div'>
      <img className='imageP' src= "/images/sellcrop.png" alt='Yield'/>

      <div style={{padding:"10px",  textAlign:"left", display:"flex" ,flexDirection:"column"}}>
          <p className='text' style={{marginTop:"100px", fontWeight:"bold",color:"green"}}>Sell Your Crops </p> 
          <p className='text' style={{marginTop:"15px"}}>Our user-friendly interface makes it simple for farmers to use this service, connecting to buyers directly</p>
          <p className='text' style={{marginTop:"0px"}}> Add you crop to the listing and earn money from it instantly. Put up price of your own choice. </p>
          <button className='link-no-underlined' style={{paddingLeft:"160px", alignText:"center"}} >
          <Link to={'/seller'} style={{ color: 'inherit', textDecoration: 'none' }}>Start Selling</Link>
          </button>
      </div>
    </div>
  </div>

<Footer/>

  </div>
  );
}
