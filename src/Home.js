import React from "react";
import "./App.css";
import background from "./download.png";
// import background2 from "./background-images.png";
// import background3 from "./download1.png";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Row,
  Col,
  Label,
  Input,
  Form,
} from "reactstrap";
import ReactCardSlider from "./ReactCardSlider";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

function Home() {
  const color1 = "rgb(10, 10, 10,0.9)";
  const color2 = "rgb(0, 14, 29)";

  const tablestyle = {
    width: `100%`,
    backgroundImage: `linear-gradient(to right, rgba(12, 24, 39,0.9),rgba(30, 40, 50,0.8), rgba(12, 24, 39,0.9))`,
    padding: `55px`,
    marginTop: `15px`,
    borderRadius: `15px`,
    textAlign: `center`,
  };
  const thstyle = { padding: `15px`, color: `white` };
  const a_style = {
    textDecoration: `none`,
    color: `skyblue`,
    fontWeight: `700`,
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundColor: `linear-gradient(to bottom,  ${color1} 0%,rgba(2, 4, 9) 100%)`,
          padding: `0% 9% 3% 9%`,
        }}
        className=""
      >
        {/*  */}
        <Row id="aboutus" className="justify-content-center">
          <Carousel1 />
        </Row>

        {/*  */}
        <Row
          style={{
            margin: "210px 0px 210px 0px",
            padding: `45px`,
            borderRadius: `15px`,
          }}
          className="justify-content-center"
        >
          <Col lg="6" md="9" sm="9">
            <img
              alt="Sample"
              src="https://picsum.photos/id/300/350"
              style={{ borderRadius: "10px", width: `90%`, overflow: `hidden` }}
            />
          </Col>
          <Col lg="4" md="9" sm="9" style={{ color: `White` }}>
            <CardBody>
              <br />
              <CardTitle tag="h1">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h5">
                Card subtitle
              </CardSubtitle>
              <br></br>
              <CardText tag="h3">
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Col>
        </Row>

        {/*  */}
        <div
          style={{ margin: "210px 0px 210px 0px" }}
          className="justify-content-center"
        >
          <Card inverse className="border-0">
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/id/1021/600?grayscale"
              style={{ height: "600px" }}
              width="100%"
            />
            <CardImgOverlay
              style={{ padding: `50px`, overflow: "scroll", color: `White` }}
            >
              <CardTitle tag="h1">Card Title</CardTitle>
              <CardText tag={"h5"}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
                <br />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
                <br />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </CardText>
            </CardImgOverlay>
          </Card>
        </div>

        {/*  */}
        <div
          style={{
            margin: "30px 0px 120px 0px",
          }}
        >
          <h1 style={{ textAlign: `center`, color: `White` }}>Stats</h1>
          <br />
          <Row className="justify-content-center">
            <Row className="justify-content-center">
              <Col lg="3" md="3" sm="4">
                <Card
                  style={{
                    height: `109%`,
                    margin: `2%`,
                    padding: "10px",
                    border: `3px solid rgba(32, 44, 59,0.1)`,
                    backgroundColor: `rgb(210, 210, 220)`,
                  }}
                >
                  <CardTitle tag="h3">98%</CardTitle>
                  <CardText tag="h5">Figma</CardText>
                </Card>
              </Col>
              <Col lg="3" md="3" sm="4">
                <Card
                  style={{
                    height: `109%`,
                    margin: `2%`,
                    padding: "10px",
                    border: `3px solid rgba(32, 44, 59,0.1)`,
                    backgroundColor: `rgb(210, 210, 220)`,
                  }}
                >
                  <CardTitle tag="h3">98%</CardTitle>
                  <CardText tag="h5">Figma</CardText>
                </Card>
              </Col>
              <Col lg="3" md="3" sm="4">
                <Card
                  style={{
                    height: `109%`,
                    margin: `2%`,
                    padding: "10px",
                    border: `3px solid rgba(32, 44, 59,0.1)`,
                    backgroundColor: `rgb(210, 210, 220)`,
                  }}
                >
                  <CardTitle tag="h3">98%</CardTitle>
                  <CardText tag="h5">Figma</CardText>
                </Card>
              </Col>
            </Row>
            <Row>&nbsp;</Row>
            <Row className="justify-content-center">
              <Col lg="3" md="3" sm="4">
                <Card
                  style={{
                    height: `109%`,
                    margin: `2%`,
                    padding: "10px",
                    border: `3px solid rgba(32, 44, 59,0.1)`,
                    backgroundColor: `rgb(210, 210, 220)`,
                  }}
                >
                  <CardTitle tag="h3">98%</CardTitle>
                  <CardText tag="h5">Figma</CardText>
                </Card>
              </Col>
              <Col lg="3" md="3" sm="4">
                <Card
                  style={{
                    height: `109%`,
                    margin: `2%`,
                    padding: "10px",
                    border: `3px solid rgba(32, 44, 59,0.1)`,
                    backgroundColor: `rgb(210, 210, 220)`,
                  }}
                >
                  <CardTitle tag="h3">98%</CardTitle>
                  <CardText tag="h5">Figma</CardText>
                </Card>
              </Col>
              <Col lg="3" md="3" sm="4">
                <Card
                  style={{
                    height: `109%`,
                    margin: `2%`,
                    padding: "10px",
                    border: `3px solid rgba(32, 44, 59,0.1)`,
                    backgroundColor: `rgb(210, 210, 220)`,
                  }}
                >
                  <CardTitle tag="h3">98%</CardTitle>
                  <CardText tag="h5">Figma</CardText>
                </Card>
              </Col>
            </Row>
          </Row>
        </div>

        {/*  */}
        <div
          className="justify-content-center"
          id="service"
          style={{
            margin: "210px 0px 210px 0px",
            color: `White`,
          }}
        >
          <h1>Popular Services</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam at
            pariatur maiores accusantium minus? Ullam hic consequuntur
            architecto eum. Quidem nulla at impedit doloremque amet, incidunt ad
            facere inventore dolor.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nam at pariatur maiores accusantium minus? Ullam
            hic consequuntur architecto eum. Quidem nulla at impedit doloremque
            amet, incidunt ad facere inventore dolor.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam at
            pariatur maiores accusantium minus? Ullam hic consequuntur
            architecto eum. Quidem nulla at impedit doloremque amet, incidunt ad
            facere inventore dolor.
            <br />
            <br />
          </p>
          <ReactCardSlider />
        </div>

        {/*  */}
        <div
          style={{
            margin: "210px 0px 70px 0px",
            overflow: `scroll`,
            color: `White`,
          }}
          className="justify-content-center"
          id="experience"
        >
          <h1>My Work Experience</h1>
          <p className="">
            Must explain to you how all this mistaken idea of denouncing
            pleasure born and give you a complete account the system.Must
            explain to you how all this mistaken idea of denouncing pleasure
            born and give you a complete account the system.Must explain to you
            how all this mistaken idea of denouncing pleasure born and give you
            a complete account the system.
            <br />
            <br />
          </p>
          <table style={tablestyle}>
            <tbody>
              <tr>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <img
                    src="https://picsum.photos/id/1019/100/70?grayscale"
                    alt=""
                    style={{ borderRadius: "15px" }}
                  />
                </th>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <a style={a_style} href="...">
                    Go to website
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
          <table style={tablestyle}>
            <tbody>
              <tr>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <img
                    src="https://picsum.photos/id/1020/100/70?grayscale"
                    alt=""
                    style={{ borderRadius: "15px" }}
                  />
                </th>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <a style={a_style} href="...">
                    Go to website
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
          <table style={tablestyle}>
            <tbody>
              <tr>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <img
                    src="https://picsum.photos/id/1021/100/70?grayscale"
                    alt=""
                    style={{ borderRadius: "15px" }}
                  />
                </th>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <a style={a_style} href="...">
                    Go to website
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
          <table style={tablestyle}>
            <tbody>
              <tr>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <img
                    src="https://picsum.photos/id/1022/100/70?grayscale"
                    alt=""
                    style={{ borderRadius: "15px" }}
                  />
                </th>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <a style={a_style} href="...">
                    Go to website
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
          <table style={tablestyle}>
            <tbody>
              <tr>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <img
                    src="https://picsum.photos/id/1023/100/70?grayscale"
                    alt=""
                    style={{ borderRadius: "15px" }}
                  />
                </th>
                <th style={thstyle}>2015 - 2016</th>
                <th style={thstyle}>
                  <a style={a_style} href="...">
                    Go to website
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        {/*  */}
        <div id="recent">
          <Carousel2 id="projects" />
        </div>

        {/*  */}
        <Row
          id="letstalk"
          className="justify-content-center"
          style={{ margin: "210px 0px 120px 0px", color: `White` }}
        >
          <div
            style={{
              background: `linear-gradient(to bottom,  rgba(12, 24, 39,0.5),rgba(30, 40, 50,0.7))`,
              border: `3px solid ${color2}`,
              padding: `40px`,
              borderRadius: `15px`,
              overflow: `scroll`,
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
            <Form action="#" method="post">
              <h1>Get in Touch</h1>
              <div className="col-6 mt-3">
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  className="form-control"
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
                  className="form-control"
                  name="email"
                  id="em"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="col-6 mt-3">
                <Label for="pnum" className="form-label">
                  Phone no.
                </Label>
                <Input
                  type="text"
                  className="form-control"
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
                  className="form-label"
                  name="service"
                  id="service"
                  required
                >
                  Service
                </Label>
                <select
                  id="service"
                  className="form-select"
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
                  className="form-label"
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
          style={{ margin: "120px 0px 120px 0px", color: `White` }}
        >
          <Col lg="3" md="3" sm="3">
            <Card
              style={{
                height: `145px`,
                overflow: `scroll`,
                padding: `15px`,
                border: `3px solid ${color2}`,
                borderRadius: `15px`,
                background: `linear-gradient(to bottom,  rgba(12, 24, 39,0.5),rgba(30, 40, 50,0.7))`,
              }}
            >
              <CardTitle tag={`h5`}>25 North Street,Dubai</CardTitle>
              <CardSubtitle tag={`h5`}>Office Address</CardSubtitle>
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
                background: `linear-gradient(to bottom,  rgba(12, 24, 39,0.5),rgba(30, 40, 50,0.7))`,
              }}
            >
              <CardTitle tag={`h5`}>info@vedito.com</CardTitle>
              <CardSubtitle tag={`h5`}>Office Mail</CardSubtitle>
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
                background: `linear-gradient(to bottom,  rgba(12, 24, 39,0.5),rgba(30, 40, 50,0.7))`,
              }}
            >
              <CardTitle tag={`h5`}>+91 987-6543-210</CardTitle>
              <CardSubtitle tag={`h5`}>Office Phone</CardSubtitle>
              <CardText tag={`h5`}>
                <FaPhone />
              </CardText>
            </Card>
          </Col>
        </Row>

        <hr style={{ color: `white` }}></hr>

        <Row
          className="justify-content-center align-content-center"
          style={{
            margin: "120px 0px 0px 0px",
            padding: `25px`,
            border: `3px solid ${color2}`,
            borderRadius: `15px`,
            background: `linear-gradient(to bottom,  rgba(12, 24, 39,0.5),rgba(30, 40, 50,0.7))`,
            color: `White`,
          }}
        >
          <br />
          <Col sm="10" mb="6" lg="3">
            <div>
              <br />
              <img
                src="https://picsum.photos/seed/picsum/150"
                alt="logo"
                style={{ borderRadius: "100%" }}
              />
            </div>
            <p>
              <br />
              Welcome and open yourself to your truest love this year with us!
              With the Release Process
            </p>
            <div>
              <a href="http://">
                <img src="logo-social.png" alt="" />
              </a>
              <a style={a_style} href="http://">
                <img src="logo-social.png" alt="" />
              </a>
              <a href="http://">
                <img src="logo-social.png" alt="" />
              </a>
              <a href="http://">
                <img src="logo-social.png" alt="" />
              </a>
            </div>
          </Col>
          <br />
          <Col sm="10" mb="6" lg="3" className="last_sec">
            <ul>
              <br />
              <h1>Navigation</h1>
              <li>
                <a href="#aboutus" style={a_style}>
                  About us
                </a>
              </li>
              <li>
                <a href="#letstalk" style={a_style}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#projects" style={a_style}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" style={a_style}>
                  Experience
                </a>
              </li>
            </ul>
          </Col>
          <br />
          <Col sm="10" mb="6" lg="3" className="last_sec">
            <ul>
              <br />
              <h1>All Services</h1>
              <li>
                <a href="#service" style={a_style}>
                  Web Design
                </a>
              </li>
              <li>
                <a href="#service" style={a_style}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#service" style={a_style}>
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#service" style={a_style}>
                  Digital Marketing
                </a>
              </li>
            </ul>
          </Col>
          <br />
          <Col sm="10" mb="6" lg="3">
            <br />
            <h1>Newsletter</h1>
            <p>
              Must explain to you how all this mistaken idea pleasure born and
              give you a complete account.
            </p>
            <Form action="http://localhost:server.php">
              <div md="7">
                <Label for="newsletteremail" className="form-label" tag="h3">
                  Email
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  name="newsletteremail"
                  id="newsletteremail"
                  placeholder="Email Address"
                />
                <Input
                  type="submit"
                  value="Submit"
                  className="btn btn-secondary"
                  style={a_style}
                />
              </div>
            </Form>
            <br />
            <br /> <br />
          </Col>
        </Row>
        <br />
        <Row style={{ float: `right`, fontSize: `small`, color: `white` }}>
          Company LTD.
        </Row>
        <br />
      </div>
    </>
  );
}

export default Home;