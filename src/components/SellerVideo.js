import { padding } from '@mui/system';
import React, { useState } from 'react';
import './SellerVideo.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function SellerVideo() {
    const [objects,setObjects]=useState(0);
    const navigate = useNavigate();

    const detectObjects = async (file) => {
        const formData = new FormData();
        formData.append('video', file);
      
        const response = await axios.post('http://34.125.207.80:8500/api/v1/aarhti/videos', formData);
        console.log(response);
        //const response1 = await axios.post('http://localhost:5000/detect', {});
        //setObjects(response1.object_count);
        //console.log(response1);
        //console.log(response1.object_count);
      
        // Render results in frontend
      };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        detectObjects(file);
        console.log('navigate say upar');
        navigate('/seller/display-results');
      };

    return(
     <div class="upload-box" style={{backgroundColor:"rgb(220, 248, 231)", paddingBottom:"10px",
     display:'flex', flexDirection:"row"}}>

        <div>
     <h2>Upload Your Crop Video</h2>
     <p>Please upload a video of your crop for yield estimation.</p>
     <input type="file" id="crop-video" name="crop-video" accept="video/*" onChange={handleFileUpload} enctype="multipart/form-data" ></input>
     <label for="crop-video">Choose File</label>
     </div>

     <div style={{display:"flex", marginRight:"0px", marginTop:"0px"}}>
            <img style={{width:"120px" ,height:"120px", marginRight:"200px", marginLeft:"80%" }} src = './cropvideo.png'   />
         </div>
     
     </div>
    )
}

export default SellerVideo;

