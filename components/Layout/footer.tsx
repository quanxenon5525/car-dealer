import Link from "next/link";
import { ArrowupIcon } from "../assets/ArrowupIcon";
import { ListGroup } from "react-bootstrap";
import { FacebookIcon } from "../assets/FacebookIcon";
import { YoutubeIcon } from "../assets/YoutubeIcon";
import { InsIcon } from "../assets/InsIcon";
import { LinkInIcon } from "../assets/LinkInIcon";

export const MenuFooter = ({
  title,
  body1,
  body2,
  body3,
  body4,
  body5,
}: any) => {
  return (
    <ListGroup style={{ alignItems: "flex-start" }}>
      <ListGroup.Item style={{ backgroundColor: "black" }}>
        <h5 className="text-light">{title}</h5>
      </ListGroup.Item>
      <ListGroup.Item
        className="text-light"
        style={{ backgroundColor: "black" }}
      >
        {body1}
      </ListGroup.Item>
      <ListGroup.Item
        className="text-light"
        style={{ backgroundColor: "black" }}
      >
        {body2}
      </ListGroup.Item>
      <ListGroup.Item
        className="text-light"
        style={{ backgroundColor: "black" }}
      >
        {body3}
      </ListGroup.Item>
      <ListGroup.Item
        className="text-light"
        style={{ backgroundColor: "black" }}
      >
        {body4}
      </ListGroup.Item>
      <ListGroup.Item
        className="text-light"
        style={{ backgroundColor: "black" }}
      >
        {body5}
      </ListGroup.Item>
    </ListGroup>
  );
};

export const BottomFotter = ({ text1, text2, text3, text4 }: any) => {
  return (
    <div
      style={{
        margin: "2%",
        borderTop: "0.1px solid white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          marginTop: "2%",
        }}
      >
        <p className="text-light">{text1}</p>
        <p className="text-light">{text2}</p>
        <p className="text-light">{text3}</p>
        <p className="text-light">{text4}</p>
      </div>
      <div style={{ marginTop: "1%" }}>
        <button className="btn text-light">
          <i>
            <FacebookIcon />
          </i>
        </button>
        <button className="btn text-light">
          <i>
            <YoutubeIcon />
          </i>
        </button>
        <button className="btn text-light">
          <i>
            <InsIcon />
          </i>
        </button>
        <button className="btn text-light">
          <i>
            <LinkInIcon />
          </i>
        </button>
      </div>
    </div>
  );
};
const footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black" }} className="card text-center">
        <div className="card-header">
          <Link href="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                alignItems: "center",
              }}
            >
              <ArrowupIcon />
              <h6>Lên trên</h6>
            </div>
          </Link>
        </div>
        <div
          className="card-body"
          style={{ border: "0.1px solid white", margin: "3%" }}
        >
          <div className="card w-100" style={{ backgroundColor: "black" }}>
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h5 className="card-title text-light">
                  Giữ liên lạc với chúng tôi.
                </h5>
                <p className="card-text text-secondary">
                  Các thông tin hiện tại được điều chỉnh theo sở thích của bạn.
                </p>
              </div>
              <a
                href="#"
                className="btn btn-primary"
                style={{ display: "flex", alignItems: "center" }}
              >
                Đăng ký nhận bản tin
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            maxWidth: "90%",
          }}
        >
          <MenuFooter
            title="Mua xe"
            body1="Xe đã qua sử dụng"
            body2="Xe mới"
            body3="Chọn cấu hình xe"
            body4="Bảng giá & brochue"
          />
          <MenuFooter
            title="Tư vấn mua xe"
            body1="Yêu cầu tư vấn"
            body2="Đăng ký lái thử"
            body3="Tìm nhà phân phối gần nhất"
          />
          <MenuFooter
            title="Dịch vụ"
            body1="Đặt hẹn dịch vụ"
            body2="Ưu đãi đặc biệt"
            body3="Phụ kiện chính hãng"
            body4="Hướng dẫn sử dụng dành cho chủ xe"
            body5="Triệu hồi xe"
          />
          <MenuFooter
            title="Các dòng xe"
            body1="SUV"
            body2="Sedan"
            body3="Mercedes-AMG"
            body4="Mercedes-Maybach"
          />
          <MenuFooter
            title="Giới thiệu"
            body1="Liên hệ"
            body2="Câu chuyện của chúng tôi"
            body3="Phát triển bền vững & tương lai"
            body4="Tin tức & sư kiện"
          />
        </div>
        <div className="card-footer text-muted">
          <BottomFotter
            text1="Bản quyền nội dung"
            text2="Cài đặt"
            text3="Quyền riêng tư và bảo vệ dữ liệu"
            text4="Thông tin pháp lý"
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
