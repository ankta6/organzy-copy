import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./tech.css";

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className="logo-carousel">
      <Slider {...settings}>
        <div>
          <p className="logo">
            "Taking Care Of Your Skin Is More Important Than Covering It Up."
          </p>
        </div>
        <div>
          <p className="logo">
            "Life Is Like A Bar Of Soap, Once you think You've Gota Hold Of It,
            It Slips Away. "
          </p>
        </div>
        <div>
          <p className="logo">
            "I Like My Products Like I Like My People. Nontoxic."
          </p>
        </div>
        <div>
          <p className="logo">
            "Skin Care Is Not An Expense. It's An Investment"
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default LogoCarousel;
