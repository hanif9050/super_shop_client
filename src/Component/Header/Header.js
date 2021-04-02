import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Header.css";
const Header = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  return (
    <div className="header-con">
      <h1>Halal Fresh </h1>
      <div className="header-link">
        <ul>
          <li>
            <Link to="/" className="liLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/order" className="liLink">
              Order
            </Link>
          </li>
          <li>
            <Link to="/admin" className="liLink">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/login" className="liLink">
              Login
            </Link>
          </li>
          {loggedIn.email && <li>Email : {loggedIn.email}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
