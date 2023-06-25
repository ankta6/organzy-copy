import "./Our_Service_header.css";
import fashwash from "../../res/HomeImages/fashwash.jpg";
import candles from "../../res/HomeImages/candles.jpg";
import serum from "../../res/HomeImages/serum.jpg";
import lavenderc from "../../res/HomeImages/lavenderc.jpg";
import lipbalm from "../../res/HomeImages/lipbalm.jpg";
import mixfruit from "../../res/HomeImages/mixfruit.jpg";
import pina from "../../res/HomeImages/pinacoladacandle.jpg";
import brserum from "../../res/HomeImages/brserum.jpg";
import citruscandle from "../../res/HomeImages/citruscandle.jpg";




import React from "react";


const Our_Service_Header = () => {
  return (
    <div>
      <section id="blog">
        {/* Blog Container */}
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={fashwash} alt="image" />
            </div>
            <div className="blog-text">
              <a href="#" className="blog-title">
                <h5>CHARCOALFOAMINGFACEWASH</h5>
                <span>Rs. 300</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={candles} alt="image" />
            </div>
            <div className="blog-text">
              <a
                href="#"
                className="blog-title"
                style={{
                  color: "white",
                }}
              >
                <h5>CANDLES</h5>
                <span>Rs. 250</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={serum} alt="image" />
            </div>
            <div className="blog-text">
              <a
                href="/Services"
                className="blog-title"
                style={{
                  color: "white",
                }}
              >
                <h5>SERUM</h5>
                <span>Rs. 150</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={brserum} alt="image" />
            </div>
            <div className="blog-text">
              <a href="#" className="blog-title">
                <h5>BRIGHTENINGSERUM</h5>
                <span>Rs. 250</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={citruscandle} alt="image" />
            </div>
            <div className="blog-text">
              <a href="#" className="blog-title">
                <h5>citruscandle</h5>

                <span>Rs. 200</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={pina} alt="image" />
            </div>
            <div className="blog-text">
              <a
                href="#"
                className="blog-title"
                style={{
                  color: "white",
                }}
              >
                <h5>ShineandMoisturise</h5>
                <span>Rs.300</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={mixfruit} alt="image" />
            </div>
            <div className="blog-text">
              <a href="#" className="blog-title">
                <h5>SoakandDetox</h5>
                <span>Rs. 350</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={lipbalm} alt="image" />
            </div>
            <div className="blog-text">
              <a href="#" className="blog-title">
                <h5> LIPBALM</h5>

                <span>Rs. 220</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={lavenderc} alt="image" />
            </div>
            <div className="blog-text">
              <a
                href="#"
                className="blog-title"
                style={{
                  color: "white",
                }}
              >
                <h5>BODYSOAPS</h5>
                <span>Rs. 320</span>
              </a>
              <hr className="line"></hr>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Our_Service_Header;
