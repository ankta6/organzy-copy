import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="div1">
      <div className="divc">
        <div className="container-fluid div2">
          <p className="title">About Us</p>
          <hr className="hrline" />
          {/* <br /> */}
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-4">
              <p className="text">
                ORGANZY WAS STARTED IN 2020 WITH A SIMPLE QUESTION – “CAN GREAT
                HANDMADE SKINCARE PRODUCTS BE CREATED AND SOLD FOR A FAIR
                PRICE?”.
              </p>
            </div>

            <div className="col-6 col-md-4">
              <div className="div-p">
                <h3 className="title1">HUMBLE BEGINING</h3>
                <p className="para">
                  Organzy was started in 2020 with a simple question – “Can
                  great handmade skincare products be created and sold for a
                  fair price?”. Over the years we noticed the cost of handmade
                  soaps started to sore while the size of the soaps was starting
                  to shrink. We began our journey to answer this question.Since
                  our products are handmade, we know exactly what goes into each
                  one. Read More
                </p>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <h3 className="title2">OUR BIG MISSION</h3>
              <p className="para">
                One of the gratifying things about being a small company is that
                we’re not in it solely for the money (though that’s nice too).
                We also take immense pleasure in looking after our people and
                our planet. We make it our responsibility to help make the world
                a better place, by not only tickling the senses, but by raising
                the bar too. And we don’t just mean soap. Afterall we owe it to
                our planet. Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
