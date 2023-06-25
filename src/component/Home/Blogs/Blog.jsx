import "./Blog.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image from "../../../res/Our_Service_Images/Blog.png";
import fashwash from "../../../res/Our_Service_Images/fashwash.jpg";
import candles from "../../../res/Our_Service_Images/candles.jpg";
import serum from "../../../res/Our_Service_Images/serum.jpg";
import bathsalt from "../../../res/Our_Service_Images/bathsalt.jpg";
import BODYBUTTERS from "../../../res/Our_Service_Images/bodybutters.jpg";
import bodysoap from "../../../res/Our_Service_Images/bodysoap.jpg";
import { useHistory } from "react-router-dom";
import React from "react";

const Blog = () => {
  const history = useHistory();
  const navigate = () => {
    history.push("/ContactUs")
  }
  return (
    <div>
      <section id="blog">
        <div className="blog-heading">
          <h3>Catagories</h3>
          <div className="underline"></div>
        </div>

        {/* Blog Container */}
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={fashwash} alt="image" />
            </div>
            <div className="blog-text">
              <a href="/Services" className="blog-title" onClick={navigate}>
                <h5>FACEWASH</h5>
                <span>Shine and Moisturise</span>
              </a>
              <hr className="line"></hr>

              <p>
                A blend of plant butters and oils helps deeply moisturise skin,
                delays the signs of ageing, improves both the skin's texture and
                tonicity.
              </p>
              <hr className="line"></hr>
              <a
                onClick={navigate}
                href="/Services"
                className="btn1"
                style={{
                  color: "white",
                }}
              >
                Shop
              </a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={candles} alt="image" />
            </div>
            <div className="blog-text">
              <a
                onClick={navigate}
                href="/Services"
                className="blog-title"
                style={{
                  color: "white",
                }}
              >
                <h5>CANDLES</h5>
                <span>Soak and Detox</span>
              </a>
              <hr className="line"></hr>

              <p>
                These bath salt and foot soak helps relax and soothe aching
                muscles. It also helps remineralise the skin and act as a mood
                elevator.
              </p>
              <hr className="line"></hr>

              <a
                href="/Services"
                className="btn1"
                style={{
                  color: "white",
                }}
              >
                Shop
              </a>
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
                <span>Refresh and Moisturise</span>
              </a>
              <hr className="line"></hr>

              <p>
                Our restorative soap bar gently cleanses the skin, regulates
                sebum, helps reduce breakouts. It is suitable for all skin
                types.
              </p>
              <hr className="line"></hr>

              <a
                href="/Services"
                className="btn1"
                style={{
                  color: "white",
                }}
              >
                Shop
              </a>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={bathsalt} alt="image" />
            </div>
            <div className="blog-text">
              <a href="/Services" className="blog-title">
                <h5>BATHSALTS</h5>
                <span>Soak and Detox</span>
              </a>
              <hr className="line"></hr>

              <p>
                These bath salt and foot soak helps relax and soothe aching
                muscles. It also helps remineralise the skin and act as a mood
                elevator.
              </p>
              <hr className="line"></hr>

              <a
                href="/Services"
                className="btn1"
                style={{
                  color: "white",
                }}
              >
                Shop
              </a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={BODYBUTTERS} alt="image" />
            </div>
            <div className="blog-text">
              <a href="/Services" className="blog-title">
                <h5>BODYBUTTERS</h5>

                <span>Refresh and Moisturise</span>
              </a>
              <hr className="line"></hr>
              <p>
                A blend of plant butters and oils helps deeply moisturise skin,
                delays the signs of ageing, improves both the skin's texture and
                tonicity.
              </p>
              <hr className="line"></hr>
              <a
                href="/Services"
                className="btn1"
                style={{
                  color: "white",
                }}
              >
                Shop
              </a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={bodysoap} alt="image" />
            </div>
            <div className="blog-text">
              <a
                href="/Services"
                className="blog-title"
                style={{
                  color: "white",
                }}
              >
                <h5>BODYSOAPS</h5>
                <span>Shine and Moisturise</span>
              </a>
              <hr className="line"></hr>

              <p>
                Our restorative soap bar gently cleanses the skin, regulates
                sebum, helps reduce breakouts. It is suitable for all skin
                types.
              </p>
              <hr className="line"></hr>

              <a
                href="/Services"
                className="btn1"
                style={{
                  color: "white",
                }}
              >
                Shop
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
