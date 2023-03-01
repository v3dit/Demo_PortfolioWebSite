import React from "react";
import "./slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ReactCardSlider = () => {
  const slides = [
    {
      image: "https://picsum.photos/id/1003/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1004/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1005/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1006/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1000/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1008/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1009/700",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1010/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
    {
      image: "https://picsum.photos/id/1011/350",
      title: "Hey",
      description: "loremhvbsguafbHBfub",
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 555;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 555;
  };

  return (
    <>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />

        <div id="slider">
          {slides.map((slides, index) => {
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slides.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="slider-card-title">{slides.title}</div>
                <div className="slider-card-description">
                  {slides.description}
                </div>
              </div>
            );
          })}
        </div>

        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default ReactCardSlider;