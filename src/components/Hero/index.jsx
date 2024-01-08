import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import Card from "../ui/card";

const SimpleSlider = () => {
  const headingSlides = [
    {
      subHeading: "Welcome to",
      heading: "Indegene Digital Summit 2023",
      subChildHeading: "September 21-22, 2023",
    },
    {
      subHeading: "Practitioners' views on",
      heading: "Launch Excellence",
      subChildHeading: "15+ Sessions | 40+ Speakers | Virtual",
    },
    {
      heading:
        "Engaging discussions on pressing topics in life sciences commercialization",
    },
  ];

  const imgSlides = [
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "cubic-bezier(.84, 0, .08, .99)",
  };

  return (
    <div className="con">
      <div className="text-slider-container">
        <div className="text-slider-wrapper">
          <div className="text-slider">
            <Slider {...settings}>
              {headingSlides.map((slide, index) => (
                <div className="text-slide">
                  <h5>{slide?.subHeading}</h5>
                  <h2>{slide?.heading}</h2>
                  <p>{slide?.subChildHeading}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Card />
      </div>

      {/* <div className="slider-control">
        <div className="prev">
          <button type="button">
            <ion-icon name="arrow-back"></ion-icon>
          </button>
        </div>
        <div className="next">
          <button type="button">
            <ion-icon name="arrow-forward"></ion-icon>
          </button>
        </div>
      </div> */}
      <div className="blocks">
        {[1, 2].map((index) => (
          <div className={`block-${index}`} key={index}></div>
        ))}
      </div>
      <div className="overlay"></div>
      <div className="image-slider">
        <Slider {...settings}>
          {imgSlides.map((slide, index) => (
            <div key={index}>
              <div
                className="image-slide"
                style={{
                  background: `url(${slide}) no-repeat 50% 50%`,
                  height: "100vh",
                }}
              ></div>
            </div>
          ))}
        </Slider>
        <p className="support">A #FutureReadyHealthcare initiative</p>
      </div>
    </div>
  );
};

export default SimpleSlider;
