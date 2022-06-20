import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShop,
  faCartShopping,
  faAddressCard,
  faBars,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  useEffect(() => {
    window.onclick = (e) => {
      e.target.localName === "path" || e.target.localName === "svg"
        ? setShowMenu(!showMenu)
        : setShowMenu(false);
    };
  });
  return (
    <>
      <div className="nav">
        <div className="left">
          <div className="logo">
            <img src="assest/logo.png" className="img-logo" alt="Dolce Shop" />
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} />

              <Link to="/">Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faShop} />

              <Link to="/products">Products</Link>
            </li>
            {user && (
              <li>
                <FontAwesomeIcon icon={faCartShopping} />
                <Link to="/cart">Cart</Link>
              </li>
            )}
            {user && (
              <li>
                <FontAwesomeIcon icon={faAddressCard} />

                <Link to="/orders">Orders</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="mob-menu">
          <FontAwesomeIcon icon={faBars} id="menu" />
        </div>
        {!user && (
          <div className="right">
            <Link className="logLink" to="/login">
              <FontAwesomeIcon icon={faRightToBracket} />
              <span>log in</span>
            </Link>
          </div>
        )}
        {user && (
          <button className="logout" onClick={logout}>
            <FontAwesomeIcon icon={faRightToBracket} />
            <span>log out</span>
          </button>
        )}
      </div>
      {showMenu && (
        <div className="mob-list">
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
      )}
    </>
  );
}
