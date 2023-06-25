import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import organzy from "../../res/HomeImages/organzy.png";
import { LuSmartphone } from "react-icons/lu";
import { MdEmail, MdLocationPin } from "react-icons/md";

function Footer() {
  return (
    <div className="div-footer">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img
                src={organzy}
                className="navbarimages"
                alt=""
                height="200px"
                width="200px"
              />

              <h5 className="footer-title">
                Organzy was started in 2020 with a simple question – “Can great
                handmade skincare products be created and sold for a fair
                price?” <span>.Read more</span>
              </h5>
            </div>
            <div className="col-md-2 col-sm-5">
              <h5>
                <strong>PRODUCT</strong>
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Bath Salt</a>
                </li>
                <li>
                  <a href="/">Soap Bars</a>
                </li>
                <li>
                  <a href="/">Body Butters</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-5">
              <h5>
                <strong>FOLLOW US</strong>
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.instagram.com/organzyandco/">
                    <FaInstagram />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/people/Organzy/100076777936786/">
                    <FaFacebook />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/feed/">
                    <FaLinkedin />
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <h5>
                <strong>CONTACT</strong>
              </h5>
              <ul className="list-unstyled">
                <li className="icons">
                  <MdLocationPin />
                  Chandigarh, India
                </li>
                <li className="icons">
                  <LuSmartphone />
                  +918558880599
                </li>
                <li className="icons">
                  <MdEmail />
                  order@organzy.in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-light bg-dark py-4 mb-0">
        Copyright 2020 Organzy, All Right Reserved | Developed By{" "}
        <a href="https://www.antraajaal.com/">
          <span className="text-warning">Antraajaal</span>
        </a>
      </p>
    </div>
  );
}

export default Footer;
