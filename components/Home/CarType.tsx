import { Badge } from "antd";
import React from "react";

const CarType = () => {
  return (
    <div className="mt-3" style={{ margin: "15px" }}>
      <h4>Các dòng xe Mercedes-Benz</h4>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-dark">
          Tất cả dòng xe
        </button>
        <button type="button" className="btn btn-light">
          AMG
        </button>
        <button type="button" className="btn btn-light">
          Maybach
        </button>
        <button type="button" className="btn btn-light">
          Các dòng xe mới
        </button>
      </div>
    </div>
  );
};

export default CarType;
