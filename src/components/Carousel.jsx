import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const slides = [
    {
      img: "https://source.unsplash.com/1600x500/?electronics",
      title: "Top Electronics Deals",
    },
    {
      img: "https://source.unsplash.com/1600x500/?fashion",
      title: "Fashion Sale is Live",
    },
    {
      img: "https://source.unsplash.com/1600x500/?gadget",
      title: "Trending Gadgets",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
