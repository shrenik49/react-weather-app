// src/components/Register.js

import axios from 'axios';
import React, { useState } from 'react';
import Login from '../Login/Login';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [islogin,setislogin]= useState(false)


  const switchtoLogin = () => {
    setislogin(true)
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        fullName: name,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful registration response
        console.log("Registered successfully", response.data);
        // You can also store user information in state or context
      })
      .catch((error) => {
        // Handle registration error
        console.error("Registration failed", error);
      });
  };

  return (
    <div>
      {!islogin ? <>
      <div className="App">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleRegister}>
                Submit
              </button>
            </div>

            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={switchtoLogin}>
                Sign In
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
      </>:<Login/>}

    </div>
    
  );
};

export default Register;
