import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { Stack } from "react-bootstrap";

export const EachCard = ({ img, title, text, btn }: any) => {
  return (
    <Stack>
      <Row
        style={{
          maxWidth: "100%",
        }}
      >
        <Col span={5} style={{ margin: 10 }}>
          <div
            className="card"
            style={{
              width: "18rem",
              height: "450px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img className="card-img-top" src={img} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded"
              style={{
                marginBottom: 15,
                minWidth: "250px",
              }}
            >
              {btn}
            </a>
          </div>
        </Col>
      </Row>
    </Stack>
  );
};
const CarCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <h2
        className="text-light"
        style={{ marginTop: "2%", marginLeft: "15px" }}
      >
        Tìm hiểu thêm
      </h2>
      <div
        style={{
          padding: 25,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <EachCard
          img="https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1858074757.component.damq6.3379780808184.jpg/mercedes-amg-c-43-4matic.jpg"
          title="Mercedes-Benz-AMG C 43 4MATIC của riêng bạn đang chờ"
          text="Quay trở về Cửa hàng trực tuyến, chỉ vài bước để chạm đến chiếc Mercedes-Benz của bạn."
          btn="Tìm xe có sẵn"
        />
        <EachCard
          img="https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1880698007.component.damq6.3382764017350.jpg/simple-teaser-item-thumbnail-offers-campaign.jpg"
          title="Khám phá các ưu đãi hiện có"
          text="Tận hưởng những ưu đãi đặc quyền từ Mercedes-Benz, áp dụng cho hầu hết các dòng sản phẩm."
          btn="Tìm xe có sẵn cùng ưu đãi"
        />
        <EachCard
          img="https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1428272920.component.damq2.3380687894217.jpg/GLC%20X254.jpg"
          title="Mercedes-Benz GLC mới"
          text="Khi mọi đỉnh cao chỉ là cuộc dạo chơi."
          btn="Tìm hiểu thêm"
        />
        <EachCard
          img="https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1_1992557652.component.damq6.3379862350659.png/simple-teaser-item-loyalty-program.png"
          title="Tri ân khách hàng thân thiết"
          text="Ưu đãi hấp dẫn - áp dụng cho các dòng xe Mercedes-Benz, AMG, Maybach và xe điện EQ."
          btn="Khám phá ưu đãi"
        />
      </div>
    </div>
  );
};

export default CarCard;
