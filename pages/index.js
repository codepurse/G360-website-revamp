import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Footer from "../components/modules/footer";
import Marquee from "react-fast-marquee";
import {
  HiArrowNarrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";
import { SiPaloaltosoftware } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import Banner from "../components/modules/banner";
import GlobeCanvas from "../components/elements/globe";
import { useRouter } from "next/router";
import Slider from "react-slick";

export default function index() {
  const router = useRouter();
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const refClient = useRef(null);
  const [next, setNext] = useState(1);
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

  var testimonials = [
    {
      Position: "Chief Executive Officer",
      Name: "Sasuke Uchiha",
      Image: `Image/sasuke.jpg`,
      Message:
        "I know the four of us have worked together. And for a while, I thought I could choose that path instead??? but in the end??? I've decided on revenge. That's always been my purpose of living",
    },
    {
      Position: "Co-Founder",
      Name: "Naruto Uzumaki",
      Image: `Image/naruto.jpg`,
      Message:
        "Don't underestimate me! I don't quit and I don't run! You can act tough all you want! You're not gonna scare me off! No way! I don't care if I do get stuck as a genin for the rest of my life! I'll still be Hokage someday!",
    },
    {
      Position: "Project Manager",
      Name: "Sakura Uchiha",
      Image: `Image/sakura.jpg`,
      Message:
        "Always acting like a fool who only knows one thing??? Hokage, Hokage. I'm sorry Naruto??? that impossible dream of yours??? I don't want to see it crushed!",
    },
  ];

  function showNav() {
    document.querySelector(".navFull").classList.toggle("showNav");
  }

  useEffect(() => {
    const editable = document.querySelector(".changing-text");

    const words = [
      "Differently.",
      "Exciting.",
      "Superb.",
      "Unique.",
      "Flawless.",
      "Absolute.",
    ];
    const animationTimeInms = 50;
    const delayInms = 1500;

    function close(index) {
      editable.textContent = words[index % words.length];
      const interval = setInterval(function () {
        const text = editable.textContent;
        if (!text) {
          clearInterval(interval);
          setTimeout(function () {
            open(++index);
          }, 100);
        }
        editable.textContent = text.slice(0, -1);
      }, animationTimeInms);
    }

    function open(index) {
      const initialText = words[index % words.length];
      let i = 1;
      editable.textContent = "";
      const interval = setInterval(function () {
        const text = editable.textContent;
        console.log(text.length === initialText.length);
        if (text.length === initialText.length) {
          clearInterval(interval);
          setTimeout(function () {
            close(index);
          }, delayInms);
        }
        editable.textContent = initialText.slice(0, i++);
      }, animationTimeInms);
    }

    function writeWords() {
      const i = 0;
      open(i);
    }

    writeWords();
  }, []);

  const handleMouseMove = (e) => {
    const el = document.getElementById("conIndex");
    const d = el.getBoundingClientRect();
    let x = e.pageX - (d.left + Math.floor(d.width / 2));
    let y = e.pageY - (d.top + Math.floor(d.height / 2));
    x = x - x * 1.1;
    y = y - y * 1.1;
    $("#image").css(
      "background-position",
      "calc(25% + " + x + "px) calc(25% + " + y + "px)"
    );
  };

  return (
    <>
      <Container fluid className="conIndex">
        <Container fluid className="bg"></Container>
        <Container className="h-100" style={{ position: "relative" }}>
          <Row className="h-100 align-items-center">
            <Col lg={6}>
              <h1>We???ve always done things a bit </h1>
              <div className="divBorder">
                <div className="boxBorder"></div>
                <div className="boxBorder"></div>
                <div className="boxBorder"></div>
                <div className="boxBorder"></div>
                <span className="changing-text"></span>
              </div>
              <p className="pHeaderSub">
                GUERILLA 360 is a global business solutions company, focused on
                providing integrated business solutions in the areas of Software
                Solutions and Personnel Outsourcing.
              </p>
              <div className="divButton">
                <button className="button-53 button-index">Get started!</button>
              </div>
            </Col>
            <Col lg={6}>
              <canvas id="scene"></canvas>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conHow1">
        <Container>
          <Row>
            <Col lg={6}>
              <h1>
                To show the power of <span>humanity in business</span>
              </h1>
            </Col>
            <Col lg={6}>
              <svg>
                <g className="loader-3 center-2-of-3">
                  <circle />
                  <circle />
                  <circle />
                </g>
              </svg>
              <div className="form-inline">
                <p className="pNumber">01</p>
                <p className="pHeader">Define</p>
              </div>
              <p className="pDesc">
                We define your project needs by working closely with you and
                conducting business assessments. We will understand the entire
                process of your project and provide you with comprehensive
                analysis on the best ways to execute it.
              </p>
              <svg>
                <g className="loader-10 center-3-of-3">
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                </g>
              </svg>
              <div className="form-inline">
                <p className="pNumber">02</p>
                <p className="pHeader">Arrange</p>
              </div>
              <p className="pDesc">
                Once we have a clear understanding of your project scope, we
                will create a digital plan that will be used as our basis and
                reference to the development and execution of your project. The
                design plan will contain the User Stories, Design Options and
                Timetable. Our team will also appoint a Business Relationship
                Manager to directly interface with your company.
              </p>
              <svg>
                <g className="loader-20 center-1-of-3">
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                  <circle />
                </g>
              </svg>
              <div className="form-inline">
                <p className="pNumber">03</p>
                <p className="pHeader">Execution</p>
              </div>
              <p className="pDesc">
                Our team of business analysts and software developers will begin
                the software development life cycle and create a feature tracker
                that will be shared with the client in order for the client to
                keep track of progress. Upon launch of project, client may opt
                for a complete turn over or maintenance under our BPO Services.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conHow d-none">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="pHeader">How it works</p>
              <p className="pHeaderSub">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="pHeaderCount">01</p>
              <div className="divMethod">
                <div className="bubbles text-end">
                  <p className="pMethodName">Define</p>
                </div>
                <p className="pMethodDesc">
                  We define your project needs by working closely with you and
                  conducting business assessments. We will understand the entire
                  process of your project and provide you with comprehensive
                  analysis on the best ways to execute it.
                </p>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
              <p className="pHeaderCount text-end">02</p>
              <div className="divMethod">
                <div style={{ marginLeft: "auto", width: "max-content" }}>
                  <div className="bubbles">
                    <p className="pMethodName ">Arrange.</p>
                  </div>
                </div>
                <p className="pMethodDesc text-end">
                  Once we have a clear understanding of your project scope, we
                  will create a digital plan that will be used as our basis and
                  reference to the development and execution of your project.
                  The design plan will contain the User Stories, Design Options
                  and Timetable. Our team will also appoint a Business
                  Relationship Manager to directly interface with your company.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="pHeaderCount">03</p>
              <div className="divMethod float-end">
                <div className="bubbles text-end">
                  <p className="pMethodName">Execution</p>
                </div>
                <p className="pMethodDesc">
                  Our team of business analysts and software developers will
                  begin the software development life cycle and create a feature
                  tracker that will be shared with the client in order for the
                  client to keep track of progress. Upon launch of project,
                  client may opt for a complete turn over or maintenance under
                  our BPO Services.
                </p>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conDesc">
        <Row>
          <Col lg={12}>
            <Marquee
              gradientColor={[255, 255, 255]}
              pauseOnHover={true}
              speed={80}
            >
              <p className="pText">
                Design Website Mobile Business Outsource Solutions{" "}
              </p>
            </Marquee>
            <Marquee
              gradientColor={[255, 255, 255]}
              pauseOnHover={true}
              direction="right"
              speed={80}
            >
              <p className="pText">
                UI/UX Staffing Branding Firmware Business Android{" "}
              </p>
            </Marquee>
            <Marquee
              gradientColor={[255, 255, 255]}
              pauseOnHover={true}
              speed={80}
            >
              <p className="pText">
                Programs Development BPO Animation Application{" "}
              </p>
            </Marquee>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-none" style={{ padding: "70px 15px" }}>
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
                        Talent to be fully integrated into your company???s
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
                        Talent to be fully integrated into your company???s
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
      </Container>

      <Container fluid className="conTestimonials d-none">
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
      <Container fluid className="conClients">
        <Container>
          <Row>
            <Col lg={8}>
              <p className="pHeader">
                <span style={{ color: "white" }}>Our</span> Clients.
              </p>
            </Col>
            <Col lg={4}>
              <div
                style={{ width: "200px", float: "right", marginTop: "15px" }}
              >
                <span className="pCount">{next === 1 ? 1 : 2} / 2</span>
                <hr></hr>
                <div style={{ marginTop: "-5px" }}>
                  <div className="demo">
                    <a
                      href
                      className="arrow left"
                      onClick={handlePrevSlideClient}
                    >
                      <i />
                      <svg>
                        <use xlinkHref="#circle"></use>
                      </svg>
                    </a>
                    <a
                      href
                      className="arrow"
                      onClick={handleNextSlideClient}
                      style={{ marginLeft: "85px" }}
                    >
                      <i />
                      <svg>
                        <use xlinkHref="#circle"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={11}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "none" }}
                >
                  <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="44px"
                    height="44px"
                    id="circle"
                    fill="none"
                    stroke="#fd6b3b"
                  >
                    <circle r={20} cy={22} cx={22} id="test"></circle>
                  </symbol>
                </svg>

                <Slider {...settings_testimonials} ref={refClient}>
                  <div>
                    <Container style={{ padding: "0px" }}>
                      <Row>
                        <Col lg={3}>
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
                        <Col lg={3}>
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
                        <Col lg={3}>
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
                        <Col lg={3}>
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
                        <Col lg={3}>
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
                        <Col lg={3}>
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
                        <Col lg={3}>
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
                        <Col lg={3}>
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
            <Col lg={1} style={{ position: "relative" }}>
              <div className="rotate">
                We are passionate with our clients{" "}
                <span>
                  <FaHeart />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="conTest">
        <Container style={{ position: "relative" }}>
          <p className="pQuote">"</p>
          <Row>
            <Col lg={12}>
              <div className="divMess">
                <span className="pHeader">CLIENT SUCCESS STORIES</span>
                <TextTransition
                  text={'"' + testimonials[count].Message + '"'}
                  springConfig={presets.stiff}
                  noOverflow={true}
                  className="pMessage"
                />
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="form-inline" style={{ marginTop: "15px" }}>
                      <img
                        src={testimonials[count].Image}
                        className="img-fluid"
                      ></img>
                      <div style={{ marginTop: "10px" }}>
                        <TextTransition
                          text={testimonials[count].Name}
                          springConfig={presets.stiff}
                          noOverflow={true}
                          className="pName"
                        />

                        <TextTransition
                          text={testimonials[count].Position}
                          springConfig={presets.stiff}
                          noOverflow={true}
                          className="pPosition"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="float-end">
                      <div className="demo">
                        <a
                          href
                          className="arrow left"
                          onClick={(e) => {
                            if (count === 0) {
                              setCount(2);
                            } else {
                              setCount(count - 1);
                            }
                          }}
                        >
                          <i />
                          <svg>
                            <use xlinkHref="#circle"></use>
                          </svg>
                        </a>
                        <a
                          href
                          className="arrow"
                          onClick={(e) => {
                            if (count === 2) {
                              setCount(0);
                            } else {
                              setCount(count + 1);
                            }
                          }}
                        >
                          <i />
                          <svg>
                            <use xlinkHref="#circle"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>
      <Banner />
    </>
  );
}
