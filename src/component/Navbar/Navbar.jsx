import React from "react";
import "./Navbar.css";
import organzy from "../../res/HomeImages/organzy.png";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={organzy} className="navbarimage" alt="" />
        </a>
        <div className="navbar-upper ms-auto"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-tog">
            <MenuIcon className="menu" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AboutUs">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ContactUs">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ShoppingCartIcon className="cart-icon" />
                <span>0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
