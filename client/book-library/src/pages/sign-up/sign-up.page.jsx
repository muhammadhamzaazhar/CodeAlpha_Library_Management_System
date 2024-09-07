import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./sign-up.styles.css";

const Signup = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [userFullName, setUserFullName] = useState("");
  const [admissionId, setAdmissionId] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const userType = isStudent ? "student" : "staff";
    try {
      const newUser = {
        userType,
        userFullName,
        admissionId: isStudent ? admissionId : null,
        employeeId: !isStudent ? employeeId : null,
        age,
        dob,
        gender,
        address,
        mobileNumber,
        email,
        password,
      };
      await axios.post(API_URL + "api/auth/register", newUser);
      navigate("/signin");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "An error occurred during signup."
      );
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form onSubmit={handleSignup}>
          <h2 className="signup-title">Sign Up</h2>
          <p className="line"></p>
          <div className="persontype-question">
            <p className="is-staff">Are you a Staff member?</p>
            <Switch onChange={() => setIsStudent(!isStudent)} color="primary" />
          </div>
          <div className="error-message">
            <p>{error}</p>
          </div>
          <div className="signup-fields">
            <div className="signup-field">
              <label htmlFor="userFullName">
                <b>Full Name</b>
              </label>
              <input
                className="signup-textbox"
                type="text"
                placeholder="Enter Full Name"
                name="userFullName"
                required
                onChange={(e) => setUserFullName(e.target.value)}
              />
            </div>
            <div className="signup-field">
              <label htmlFor={isStudent ? "admissionId" : "employeeId"}>
                <b>{isStudent ? "Admission ID" : "Employee ID"}</b>
              </label>
              <input
                className="signup-textbox"
                type="text"
                placeholder={
                  isStudent ? "Enter Admission ID" : "Enter Employee ID"
                }
                name={isStudent ? "admissionId" : "employeeId"}
                required
                onChange={(e) =>
                  isStudent
                    ? setAdmissionId(e.target.value)
                    : setEmployeeId(e.target.value)
                }
              />
            </div>
            <div className="signup-field">
              <label htmlFor="age">
                <b>Age</b>
              </label>
              <input
                className="signup-textbox"
                type="number"
                placeholder="Enter Age"
                name="age"
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="signup-field">
              <label htmlFor="dob">
                <b>Date of Birth</b>
              </label>
              <input
                className="signup-textbox"
                type="date"
                name="dob"
                required
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="signup-fields" style={{ marginTop: "20px" }}>
            <div className="signup-field">
              <label htmlFor="gender">
                <b>Gender</b>
              </label>
              <input
                className="signup-textbox"
                type="text"
                placeholder="Enter Gender"
                name="gender"
                required
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="signup-field">
              <label htmlFor="address">
                <b>Address</b>
              </label>
              <input
                className="signup-textbox"
                type="text"
                placeholder="Enter Address"
                name="address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="signup-field">
              <label htmlFor="mobileNumber">
                <b>Mobile Number</b>
              </label>
              <input
                className="signup-textbox"
                type="text"
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                required
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="signup-field">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                className="signup-textbox"
                type="email"
                placeholder="Enter Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup-field" style={{ marginBottom: "20px" }}>
              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                className="signup-textbox"
                type="password"
                minLength="6"
                placeholder="Enter Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
