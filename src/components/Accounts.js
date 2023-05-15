import React, { useState } from 'react';
import "./Accounts.css";
import axios from 'axios';
import { useSelector } from 'react-redux';
import {e_li_user} from './LoginForm/LoginForm'
import { e_su_user } from './SignupForm/SignupForm';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


function AccountPage() {
  //console.log(e_li_user)
  //console.log(e_su_user)
  const navigate=useNavigate();
  const auth=useSelector(state=>state.auth);
  const user_id=auth._id;
  console.log(auth);
  console.log(user_id);
  const [userDetails,setUserDetails]=useState({});
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    cnic:"",
    address: "",
    city: "",
    phone_number: "",
    region: "",
  });
  console.log(values);
  useEffect(()=>{
    axios.get(`http://localhost:8500/api/v1/aarhti/users/${user_id}`).then(res=>{
      console.log(res.data.message);
      setUserDetails(res.data.message)
    }).catch( err =>{
      console.log(err)
    })
  },[])

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
  const handleSubmission = () => {
    if (
      !values.first_name ||
      !values.last_name ||
      !values.address ||
      !values.city ||
      !values.region ||
      !values.cnic ||
      !values.phone_number

    ) {
      console.log(values)
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    
    

    const api_call_accounts = async () => {
      console.log(values);
      
      let send_data={... values}
      console.log(values);
      axios.patch(`http://localhost:8500/api/v1/aarhti/users/${user_id}`, values).then(res=>
      {
        console.log(res.data.user.role)
        if(res.data.user.role=='Buyer'){
          navigate('/buyer');
        }
        else{
          navigate('/seller');
        }

        }).catch(

      )
    };
    api_call_accounts()
    

    // Handle the billing submission logic here
  };

  return (
    <div >
      <h2 style={{fontFamily:'Montserrat', marginTop:'40px', marginLeft:'720px',display:'flex',alignItems:'center'}}>Account Profile</h2>

    <div style={{marginLeft:"25px" ,display:"flex", flexDirection:'column',alignItems:"center"}}>

      <div  style={{fontFamily:'Montserrat', margin:'30px', marginLeft:'40px'}}>
        
        <div >
          <label htmlFor="first_name" style={{padding:'10px', marginRight:'50px'}}>First Name</label>
          <input 
          style={{margin:'20px',marginLeft:'20px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, first_name: event.target.value }))
            }
          />
        </div>

        <div >
          <label htmlFor="last_name" style={{padding:'10px', marginRight:'50px'}}>Last Name</label>
          <input 
          style={{margin:'20px',marginLeft:'20px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Enter your last name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, last_name: event.target.value }))
            }
          />
        </div>

        <div  >
          <label htmlFor="cnic" style={{padding:'10px', marginRight:'50px'}}>CNIC</label>
          <input style={{margin:'10px',marginLeft:'60px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="cnic"
            id="cnic"
            placeholder="Enter your CNIC"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, cnic: event.target.value }))
            }
          />
        </div>

        <div >
          <label htmlFor="address" style={{padding:'10px', marginRight:'50px'}}>Address</label>
          <input
          style={{margin:'20px',marginLeft:'40px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, address: event.target.value }))
            }
          />
        </div>

        <div >
          <label htmlFor="city" style={{padding:'10px', marginRight:'50px'}}  > City</label>
          <input 
          style={{margin:'20px',marginLeft:'69px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
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
          <label htmlFor="phone_number" style={{padding:'10px', marginRight:'50px'}}>Phone No</label>
          <input
          style={{margin:'20px',marginLeft:'30px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Enter your phone number"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone_number: event.target.value }))
            }
          />
        </div>

        <div  >
          <label htmlFor="region" style={{padding:'10px', marginRight:'50px'}}>Region</label>
          <input
          style={{margin:'30px',marginLeft:'50px',width: '400px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}}
            type="text"
            name="region"
            id="region"
            placeholder="Enter your region"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, region: event.target.value }))
            }
          />
        </div>
     </div>
     {errorMsg && <div style={{color:"red", margin:'0px'}}>{errorMsg}</div>}
        <div className="form-group">
          <button 
          style={{background: "green", border: 0, borderRadius: "5px", width: "600px", height: "40px",marginTop: "0px",color: "white",fontSize: "20px",fontWeight: "700",  }}
          
           onClick={handleSubmission} disabled={submitButtonDisabled} >
            Save Information
            {/* <Link to= "/order-confirmed" className='link-no-underline' > Submit </Link>  */}
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default AccountPage;
