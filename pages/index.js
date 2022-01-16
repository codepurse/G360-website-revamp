import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {
  HiArrowNarrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { SiPaloaltosoftware } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";

import Slider from "react-slick";

export default function index() {
  const ref = useRef(null);
  const refClient = useRef(null);
  const [next, setNext] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  const settings_client = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: false,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings_testimonials = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };

  const handleNextSlide = () => {
    ref.current.slickNext();
  };
  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };
  const handleNextSlideClient = () => {
    refClient.current.slickNext();
    setNext(2);
  };
  const handlePrevSlideClient = () => {
    refClient.current.slickPrev();
    setNext(1);
  };

  return (
    <>
      <Container fluid className="h-100 bgCon">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title"></div>
        <Container className="h-100">
          <Row className="h-100 align-items-center justty-content-center d-flex">
            <Col lg={6}>
              <p className="pCenter">
                Innovative <span style={{ color: "#fd6b3b" }}>Outsource</span>{" "}
                and Digital <span style={{ color: "#fd6b3b" }}>Solutions</span>
              </p>
              <p className="pCenterSub">
                We seek to lead companies towards business directions they would
                like to pursue both in the U.S. and globally.
              </p>
              <div id="container">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Get Started</span>
                </button>
              </div>
              <p className="pCall">If you're in a hurry, quick call to us</p>
              <div className="divCall">
                <div>
                  <i>
                    <BiPhoneCall />
                  </i>
                </div>
                <div className="divPhone">
                  <p className="p1">Phone number</p>
                  <p className="pNumber">+63 917 766 1380 | +53 999 124 4211</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div id="geo-globe" className="mx-auto d-flex">
                <canvas id="scene"></canvas>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="conServices" style={{ position: "relative" }}>
        <p className="pVertical">Passionate people helping clients win</p>
        <Row>
          <Col lg={6}>
            <p className="pHeader">
              Our <br />
              Services<span style={{ color: "black" }}>.</span>
            </p>
          </Col>
          <Col lg={6}>
            <p className="pOverview">
              Our core purpose is to provide companies extensive expertise and
              services at cost expertise and services at{" "}
              <span>cost effective price points</span>, while upholding a
              standard for quality service.
            </p>
            <p className="pOverviewSub">
              GUERILLA 360 is a global business solutions company, focused on
              providing integrated business solutions in the areas of Software
              Solutions and Personnel Outsourcing.
            </p>
            <p className="pValues d-none">Our values</p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="card-container">
              <div className="cardCon">
                <a href="hottub" className="card1">
                  <div className="card--display">
                    <div>
                      <i>
                        <SiPaloaltosoftware />
                      </i>
                      <h2>Software Development and Design Services</h2>
                    </div>
                  </div>
                  <div className="card--hover">
                    <h2>Software Development and Design Services</h2>
                    <p>
                      We build scalable software solutions that fit your
                      business requirements from Website Applications, Mobile
                      Applications, Bespoke Software and API Development.
                    </p>
                    <p className="link">Click to see project</p>
                  </div>
                </a>
                <div className="card--border"></div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="card-container">
              <div className="cardCon">
                <a href="hottub" className="card2">
                  <div className="card--display">
                    <div>
                      <i>
                        <SiPaloaltosoftware />
                      </i>
                      <h2>
                        {" "}
                        Staff Augmentation, Shared Services & Team Management
                      </h2>
                    </div>
                  </div>
                  <div className="card--hover">
                    <h2>
                      Staff Augmentation, Shared Services & Team Management
                    </h2>
                    <p>
                      Work with us to find and manage the right IT & Design
                      Talent to be fully integrated into your company’s
                      ecosystem.
                    </p>
                    <p className="link">Click to see project</p>
                  </div>
                </a>
                <div className="card--border"></div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="card-container">
              <div className="cardCon">
                <a href="hottub" className="card3">
                  <div className="card--display">
                    <div>
                      <i>
                        <SiPaloaltosoftware />
                      </i>
                      <h2> Custom BPO and Shared Staffing Solutions</h2>
                    </div>
                  </div>
                  <div className="card--hover">
                    <h2>Custom BPO and Shared Staffing Solutions</h2>
                    <p>
                      Work with us to find and manage the right IT & Design
                      Talent to be fully integrated into your company’s
                      ecosystem.
                    </p>
                    <p className="link">Click to see project</p>
                  </div>
                </a>
                <div className="card--border"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="con2" style={{ marginTop: "70px" }}>
        <Row>
          <Col lg={6}>
            <div
              style={{
                width: "550px",
                float: "right",
                marginTop: "30px",
                marginRight: "5%",
              }}
            >
              <p className="pHeader">Services We Provide</p>
              <div>
                <p className="pHeaderSub">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="divOblong">
              <p className="pTitle">Software Development and Design Services</p>
              <div style={{ maxWidth: "580px" }}>
                <p className="pTitleSub">
                  We build scalable software solutions that fit your business
                  requirements from Website Applications, Mobile Applications,
                  Bespoke Software and API Development.
                </p>
                <div className="btnLearn">
                  Learn more
                  <i>
                    <HiArrowNarrowRight />
                  </i>
                </div>
              </div>
            </div>
            <div className="divOblong">
              <div style={{ maxWidth: "580px" }}>
                <p className="pTitle">
                  Staff Augmentation, Shared Services & Team Management
                </p>
                <p className="pTitleSub">
                  Work with us to find and manage the right IT & Design Talent
                  to be fully integrated into your company’s ecosystem.
                </p>
                <div className="btnLearn">
                  Learn more
                  <i>
                    <HiArrowNarrowRight />
                  </i>
                </div>
              </div>
            </div>
            <div className="divOblong">
              <div style={{ maxWidth: "580px" }}>
                <p className="pTitle">
                  Custom BPO and Shared Staffing Solutions
                </p>
                <p className="pTitleSub">
                  Work with us to find and manage the right IT & Design Talent
                  to be fully integrated into your company’s ecosystem.
                </p>
                <div className="btnLearn">
                  Learn more
                  <i>
                    <HiArrowNarrowRight />
                  </i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con3" style={{ marginTop: "70px" }}>
        <Row>
          <Col lg={6}>
            <div style={{ maxWidth: "600px" }}>
              <Row>
                <Col lg={2}>
                  <img
                    src="Image/new-moon.png"
                    className="img-fluid mx-auto"
                    style={{ width: "50px" }}
                  ></img>
                </Col>
                <Col lg={10}>
                  <p className="pHeader">Define</p>
                  <p className="pHeaderSub">
                    We define your project needs by working closely with you and
                    conducting business assessments. We will understand the
                    entire process of your project and provide you with
                    comprehensive analysis on the best ways to execute it.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <img
                    src="Image/new-moon.png"
                    className="img-fluid mx-auto"
                    style={{ width: "50px" }}
                  ></img>
                </Col>
                <Col lg={10}>
                  <p className="pHeader">Plan</p>
                  <p className="pHeaderSub">
                    We define your project needs by working closely with you and
                    conducting business assessments. We will understand the
                    entire process of your project and provide you with
                    comprehensive analysis on the best ways to execute it.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <img
                    src="Image/new-moon.png"
                    className="img-fluid mx-auto"
                    style={{ width: "50px" }}
                  ></img>
                </Col>
                <Col lg={10}>
                  <p className="pHeader">Development & Execution</p>
                  <p className="pHeaderSub">
                    We define your project needs by working closely with you and
                    conducting business assessments. We will understand the
                    entire process of your project and provide you with
                    comprehensive analysis on the best ways to execute it.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src="Image/con3.png"
              className="img-fluid mx-auto d-flex"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="con4 d-none" style={{ marginTop: "100px" }}>
        <Row>
          <Col lg={4}>
            <p className="pHeader">Case Studies</p>
            <p className="pHeaderSub">
              {" "}
              We define your project needs by working closely with you and
              conducting business assessments.
            </p>
            <button className="btnCase">View Case Studies</button>
          </Col>
          <Col lg={8}>
            <div>
              <Slider {...settings}>
                <div className="divCarousel"></div>
                <div className="divCarousel"></div>
                <div className="divCarousel"></div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con5 d-none" style={{ marginTop: "100px" }}>
        <Row>
          <Col lg={12}>
            <p className="pHeader">Our Satisfied Clients</p>
          </Col>
        </Row>
        <Row className="align-items-center justifiy-conter-center d-flex">
          <Col lg={2}>
            <img src="Image/client_1.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_2.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_3.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_4.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_5.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_6.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_7.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_8.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_9.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_10.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_11.png" className="img-fluid d-flex"></img>
          </Col>
          <Col lg={2}>
            <img src="Image/client_12.png" className="img-fluid d-flex"></img>
          </Col>
        </Row>
      </Container>

      <Container fluid className="conTestimonials">
        <Container>
          <Row>
            <Col lg={6}>
              <p className="p1">Our Customers.</p>
              <p className="p2">
                What Our Clients <br /> Says About Guerilla360
              </p>
              <p className="p3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button className="btnLeft" onClick={handlePrevSlide}>
                <i>
                  <HiChevronLeft />
                </i>
              </button>
              <button className="btnRight" onClick={handleNextSlide}>
                <i>
                  <HiChevronRight />
                </i>
              </button>
            </Col>
            <Col lg={6}>
              <div>
                <Slider {...settings_testimonials} ref={ref}>
                  <div className="divTestimonials">
                    <Row
                      className="align-items-center justify-content-center d-flex"
                      style={{ backgroundColor: "white" }}
                    >
                      <Col lg={4} style={{ padding: "0px" }}>
                        <div>
                          <img src="Image/client1.jpg" className="img-fluid" />
                        </div>
                      </Col>
                      <Col lg={8} style={{ backgroundColor: "white" }}>
                        <div className="divComment">
                          <div>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                          </div>
                          <p className="pComment">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation."
                          </p>
                          <p className="pName">Eskye Custudio</p>
                          <p className="pPosition">FrontEnd Developer</p>
                          <i className="quote">
                            <ImQuotesRight />
                          </i>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="divTestimonials">
                    <Row
                      className="align-items-center justify-content-center d-flex"
                      style={{ backgroundColor: "white" }}
                    >
                      <Col lg={4} style={{ padding: "0px" }}>
                        <div>
                          <img src="Image/client2.jpg" className="img-fluid" />
                        </div>
                      </Col>
                      <Col lg={8} style={{ backgroundColor: "white" }}>
                        <div className="divComment">
                          <div>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                            <i>
                              {" "}
                              <AiFillStar />
                            </i>
                          </div>
                          <p className="pComment">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua."
                          </p>
                          <p className="pName">Karen Parco</p>
                          <p className="pPosition">Project Manager</p>
                          <i className="quote">
                            <ImQuotesRight />
                          </i>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conProcess">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="pHeader">
                <span style={{ color: "white" }}>Our</span> Process.
              </p>
              <p className="pHeaderSub">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="divProcess">
                <i>
                  <CgIfDesign />
                </i>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conClients">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <p className="pHeader">
                <span style={{ color: "white" }}>Our</span> Clients.
              </p>
            </Col>
            <Col lg={4}>
              <div style={{ width: "200px", float: "right" }}>
                <span className="pCount">{next === 1 ? 1 : 2} / 2</span>
                <hr></hr>
                <div style={{ marginTop: "-15px" }}>
                  <button className="btnLeft" onClick={handlePrevSlideClient}>
                    <i>
                      <HiChevronLeft />
                    </i>
                    <span>Prev</span>
                  </button>
                  <button className="btnRight" onClick={handleNextSlideClient}>
                    <span>Next</span>
                    <i>
                      <HiChevronRight />
                    </i>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div>
                <Slider {...settings_testimonials} ref={refClient}>
                  <div>
                    <Container style={{ padding: "0px" }}>
                      <Row>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_1.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_2.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_3.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_4.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_5.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_6.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_7.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_8.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div>
                    <Container style={{ padding: "0px" }}>
                      <Row>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_9.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_10_plain.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_11.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                        <Col lg={3} style={{ marginBottom: "20px" }}>
                          <a href="#" className="link">
                            <div className="link__text">
                              <img
                                src="Image/client_12_plain.png"
                                className="img-fluid d-flex"
                              ></img>
                            </div>
                            <div className="sensor">
                              {Array.apply(null, { length: 16 }).map((e, i) => (
                                <div className="sensor__trigger" />
                              ))}
                              <div className="sensor__background" />
                              <div className="sensor__effect" />
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="con6 d-none" style={{ marginTop: "20px" }}>
        <Row>
          <Col lg={12}>
            <div>
              <Slider {...settings_client}>
                <div className="divClient">
                  <p className="pDesc">
                    <div className="blob mx-auto d-flex"></div>
                    <p className="pName">Randolph Yu</p>
                    <i>
                      <ImQuotesLeft></ImQuotesLeft>
                    </i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <div className="divClient">
                  <p className="pDesc">
                    <div className="blob1 mx-auto d-flex"></div>
                    <p className="pName">Eskye Custodio</p>
                    <i>
                      <ImQuotesLeft></ImQuotesLeft>
                    </i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <div className="divClient">
                  <p className="pDesc">
                    <div className="blob2 mx-auto d-flex"></div>
                    <p className="pName">Eskye Custodio</p>
                    <i>
                      <ImQuotesLeft></ImQuotesLeft>
                    </i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
                <div className="divClient"></div>
                <div className="divClient"></div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con7">
        <Row>
          <Col lg={5}>
            <p className="pHeader">Be part of our Team Today</p>
            <p className="pHeaderSub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <button className="btnCase">Apply now</button>
          </Col>
          <Col lg={7}>
            <div className="bg7">
              <div className="divTest">
                <p className="pName">Eskye Custodio</p>
                <p className="pDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="con8">
        <Row className="align-items-center justifiy-content-center d-flex">
          <Col lg={12}>
            <p className="pHeader">Discuss your next project with us</p>
            <p className="pHeaderSub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <button className="btnCase mx-auto d-block">Contact Us!</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}