import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import InputControl from "../InputControl/InputControl";
//import { auth } from "../../firebase";
import "./LoginForm.css";
// redux
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/authSlice/authSlice";
// redux


let user_id;

function Login() {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // redux
  
  // redux

  
  const send_data = { email: values.email, password: values.pass };

  /* const api_call = async () => {
    console.log(send_data);
    const res = await axios.post("http://34.125.207.80:8500/api/v1/aarhti/users/login", send_data);
    return res;
  }; */

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }

    setErrorMsg("");
    dispatch(userLogin(send_data)).then(res=>{
      user_id=res.payload.data._id;
      if(typeof res.payload.data.first_name !='undefined'){
        if(res.payload.data.role==='Buyer'){
          navigate('/buyer');
        }
        else if (res.payload.data.role === 'Seller') {
          navigate("/seller");
        }
      }
      else{
        navigate('/accounts')
      }
      
    })
    // api_call()
    //   .then((resObj) => {
    //     if (parseInt(resObj.status) == 201) {
    //       setIsLoggedIn(true);
    //       isLogged='true'
    //       if (resObj.data.data.role == "Buyer") {
    //         navigate("/buyer");
    //       } else {
    //         navigate("/seller");
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     isLogged='false'
    //     setSubmitButtonDisabled(false);
    //     setErrorMsg(err.message);
    //   });
    setSubmitButtonDisabled(true);
    /* signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        handleLogin();
        navigate("/buyer");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      }); */
  };
  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <div className="innerBox">
        <div className="imgs">
          <div className="container-image">
            <img width={250} height={250} src="./arhti-01.png" />
          </div>
        </div>

        <InputControl
          classname="input-fields"
          label="&nbsp; Email &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="&nbsp; &nbsp;Enter email address"
        />
        <InputControl
          classname="input-fields"
          label="&nbsp; Password &nbsp; &nbsp;&nbsp;"
          type="password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
          placeholder="Enter Password"
        />

        <div className="footer">
          <b className="error">{errorMsg}</b>

          <button onClick={handleSubmission} disabled={submitButtonDisabled} className="login-button">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup-form">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export const e_li_user=user_id;
export default Login;
