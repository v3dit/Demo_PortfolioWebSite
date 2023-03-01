import React from "react";
import { Row, Col, CardImg, CardBody, CardTitle } from "reactstrap";

const Blogs = () => {
  const color1 = "rgb(2550, 255, 255)";
  const color2 = "rgb(32, 44, 59)";

  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`,
          height: `100%`,
          padding: `3% 9% 3% 9%`,
          alignItems: `center`,
          alignContent: `center`,
        }}
      >
        <Row
          className="justify-content-center align-content-center"
          style={{ padding: `3% 0 5% 0` }}
        >
          <Col>
            <CardImg src="https://picsum.photos/id/100/580/490" alt="..." />
          </Col>
          <Col
            style={{
              padding: `1% 2% 1% 2%`,
              borderLeft: `1px solid black`,
              backgroundColor: `rgb(12, 24, 39,0.1)`,
            }}
          >
            <CardBody>
              <CardTitle tag={"h2"}>Title</CardTitle>
              <CardBody tag={"h5"}>Paragraph</CardBody>
            </CardBody>
          </Col>
        </Row>
        <Row
          className="justify-content-center align-content-center"
          style={{ padding: `3% 0 5% 0` }}
        >
          <Col
            style={{
              padding: `1% 2% 1% 2%`,
              borderRight: `1px solid black`,
              backgroundColor: `rgb(52, 64, 79,0.1)`,
            }}
          >
            <CardBody>
              <CardTitle tag={"h2"}>Title</CardTitle>
              <CardBody tag={"h5"}>Paragraph</CardBody>
            </CardBody>
          </Col>
          <Col>
            <CardImg src="https://picsum.photos/id/100/580/490" alt="..." />
          </Col>
        </Row>
        <Row
          className="justify-content-center align-content-center"
          style={{ padding: `3% 0 5% 0` }}
        >
          <Col>
            <CardImg src="https://picsum.photos/id/100/580/490" alt="..." />
          </Col>
          <Col
            style={{
              padding: `1% 2% 1% 2%`,
              borderLeft: `1px solid black`,
              backgroundColor: `rgb(52, 64, 79,0.1)`,
            }}
          >
            <CardBody>
              <CardTitle tag={"h2"}>Title</CardTitle>
              <CardBody tag={"h5"}>Paragraph</CardBody>
            </CardBody>
          </Col>
        </Row>
        <br/>
        <Row style={{ float: `right`, fontSize: `small`, color: `white` }}>
          Company LTD.
        </Row>
        <br />
      </div>
    </>
  );
};

export default Blogs;