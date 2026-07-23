import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { isRouteErrorResponse, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginForm = async (e) => {
    try {
        e.preventDefault()
        const res = await axios.post(`${BASE_URL}/login`, login)
        // console.log(res);

        if (res.data.success === true || res.statue === 201) {
            localStorage.setItem("authToken", res.data.token)
            // toast.success(res.data.message)
            navigate('/')
        }
        
    } catch (err) {
        console.log(err);
        
    }
  }
  return (
    <div className="container" style={{ marginTop: "3%" }}>
      <div className="card signup-card mx-auto">
        <div className="card-header">
          <h2>Already have an account</h2>
          <p className="mb-0">Login to continue</p>
        </div>
        <div className="card-body">
          <Toaster />
          <form onSubmit={loginForm}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handler}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock-fill" />
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handler}
                />
              </div>
              <a href="/forgot-password" style={{textDecoration: "none", marginLeft: "68%"}}>Forgot Password</a>
            </div>

            <button className="btn btn-primary w-100 btn-register">
              <i className="bi bi-person-plus-fill" />
              Login
            </button>
          </form>
          <div className="login-link">
            Don't have an account?
            <a href="/sign-up">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};