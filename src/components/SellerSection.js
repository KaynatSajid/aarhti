import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './SellerSection.css';
import ProductSellerCard from './ProductItems/ProductSellerCard';
import SellerProcedure from './SellerProcedure';
import SellerVideo from './SellerVideo';
import SellerAddCrop from './SellerAddCrop';
import Footer from './Footer';
import { width } from '@mui/system';
import Typewriter from "typewriter-effect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';
import { userChangeRole } from '../redux/authSlice/authSlice';

function SellerSection() {

  const auth= useSelector(state => state.auth);
  console.log(auth)
  userChangeRole(auth.id);
  console.log('change role bhej di')
  //const isCropSold = sessionStorage.getItem("cropSold") === "true";
// if (isCropSold) {
//   alert("Your crop has been sold!");
//   sessionStorage.removeItem("cropSold");
// }



  return (
//outer div
<div className='buyer-hero-container'>
<div> <h3 style={{marginLeft:"100px",marginTop:"10px", color:"green"}}>Welcome {auth.first_name}! </h3></div>
      <div className='hero-section'>
      <div className='img' style={{marginRight:"10px", marginLeft:"40px" }}>
            <img style={{width:"250px" ,height:"250px", marginRight:"10px", marginLeft:"40px" }} src = './cart.png'  className="img-container" />
          </div>
          
          <div className='sub-heading' style={{color:"green"}}>
            <h2> Seller's Section</h2>
            <div className='main-heading'>

            <p>Welcome to our online store for high-quality wheat crops!
                                            As a seller, you can offer your own crops for sale on our platform. 
                                            Thank you for choosing our platform to sell your high-quality wheat crops!

</p> 
            </div>
          </div>
      </div>
    
      <div className='product-container'>
      <SellerProcedure/>
      
      </div>

      <div style={{backgroundColor:'white'}}>
        <SellerVideo />
      </div> 

      <div style={{backgroundColor:'white'}}>
        <SellerAddCrop />
      </div> 
      

      <div style={{backgroundColor:'white'}}>
        <ProductSellerCard />
      </div> 

      {<div>
        <Footer/>
      </div> }
      {/* <div style={{backgroundColor:'#623F1C', height:'400px'}}>
hi
      </div> */}

</div>  
);
}

export default SellerSection;