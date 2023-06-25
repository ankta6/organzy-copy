import React from "react";
import "./Our_Services.css";
import organzy from "./organzy.png";

function Welcome2() {
  return (
    <div className="diva">
      <div className="div2a">
        <div className="divca">
          <p className="titlea">
            <img src={organzy} alt="" height="400px" width="800px" />
          </p>
          <p className="texta">Get 10% OFF On Your First Purchase</p>
          <div className="btn">
            <button type="submit" className="custom-button">
              Buy Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome2;
