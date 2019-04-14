import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slideOne.jpg";
import slide_two from "../../resources/images/slideTwo.jpg";

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 750,
    dots: true
  };

  return (
    <div
      className="carousel_wrapper"
      style={{ height: `${window.innerHeight}px`, overflow: "hidden" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${slide_one})`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${slide_two})`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
