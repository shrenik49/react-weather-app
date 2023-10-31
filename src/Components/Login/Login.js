import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { LoginContext} from "../context";
import Register from '../Register/Register'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregister, setRegister] = useState(false);

  const { isLoggedIn, login, } = useContext(LoginContext);
  // const { isLoggedIn, login, logout } = useLogin();

  const handleRegister = () => {
    setRegister(true);
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      
      console.log("Logged in successfully", response.data);
      login();
      console.log("isLoggedIn", isLoggedIn);
    } catch (error) {
      console.error("Login failed", error);
    }
  };


  return (
    <>
      {!isregister ? (
        <>
          <div className="App">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleLogin}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    Not registered yet?{" "}
                    <span className="link-primary" onClick={handleRegister}>
                      Sign Up
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Register />
      )}
    </>
  );
}
