import React from 'react';
import { Link} from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from "react-toastify";
function OrderConfirmed() {
  useEffect(() => {
    const cropSold = sessionStorage.getItem("cropSold");
    if (cropSold === "true") {
      // show notification
      toast.success("Crop has been sold!", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // reset session storage item
      sessionStorage.removeItem("cropSold");
    }
  }, []);
  return (
    <div style={{ display:"flex", margin:"200px", marginLeft:'300px',margintop:'300px', backgroundColor:'rgb(232, 222, 199)', width:'1100px', height:"300px"
    ,paddingTop:'30px', display:'flex', borderRadius:'15px'}}>
       <div >
       <img style={{width:"250px" ,height:"250px",marginLeft:"100px" }} src = './images/booking.png'  className="img-container" />
       </div>
      <div >
      <h2 style={{fontFamily:'Montserrat', marginTop:'40px', marginLeft:'100px',display:'flex',alignItems:'center'}}>
        Order Confirmed! </h2>
        <h3 style={{fontFamily:'Montserrat regular', marginTop:'30px', marginLeft:'100px',display:'flex',alignItems:'center'}}>
          Your order has been confirmed. We will shortly dispatch it!</h3>
          
          <div style={{marginTop:'25px'}}><button className='link-no-underlined' style={{marginLeft:"100px"}} >
          <Link to={'/buyer'} style={{ color: 'inherit', textDecoration: 'none', padding:'none' }}>Continue Shopping</Link>
          </button></div>
      </div>
      
    </div>
  )
}

export default OrderConfirmed
