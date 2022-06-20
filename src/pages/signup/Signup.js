import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
// import { Base_URL } from "../../service/BaseUrl";
import { useSignup } from "../../hooks/useSignup";

const isEmailValid = (value) =>
  value.trim() !== "" && value.includes("@" || ".com");
const isDataValid = (value) => value.trim() !== "";

export default function Signup() {
  // const [error, setError] = useState(false);
  const { signup } = useSignup();
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [shipErr, setShipErr] = useState(false);
  const [billErr, setBillErr] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    phone: "",
    shippingAddress: "",
    billingAddress: "",
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDataValid(user.name)) {
      setEmailErr(false);
      setPassErr(false);
      setPhoneErr(false);
      setNameErr(true);
    }
    if (!isEmailValid(user.email)) {
      setEmailErr(true);
    }
    if (!isDataValid(user.password)) {
      setEmailErr(false);
      setPassErr(true);
    }
    if (!isDataValid(user.phone)) {
      setEmailErr(false);
      setPassErr(false);
      setPhoneErr(true);
    }
    if (!isDataValid(user.billingAddress)) {
      setEmailErr(false);
      setPassErr(false);
      setPhoneErr(false);
      setNameErr(false);
      setShipErr(false);
      setBillErr(true);
    }
    if (!isDataValid(user.shippingAddress)) {
      setEmailErr(false);
      setPassErr(false);
      setPhoneErr(false);
      setNameErr(false);
      setShipErr(true);
    }

    // if (
    //   !isEmailValid(user.email) ||
    //   !isDataValid(user.password) ||
    //   !isDataValid(user.phone) ||
    //   !isDataValid(user.name) ||
    //   !isDataValid(user.shippingAddress) ||
    //   !isDataValid(user.billingAddress)
    // ) {
    //   // setError(true);
    //   return;
    // }
    else {
      // console.log(user);
      // setError(false);
      // console.log(user);
      signup(user);

      setUser({
        name: "",
        email: "",
        password: "",
        billingAddress: "",
        shippingAddress: "",
        phone: "",
      });
      setBillErr(false);
      setEmailErr(false);
      setNameErr(false);
      setPassErr(false);
      setPhoneErr(false);
      setShipErr(false);
    }
  };
  return (
    <div className="signup">

      <div className="form-log">
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: "darkkhaki" }}>Signup</h2>
          {/* {error && <span className="errorMSG">Invalid or missing fields</span>} */}
          <div className="formControl">
            <div className="textform">
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  style={{ border: nameErr ? "1px solid red " : "", borderRadius: 10 }}
                  id="name"
                  onChange={(event) => {
                    setUser({ ...user, name: event.target.value });
                  }}
                  value={user.name}
                  placeholder="ex: Jane Doe"
                />
              </div>

            </div>
            <div className="textform">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  type="email"
                  name=""
                  id="email"
                  onChange={(event) => {
                    setUser({ ...user, email: event.target.value });
                  }}
                  value={user.email}
                  style={{ border: emailErr ? "1px solid red " : "", borderRadius: 10 }}
                  placeholder="example@gmail.com"
                />
              </div>


            </div>
            <div className="textform">
              <div>
                <label htmlFor="password">Password</label>

              </div>
              <div>
                <input
                  type="password"
                  name=""
                  id="password"
                  onChange={(event) => {
                    setUser({ ...user, password: event.target.value });
                  }}
                  value={user.password}
                  style={{ border: passErr ? "1px solid red " : "", borderRadius: 10 }}
                  placeholder="********"
                />
              </div>

            </div>
            <div className="textform">
              <div>
                <label htmlFor="phone">Phone</label>

              </div>
              <div>
                <input
                  type="tel"
                  name=""
                  id="phone"
                  onChange={(event) => {
                    setUser({ ...user, phone: event.target.value });
                  }}
                  value={user.phone}
                  style={{ border: phoneErr ? "1px solid red " : "", borderRadius: 10 }}
                  placeholder="ex: 012345678"
                />
              </div>

            </div>
            <div className="textform">
              <div>
                <label htmlFor="billingAddress">billing Address</label>

              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id="billingAddress"
                  onChange={(event) => {
                    setUser({ ...user, billingAddress: event.target.value });
                  }}
                  value={user.billingAddress}
                  style={{ border: billErr ? "1px solid red " : "", borderRadius: 10 }}
                  placeholder="Apt, floor no"
                />
              </div>

            </div>
            <div className="textform">

              <div>
                <label htmlFor="shippingAddress">Shipping Address</label>

              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id="shippingAddress"
                  onChange={(event) => {
                    setUser({ ...user, shippingAddress: event.target.value });
                  }}
                  value={user.shippingAddress}
                  style={{ border: shipErr ? "1px solid red " : "", borderRadius: 10 }}
                  placeholder="Apt, floor no"
                />
              </div>

            </div>
          </div>
          {nameErr && (
            <span style={{ color: "red" }}>please enter your userName</span>
          )}
          {emailErr && (
            <span style={{ color: "red" }}>please enter your email</span>
          )}
          {passErr && (
            <span style={{ color: "red" }}>please enter your password</span>
          )}
          {phoneErr && (
            <span style={{ color: "red" }}>please enter your phone number</span>
          )}
          {billErr && (
            <span style={{ color: "red" }}>
              please enter your billing address
            </span>
          )}
          {shipErr && (
            <span style={{ color: "red" }}>
              please enter your shipping address
            </span>
          )}

          <span className="registered">
            Already have an account? <Link style={{ textDecoration: "none", color: "darkkhaki" }} to="/login">Log In</Link>
          </span>
          {/* <button>Submit</button> */}
          <button style={{ backgroundColor: "#eee", padding: 5, borderRadius: 5, width: 100, fontSize: 18, fontWeight: "bold" }}>Submit</button>

        </form>
      </div>
    </div>
  );
}
