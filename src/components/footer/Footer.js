import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="address">
          <h3>Our Address</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            repellendus.
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+201234567890</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+201234567890</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>contact@info.com</span>
            </li>
          </ul>
        </div>
        <div className="social">
          <Link to="#">
            <FontAwesomeIcon
              icon="fa-brands fa-facebook"
              size="3x"
              color="#2374e1"
            />
          </Link>
          <Link to="#">
            <FontAwesomeIcon
              icon="fa-brands fa-youtube"
              size="3x"
              color="red"
            />
          </Link>
          <Link to="#">
            {/* <i className="fab fa-linkedin" style={{ color: "#0a66c2" }}></i> */}
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin"
              size="3x"
              color="#0a66c2"
            />
          </Link>
          <Link to="#">
            {/* <i className="fab fa-google-plus" style={{ color: "#de5145" }}></i> */}
            <FontAwesomeIcon
              icon="fa-brands fa-google-plus"
              size="3x"
              color="#de5145"
            />
          </Link>
          <Link to="#">
            <i
              className="fab fa-twitter"
              style={{ color: "rgb(29 155 240)" }}
            ></i>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <span>&copy;copyright 2022 BrandName</span>
      </div>
    </div>
  );
}
