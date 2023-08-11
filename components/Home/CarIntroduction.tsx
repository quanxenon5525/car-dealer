import { Button, Image, Space } from "antd";

const CarIntroduction = () => {
  return (
    <div className="mw-100" style={{ position: "relative" }}>
      <Image src="/carpic/background.png" />
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          transform: "translate(-50%, -50%)",
          // maxWidth: "150px",
          maxHeight: "5%",
        }}
      >
        <h3 className="text-light">Lựa chọn là của bạn</h3>
        <h6 className="text-light">
          Mercedes GTR - Năng lực mạnh mẽ, bức phá không giới hạn
        </h6>
        <Space wrap>
          <Button type="primary" size="large" shape="round">
            Tìm xe có sẵn
          </Button>
          <Button size="large" shape="round">
            Tìm hiểu về xe
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default CarIntroduction;
