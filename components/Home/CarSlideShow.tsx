import { Image } from "antd";
import Carousel from "react-bootstrap/Carousel";

const CarSlideShow = () => {
  return (
    <div>
      <Carousel fade variant="dark" style={{ backgroundColor: "white" }}>
        <Carousel.Item
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src="/carpic/merc1.png" width={1000} preview={false} />
          <Carousel.Caption>
            <h3 className="text-dark">Mercedes GLC300</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ display: "flex", justifyContent: "center" }}>
          <Image src="/carpic/c300.png" width={1000} preview={false} />
          <Carousel.Caption>
            <h3 className="text-dark">Mercedes C300 AMG</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ display: "flex", justifyContent: "center" }}>
          <Image src="/carpic/merc3.png" width={1000} preview={false} />
          <Carousel.Caption>
            <h3 className="text-dark">Mercedes S450 Luxury</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarSlideShow;
