import { padding } from '@mui/system';
import React from 'react';
import './SellerAddCrop.css';
import './SellerCropForm.js';
import { Link } from "react-router-dom";

function SellerAddCrop() {
  
    return(
      <div class="upload-box" style={{backgroundColor:"rgb(240, 227, 221)", paddingBottom:"10px",
      display:'flex', flexDirection:"row"}}>
      <div>
     <h2>Upload Your Crop Details</h2>
     <p>Please add the details of your crop that you want to sell.</p>
     <button type="upload" >
        <Link to ={'sellercropform'} className='link-no-underline'>Add Details</Link>
      </button>
     </div>

     <div style={{display:"flex", marginRight:"0px", marginTop:"0px"}}>
            <img style={{width:"120px" ,height:"120px", marginRight:"200px", marginLeft:"80%" }} src = './sprout.png'   />
         </div>
     </div>
    )
}
export default SellerAddCrop

