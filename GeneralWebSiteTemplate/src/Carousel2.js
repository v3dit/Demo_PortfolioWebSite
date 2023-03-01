import React, { useState } from "react";
import {
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://picsum.photos/id/12/1800/700",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/45/1800/700",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/69/1800/700",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

function Carousel2(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      {/*  */}
      <Row
        className="justify-content-center"
        style={{ margin: "210px 0px 210px 0px",color:`White` }}
      >
        <h1>
          Recent Work.
          <br />
        </h1>
        <p className="">
          Must explain to you how all this mistaken idea pleasure born and give
          you a complete account.
        </p>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Row>
    </>
  );
}

export default Carousel2;