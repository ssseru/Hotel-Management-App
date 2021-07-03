import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from "reactstrap";

const items = [
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    altText: "Hotel front",
    caption: "",
  },
  {
    src: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    altText: "AC Room",
    caption: "",
  },
  {
    src: "https://www.teahub.io/photos/full/17-171828_hotel-room.jpg",
    altText: "AC Room",
    caption: "",
  },
];

const Home = (props) => {
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
        <img src={item.src} alt={item.altText} style={{ width: "100%" }} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="container ">
      <br />
      <div className="home-header">
        <h2 className="home-header-heading">The Platinum Lounge</h2>
      </div>
      <hr />
      <Container>
        <Row>
          <Col sm={{ size: 6 }}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
          </Col>
          <Col sm={{ size: 6 }}>
            <br />
            <Container>
              The Platinum Lounge is located near Tiantan Park, just a 10-minute
              walk from the National Center for the Performing Arts and
              Tian'anmen Square. Built in 1956 it has old school charm and many
              rooms still feature high, crown-molded ceilings. A 2012 renovation
              brought all rooms and services up to modern day scratch and
              guestrooms come equipped with free Wi-Fi and all the usual
              amenities required for a comfortable stay. Platinum Lounge is a
              quiet, comfortable hotel located near the Ecological Sanctuary and
              the Monteverde Butterfly Gardens in an area called Cerro Plano, an
              ideal location half way between the Monteverde Cloud Forest
              reserve and the main village of the Monteverde area (Santa Elena),
              in close proximity to several restaurants and activities. All
              rooms have private bathrooms with hot water.
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
