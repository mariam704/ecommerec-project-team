import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import { Base_URL } from "../../service/BaseUrl";
import { useLogin } from "../../hooks/useLogin";

const isEmailValid = (value) =>
  value.trim() !== "" && value.includes("@" || ".com");
const isDataValid = (value) => value.trim() !== "";

export default function Login() {
  // const [err, setErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, error } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid(user.email)) {
      // setError(true);
      setPasswordErr(false);
      setEmailErr(true);
      return;
    }
    if (!isDataValid(user.password)) {
      setPasswordErr(true);
      setEmailErr(false);
    } else {
      // setError(false);
      setEmailErr(false);
      setPasswordErr(false);
      login(user.email, user.password);
      setUser({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="login">
      <div className="cart-log"></div>
      <div className="form-log">
        <form onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <div className="formControl">
            <label style={{ textAlign: "center" }} htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
              value={user.email}
              style={{ outline: emailErr ? "red solid 1px" : "", borderRadius: 10 }}
            />


            <label style={{ textAlign: "center" }} htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
              value={user.password}
              style={{ outline: passwordErr ? "red solid 1px" : "", borderRadius: 10 }}
            />
          </div>
          {emailErr && (
            <span style={{ color: "red" }}>Please enter valid email</span>
          )}
          {passwordErr && (
            <span style={{ color: "red" }}>please enter your password</span>
          )}
          {/* {err && <span className="error">Enter your data first</span>} */}
          <span>
            don't have an account? <Link style={{textDecoration:"none",color:"darkkhaki"}} to="/signup">Sign Up</Link>
          </span>

          <div style={{margin:"auto",width:100}}>
            <button style={{backgroundColor:"#eee",padding:5,borderRadius:5,width:100,fontSize:18,fontWeight:"bold"}}>Submit</button>

          </div>
        </form></div>

    </div>
  );
}
