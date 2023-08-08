import React, { useState } from "react";
import { MaterialSymbolsDirectionsCarOutline } from "../assets/Caricon";
import Link from "next/link";
import { Input, Menu, MenuProps, MenuTheme, Switch } from "antd";
import { BuyIcon } from "../assets/BuyIcon";
import { AdviceIcon } from "../assets/AdviceIcon";
import { ServiceIcon } from "../assets/ServiceIcon";

const { Search } = Input;

export const items: MenuProps["items"] = [
  {
    label: "Các dòng xe",
    key: "type",
    icon: <MaterialSymbolsDirectionsCarOutline />,
  },
  {
    label: "Mua trực tuyến",
    key: "buyonl",
    icon: <BuyIcon />,
    disabled: true,
  },
  {
    label: "Tư vấn mua xe",
    key: "tele",
    icon: <AdviceIcon />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Dịch vụ",
    key: "service",
    icon: <ServiceIcon />,
  },

  {
    label: (
      <a
        href="https://www.mercedes-benz.com.vn/?group=all&subgroup=all.saloon&view=BODYTYPE"
        target="_blank"
        rel="noopener noreferrer"
      >
        Thế giới Mercedes
      </a>
    ),
    key: "alipay",
  },
];

const Navbar = () => {
  const onSearch = (value: string) => console.log(value);

  const [current, setCurrent] = useState("type");
  const [theme, setTheme] = useState<MenuTheme>("dark");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "1%",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="text-decoration-none"
          style={{
            display: "flex",
          }}
        >
          <img style={{ maxWidth: "15%" }} src="/logo.png" />
          <p
            className="text-light"
            style={{ alignItems: "center", margin: 10, display: "flex" }}
          >
            Mercedes Benz
          </p>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <h6 className="text-light" style={{ fontSize: "12px" }}>
            © 2022. Mercedes-Benz AG. Bảo lưu mọi quyền (Thông tin xuất bản)
          </h6>
          <Search
            placeholder="Từ khoá tìm kiếm / OnlineCode từ công cụ chọn cấu hình xe"
            onSearch={onSearch}
            style={{ width: 200 }}
            allowClear
          />
          <Switch
            style={{ display: "flex", alignItems: "center" }}
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Sáng"
            unCheckedChildren="Tối"
          />
        </div>
      </div>

      <div
        style={{
          padding: 5,
          border: "1px solid grey",
          borderLeft: 0,
          borderRight: 0,
          backgroundColor: "black",
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "black",
            // color: "white",
          }}
          theme={theme}
          items={items}
        />
      </div>
      <div
        style={{
          padding: 5,
          border: "1px solid grey",
          borderLeft: 0,
          borderRight: 0,
          backgroundColor: "black",
        }}
      >
        <h6
          className="text-light"
          style={{
            fontSize: "16px",
            margin: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Khám phá những
          <Link
            href="/voucher"
            style={{
              margin: "0 5px",
              textDecoration: "underline",
              color: "inherit",
            }}
          >
            ưu đãi tốt nhất
          </Link>
          tại cửa hàng trực tuyến
        </h6>
      </div>
    </div>
  );
};

export default Navbar;
