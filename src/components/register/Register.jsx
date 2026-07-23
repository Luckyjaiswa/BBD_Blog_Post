import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [sign, setSign] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate()

  const handler = (e) => {
    const { name, value } = e.target;
    setSign({ ...sign, [name]: value });
  };

  const signForm = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${BASE_URL}/sign-up`, sign);
      console.log(res);
      if(res.data.message === true || res.status === 201) {
        toast.success(res.data.message)
        navigate('/login')
      }

    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            toast.error(err.response.data.message)
        } else {
            toast.error("Something went wrong")
        }

        console.error(err)
    }
  };
  return (
    <div className="container" style={{ marginTop: "3%" }}>
      <div className="card signup-card mx-auto">
        <div className="card-header">
          <h2>Create Account</h2>
          <p className="mb-0">Sign up to continue</p>
        </div>

        <div className="card-body">
          <Toaster />
          <form onSubmit={signForm}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={handler}
                />
              </div>
            </div>
            {/* Email */}
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
            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-telephone-fill" />
                </span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                  maxLength={10}
                  name="mobile"
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
            </div>
            <button className="btn btn-primary w-100 btn-register">
              <i className="bi bi-person-plus-fill" />
              Create Account
            </button>
          </form>
          <div className="login-link">
            Already have an account?
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};