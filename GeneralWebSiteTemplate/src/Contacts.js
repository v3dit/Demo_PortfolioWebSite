import React from "react";
import "./App.css";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Label,
  Input,
  Form,
} from "reactstrap";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

const Contacts = () => {
  const color1 = "rgb(2550, 255, 255)";
  const color2 = "rgb(32, 44, 59)";

  const a_style = {
    textDecoration: `none`,
    color: `skyblue`,
    fontWeight: `700`,
  };
  return (
    <>
      {" "}
      <div
        style={{
          background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`,
        }}
      >
        {/*  */}
        <Row
          className="justify-content-center"
          style={{ margin: "60px 0px 60px 0px" }}
        >
          <div
            style={{
              background: `linear-gradient(to bottom,  rgb(132, 144, 159),rgb(80, 90, 100))`,
              width: `65%`,
              border: `3px solid ${color2}`,
              padding: `50px`,
              borderRadius: `15px`,
            }}
          >
            {" "}
            <h1>Let’s Talk</h1>
            <p>
              Must explain to you how all this mistaken idea of denouncing
              pleasure born and give you a complete account the system
            </p>
            <br />
            <br />
            <br />
            <Form action="#" method="post">
              <h1>Get in Touch</h1>
              <div className="col-6 mt-3">
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-6 mt-3">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  class="form-control"
                  name="email"
                  id="em"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="col-6 mt-3">
                <Label for="pnum" class="form-label">
                  Phone no.
                </Label>
                <Input
                  type="text"
                  class="form-control"
                  name="pnum"
                  id="pnum"
                  placeholder="Your phone No."
                  max="9999999999"
                  min="000000000"
                  required
                />
              </div>

              <div className="col-6 mt-3">
                <Label
                  for="service"
                  class="form-label"
                  name="service"
                  id="service"
                  required
                >
                  Service
                </Label>
                <select
                  id="service"
                  class="form-select"
                  name="service"
                  required
                >
                  <option>Choose...</option>
                  <option>...1</option>
                  <option>...2</option>
                  <option>...3</option>
                </select>
              </div>
              <br />
              <div className="col-6 mt-3">
                <Label
                  for="message"
                  class="form-label"
                  name="message"
                  id="message"
                  required
                ></Label>
                <textarea
                  name="message"
                  id="message"
                  cols="24"
                  rows="3"
                  placeholder="Message"
                  spellcheck="true"
                  required
                ></textarea>
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  className="btn bg-secondary"
                  style={a_style}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </Row>

        {/*  */}

        <hr style={{ color: `white` }}></hr>
        <Row
          className="justify-content-center align-content-center"
          style={{ margin: "60px 0px 60px 0px" }}
        >
          <Col lg="3" md="3" sm="3">
            <Card
              style={{
                height: `145px`,
                overflow: `scroll`,
                padding: `15px`,
                border: `3px solid ${color2}`,
                borderRadius: `15px`,
                background: `linear-gradient(to bottom,  rgb(132, 144, 159),rgb(80, 90, 100))`,
              }}
            >
              <CardTitle tag={`h5`}>25 North Street,Dubai</CardTitle>
              <CardSubtitle tag={`h7`}>Office Address</CardSubtitle>
              <CardText tag={`h5`}>
                <FaLocationArrow />
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="3" sm="3">
            <Card
              style={{
                height: `145px`,
                overflow: `scroll`,
                padding: `15px`,
                border: `3px solid ${color2}`,
                borderRadius: `15px`,
                background: `linear-gradient(to bottom,  rgb(132, 144, 159),rgb(80, 90, 100))`,
              }}
            >
              <CardTitle tag={`h5`}>info@vedito.com</CardTitle>
              <CardSubtitle tag={`h7`}>Office Mail</CardSubtitle>
              <CardText tag={`h5`}>
                <FaMailBulk />
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="3" sm="3">
            <Card
              style={{
                height: `145px`,
                overflow: `scroll`,
                padding: `15px`,
                border: `3px solid ${color2}`,
                borderRadius: `15px`,
                background: `linear-gradient(to bottom,  rgb(132, 144, 159),rgb(80, 90, 100))`,
              }}
            >
              <CardTitle tag={`h5`}>+91 987-6543-210</CardTitle>
              <CardSubtitle tag={`h7`}>Office Phone</CardSubtitle>
              <CardText tag={`h5`}>
                <FaPhone />
              </CardText>
            </Card>
          </Col>
        </Row>
        <hr style={{ color: `white` }}></hr>
        <Row style={{ float: `right`, fontSize: `small`, color: `white`}}>
          Company LTD.
        </Row>
        <br />
      </div>
    </>
  );
};

export default Contacts;