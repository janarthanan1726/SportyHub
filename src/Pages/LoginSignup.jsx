import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";
const LoginSignup = () => {

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn">SignUp</button>
        <p className="loginsignup-login">
          Already have an account <Link to="/login1"><button className="btn2">Login here</button></Link>
        </p>
        {/* <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy. </p>
        </div> */}
      </div>
    </div>
  );
};

export default LoginSignup;
