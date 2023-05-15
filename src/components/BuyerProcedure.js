import { padding } from '@mui/system';
import React from 'react';
import './BuyerProcedure.css';

function BuyerProcedure() {
  return (
    <div>
      <h1 class='txt'> See How it works!</h1>
      
      <div style={{display:'flex', margin: '20px'}}>

        <div classname='Container'>
        <img src='./sign-up.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 1</h3>
        <h2 className='txt-details' >Sign Up</h2>
        </div>

        <div classname='Container'>
        <img src='./wheat-sack.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 2</h3>
        <h2 className='txt-details'>See Crops</h2>
        </div>

        <div classname='Container'>
        <img src='./shopping-bag.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 3</h3>
        <h2 className='txt-details'>Buy Crop</h2>
        </div> 

        <div classname='Container'>
        <img src='./delivery.png' class= "img-illustration-container"/>
        <h3 className='sub-txt'>Step 4</h3>
        <h2 className='txt-details'>Get Delievered</h2>
        </div>

      </div>

      {/* <div classname='txt'> hi</div> */}
    </div>
  )
}

export default BuyerProcedure
