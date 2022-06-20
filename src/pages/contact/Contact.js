import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      tel === "" ||
      email === "" ||
      review === ""
    ) {
      setError(true);
      // console.log(error);
    } else {
      setError(false);
      console.log(firstName, lastName, tel, email, review);
      setFirstName("");
      setLastName("");
      setTel("");
      setEmail("");
      setReview("");
    }
  };
  return (
    <div className="contact" onSubmit={handleSubmit}>
      <h3>We d Love To Know  What You Think </h3>
      <form>
        <div className="formitem">
        <div className="formGroup">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        {/* {error && <span>enter your first name to submit</span>} */}
        <div className="formGroup">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        </div>
        {/* {error && <span>enter your last name to submit</span>} */}
        <div className="formitem">
        <div className="formGroup">
          <label htmlFor="contact">Contact tel.</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
        </div>
        {/* {error && <span>enter your tel to submit</span>} */}
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        </div>
        
        <div className="formGroup">
          <label htmlFor="review">Your review</label>
          <textarea
            id="review"
            onChange={(e) => setReview(e.target.value)}
            value={review}
          />
        </div>
        {error && <span>complete the missing field before submit</span>}
        <div className="formGroupc">
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check"> May we contact you? </label>
        </div>
        <div className="formGroupd">
          <button>
            Send Your Feedback
          </button>
          <p>Thanks for Supmitting</p>
        </div>
      </form>
    </div>
  );
}
