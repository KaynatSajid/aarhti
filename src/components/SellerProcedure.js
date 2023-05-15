import { padding } from '@mui/system';
import React from 'react';
import './SellerProcedure.css';

function SellerProcedure() {
  return (
    <div>
      <h1 class='txt'> See How it works!</h1>
      
      <div style={{display:'flex', margin: '20px'}}>

        <div classname='Container'>
        <img src='./seller-signup.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 1</h3>
        <h2 className='txt-details' >Sign Up</h2>
        </div>

        <div classname='Container'>
        <img src='./get-estimate.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 2</h3>
        <h2 className='txt-details'>Get Crop Estimate</h2>
        </div>

        <div classname='Container'>
        <img src='./add-crop.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 3</h3>
        <h2 className='txt-details'>Add Crop</h2>
        </div> 

        <div classname='Container'>
        <img src='./money-bag.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 4</h3>
        <h2 className='txt-details'>Sell Crop</h2>
        </div>

      </div>

      {/* <div classname='txt'> hi</div> */}
    </div>
  )
}

export default SellerProcedure
