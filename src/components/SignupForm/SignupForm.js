import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
//import { auth } from "../../firebase";
import Select from "react-dropdown-select";
import "./SignupForm.css";
import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import { userSignup } from "../../redux/authSlice/authSlice";
// redux
let user_id;
function Signup() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [role, setRole] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [resp, setResp] = useState({});
  const [user, setUser] = useState({});
  
  const handleValues = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    setValues((pre) => ({ ...pre, [name]: val }));
  };

  const handleSubmission = () => {
    
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }

    const signUpObj = {
      email: values.email,
      password: values.pass,
      confirm_password: values.pass,
      role: role,
    };

    
      dispatch(userSignup(signUpObj)).then(res=>{
        console.log(res)
        console.log(res)
        user_id=res.payload.data._id;

        if(res.payload.data.role === 'Buyer'){
          navigate("/buyer");
        } else if (res.payload.data.role === 'Seller') {
          navigate("/seller");
        }
      })
      // const regRes = await axios.post("http://34.125.207.80:8500/api/v1/aarhti/users/signup", signUpObj);
      // console.log(regRes)
      // setResp(regRes);
      // setUser(regRes.data);
      // return regRes;
    
    
    //setSubmitButtonDisabled(true);
    /* createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/buyer");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      }); */
  };

  return (
    <div className="container">
      <div className="innerBox">
        <div className="imgs">
          <div className="container-image">
            <img width={250} height={250} src="./arhti-01.png" />
          </div>
        </div>
        <div classname="align-fields">
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <InputControl
            label="&nbsp; Email &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;"
            name="email"
            value={values.email}
            placeholder="Enter email address"
            onChange={handleValues}
          />{" "}
        </div>

        <InputControl
          label="&nbsp; Password &nbsp; &nbsp;&nbsp;"
          name="pass"
          value={values.pass}
          placeholder="Enter password"
          labelStyle={{ marginRight: "20px" }}
          type="password"
          onChange={handleValues}
        />

        <div>
          {" "}
          <label>Select Role:</label>
          <input
            type="radio"
            value="Buyer"
            name="role"
            className="radio"
            onChange={(event) => setRole(event.target.value)}
          />{" "}
          Buyer
          <input
            type="radio"
            value="Seller"
            name="role"
            className="radio"
            onChange={(event) => setRole(event.target.value)}
          />{" "}
          Seller
        </div>

        <div className="footer">
          <b className="error">{errorMsg}</b>

          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Sign Up
          </button>

          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login-form">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export const e_su_user=user_id;
export default Signup;