import React from 'react';
import './DisplayResults.css';
import BuyerSection from '../BuyerSection';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "typeface-poppins";


function DisplayResults(props) {
    const [objects,setObjects]=useState(0);
    const [est,setEst]=useState(0);
    const [res,setRes]=useState(false);
    const [price,setPrice]=useState(0);
    const ExampleComponent = () => {
      const [showDiv, setShowDiv] = useState(false);
    
      const handleClick = () => {
        setShowDiv(true);
      }
    };
    
    useEffect(()=>{
        const call_results= async() =>{
            const response1 = await axios.post('http://localhost:5000/detect', {});
            setRes(true);
            setObjects(parseInt(response1.data.object_count));
            console.log(response1);
            console.log(response1.object_count);
            let estima=response1.data.object_count*33*40*0.0016
            estima=estima*67.25*0.4046862669715303
            setEst(Math.ceil(estima))
            setPrice(Math.ceil(estima*160));
        }
        call_results();
    },[])
    
      
  return (
    <body style={{ backgroundColor: "white"}} >
          {!res && <div>
            
            <div className='loading-div'>
       {/* <div> <img src="/videos/work-in-progress.gif" style={{width:"500px",height:"500px"}} /></div> */}
       {/* <img src={loadingAnimation} alt="Loading Animation" /> */}
        {/* <img src="/images/sand-clock.png" style={{width:"200px",height:"200px"}}/> */}
        <video src='/videos/load.mp4' autoPlay loop muted style={{width:"300px",height:"300px",marginLeft:"100px",marginRight:"100px",marginTop:"350px"}}/>
        
        <p style={{marginTop:"30px", color:"gray" ,fontSize:"20px"}}>Please wait while the results are being processed.</p>
      </div>
            </div>
             }
          {res &&
        <div>
          <div >
            <h1  className="num">CROP ESTIMATION</h1>
          </div>
          <div style={{ display:"flex", marginLeft:'300px',margintop:'200px', backgroundColor:'rgb(220, 248, 231)', width:'1100px', height:"250px"
          ,paddingTop:'10px',paddingLeft:'80px', display:'flex', borderRadius:'15px'}}>
            <div >
            <img style={{width:"170px" ,height:"200px",marginLeft:"100px" }} src = '../images/results13.png'  className="img-container" />
            </div>,
            <div >
            <h2 style={{fontFamily:'Montserrat',color:"#575557", marginTop:'40px', marginLeft:'100px',display:'flex',alignItems:'center'}}>
              Price Estimated! </h2>
              <h3 style={{fontFamily:'Montserrat regular',color:"#575557", marginTop:'30px', marginLeft:'100px',display:'flex',alignItems:'center'}}>
                The suggested price of your crop is {price}!</h3>
            </div>
            
          </div>
          <div >
            <h1  className="num1">DETAILS</h1>
          </div>
          <div className="wrapper">
            <div className="container1">
              <i1 className="fas fa-tree"></i1>
              <span className="num" data-val="400">
                {objects}</span>
              <span className="text">
              Objects detected </span>
            </div>
            <div className="container1">
              <i1 className="fas fa-crop"></i1>
              <span className="num" data-val="340">33</span>
              <span className="text"> Average grains per head </span>
            </div>
            <div className="container1">
              <i1 className="fas fa-list"></i1>
              <span className="num" data-val="225">40 grams</span>
              <span className="text">
              Average weight of 1000 grains
              </span>
            </div>
            <div className="container1">
              <i1 className="fas fa-calculator"></i1>
              <span className="num" data-val="280">{est} kg/acre</span>
              <span className="text">Estimate Yield of your crop</span>
            </div>
          </div>
      </div>}
    </body>
  );
}

export default DisplayResults;