import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";

const CarSlideShow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        variant="dark"
      >
        <Carousel.Item>
          <Image
            src="/carpic/merc1.png"
            alt="merc"
            width="1000"
            height="1000"
            className="d-block w-1000"
          />
          <Carousel.Caption>
            <h3 className="text-dark">Mercedes GLC300</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/carpic/c300.png"
            alt="c300"
            width="1000"
            height="1000"
            className="d-block w-1000"
          />
          <Carousel.Caption>
            <h3 className="text-dark">Mercedes C300 AMG</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/carpic/merc3.png"
            alt="merc3"
            width="1000"
            height="1000"
            className="d-block w-1000"
          />
          <Carousel.Caption>
            <h3 className="text-dark">Mercedes S450 Luxury</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarSlideShow;
