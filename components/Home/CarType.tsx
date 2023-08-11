import { Badge } from "antd";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

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
      <div className="mt-3">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="bg-dark">
                  <Nav.Link eventKey="first" className="text-light">
                    Sedan
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-dark">
                  <Nav.Link eventKey="second" className="text-light">
                    Suv
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default CarType;
