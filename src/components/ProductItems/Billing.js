import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../Navbar.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Billing() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const api_call_billing = async () => {

    const res = await axios.post("http://localhost:8500/api/v1/aarhti/bills/buy", send_billing_data);
    console.log(res);
    return res;
  };

  const navigate = useNavigate();

  let send_billing_data;

  const handleSubmission = () => {
    if (
      !values.name ||
      !values.email ||
      !values.address ||
      !values.city ||
      !values.state ||
      !values.zip
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    else {
      send_billing_data = { ...values };
      api_call_billing()
      navigate("/order-confirmed");
      return;
    }
    // Handle the billing submission logic here
  };


  const handleClick = () => {
    handleSubmission();
    sessionStorage.setItem("cropSold", "true"); // add this line to set the session storage item
    window.location.href = "./seller"; // add this line to redirect to seller.js file
  };

  return (
<div style={{ display:"flex", marginLeft:'300px',marginRight:'250px',marginTop:'100px', backgroundColor:'white'
    ,paddingBottom:'20px', display:'flex', borderRadius:'15px'}}>

    <div >
       <img style={{width:"250px" ,height:"250px",marginLeft:"100px",marginTop:'100px', marginRight:'20px' }} src = './images/data-processing.png'  className="img-container" />
       <h2 style={{fontFamily:'Montserrat', marginTop:'40px', marginLeft:'100px',display:'flex',alignItems:'center'}}>Billing Information</h2>

       </div>

    <div
    >
      
    {/* <h2 style={{fontFamily:'Montserrat', marginTop:'40px', marginLeft:'100px',display:'flex',alignItems:'center'}}>Billing Information</h2> */}

    <div style={{marginLeft:"25px" ,display:"flex", flexDirection:'column',alignItems:"center"}}>

      <div  style={{fontFamily:'Montserrat', margin:'30px', marginLeft:'40px'}}>
        
        <div >
          <label htmlFor="name" style={{padding:'10px', marginRight:'50px'}}>Name</label>
          <input 
          style={{margin:'20px',marginLeft:'20px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </div>

        <div  >
          <label htmlFor="email" style={{padding:'10px', marginRight:'50px'}}>Email</label>
          <input style={{margin:'10px',marginLeft:'24px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>

        <div >
          <label htmlFor="address" style={{padding:'10px', marginRight:'50px'}}>Address</label>
          <input
          style={{margin:'20px',marginLeft:'08px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, address: event.target.value })) }
          />
        </div>

        <div >
          <label htmlFor="city" style={{padding:'10px', marginRight:'50px'}}  >  City</label>
          <input 
          style={{margin:'20px',marginLeft:'35px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="&nbsp;city"
            id="city"
            placeholder="&nbsp;Enter your city"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, city: event.target.value }))
            }
          />
        </div>

        <div >
          <label htmlFor="state" style={{padding:'10px', marginRight:'50px'}}>State</label>
          <input
          style={{margin:'20px',marginLeft:'25px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="state"
            id="state"
            placeholder="Enter your state"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, state: event.target.value }))
            }
          />
        </div>

        <div  >
          <label htmlFor="zip" style={{padding:'10px', marginRight:'50px'}}>ZIP Code</label>
          <input
          style={{
            margin:'20px',marginLeft:'0px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="zip"
            id="zip"
            placeholder="Enter your ZIP code"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, zip: event.target.value }))  }
          />
        </div>
     </div>
     {errorMsg && <div style={{color:"red", margin:'0px'}}>{errorMsg}</div>}
     
     <div className="form-group">
     
     {/* <Link to= "/order-confirmed" className='link-no-underline' > */}
          <button 
          style={{background: "green", border: 0, borderRadius: "5px", width: "400px", height: "40px",margin: "5px",color: "white",fontSize: "20px",fontWeight: "700",  }}
          
           onClick={handleClick} disabled={submitButtonDisabled} >
           
            Place Order
            {/* <Link to= "/order-confirmed" className='link-no-underline' > Submit </Link>  */}
          
            </button>
            {/* </Link> */}
          
        </div>


        
      </div>
    </div>
    
    </div>
  );
}

export default Billing;
