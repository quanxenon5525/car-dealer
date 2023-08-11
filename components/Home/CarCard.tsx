import { ImageCar } from "@/pages/api/fakeData";
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
        {ImageCar.map((detail: any) => {
          return (
            <>
              <EachCard
                img={detail.img}
                title={detail.title}
                text={detail.text}
                btn={detail.btn}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CarCard;
