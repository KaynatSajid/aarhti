import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './BuyerSection.css';
import ProductCard from './ProductItems/ProductCard';
import BuyerProcedure from './BuyerProcedure';
import Footer from './Footer';
import { width } from '@mui/system';
import axios from 'axios';
import Typewriter from "typewriter-effect";
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { userChangeRole } from '../redux/authSlice/authSlice';

function BuyerSection({ cartOpen, setCartOpen, addToCart }) {
  const auth= useSelector(state => state.auth);
  console.log(auth)
  userChangeRole(auth.id);
  console.log('change role bhej di')
  const auth_n = useSelector(state => state.auth);
  //userChangeRole(auth.role);

  /* const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://34.125.207.80:8500/api/v1/aarhti/crops')
      .then(res => {setData(res.data);
        console.log(res.data)
        console.log(data)})
      .catch(error => console.error(error));
  }, []); */

  
  return (
//outer div
<div className='buyer-hero-container'>

      <div className='hero-sectionB'>
        <div className='img' style={{marginRight:"10px", marginLeft:"40px" }}>
            <img style={{width:"250px" ,height:"250px", marginRight:"10px", marginLeft:"40px" }} src = './wheat-buyer.png'  className="img-container" />
          </div>
          <div> <h3 style={{marginLeft:"100px",marginTop:"10px", color:"green"}}>Welcome {auth.first_name}! </h3></div>
          
          <div className='sub-headingB'>
            <h2> Buyer's Section</h2>
            <div className='main-headingB'>

            <p style={{paddingTop:'20px'}}>Welcome to our online store for high-quality wheat crops!
               Our wheat crops are grown using the latest farming techniques 
               to ensure they are of the best quality. We offer a variety of
               wheat crops that you can browse through and buy easily directly from Suppliers</p> 
            </div>
          </div>
      </div>
    
      <div className='product-container' style={{backgroundColor:" rgb(232, 222, 199)"}}>
      <BuyerProcedure/>
      
      </div>
      <div style={{backgroundColor:'white'}}>
        <ProductCard  cartOpen={cartOpen} setCartOpen={setCartOpen} addToCart={addToCart} />
      </div> 

      <div>
        <Footer/>
      </div>
      {/* <div style={{backgroundColor:'#623F1C', height:'400px'}}>
hi
      </div> */}

</div>  
);
}

export default BuyerSection;