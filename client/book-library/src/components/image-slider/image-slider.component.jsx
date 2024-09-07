import React from "react";
import { Carousel } from "react-bootstrap";

import "./image-slider.styles.css";

const ImageSlider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Library Books"
          />
          <Carousel.Caption>
            <h3>Explore Our Collection</h3>
            <p>Discover a wide range of books across various genres.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Reading Area"
          />
          <Carousel.Caption>
            <h3>Comfortable Reading Spaces</h3>
            <p>Enjoy your reading time in our cozy and quiet areas.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Digital Resources"
          />
          <Carousel.Caption>
            <h3>Access Digital Resources</h3>
            <p>Utilize our digital library for e-books and online journals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
