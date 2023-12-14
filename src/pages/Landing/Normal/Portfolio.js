import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

//import Images
import Img01 from "../../../assets/images/portfolio1.png";
import Img02 from "../../../assets/images/portfolio2.png";
import Img03 from "../../../assets/images/portfolio3.png";
import Img04 from "../../../assets/images/portfolio4.png";

const Portfolio = () => {
    return (
        <React.Fragment>
            <section className="section bg-light" id="gallery">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <div className="text-center mb-5">
                                <h2 className="mb-3 fw-semibold lh-base">Explore Our Portfolio 📸</h2>
                                <p className="text-muted">Immerse yourself in the precision of our work through a curated showcase of our past projects. Each slide in this carousel is a testament to our commitment to security, innovation, and craftsmanship.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Swiper modules={[Navigation, Autoplay, Pagination]}
                                slidesPerView={4}
                                spaceBetween={30}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                loop={true}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                className="mySwiper swiper mySwiper pb-4">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <Card>
                                            <CardBody>
                                                <Row className="g-1 mb-3">
                                                    <Col className='col-12'>
                                                        <img src={Img01} alt="" className="img-fluid rounded" />
                                                    </Col>
                                                </Row>
                                                <Link to="#" className="float-end"> Read Post <i className="ri-arrow-right-line align-bottom"></i></Link>
                                                <h5 className="mb-0 fs-16"><Link to="#">January 18, <span className="badge bg-success-subtle text-success">2023</span></Link></h5>
                                            </CardBody>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card>
                                            <CardBody>
                                                <Row className="g-1 mb-3">
                                                    <Col className='col-12'>
                                                        <img src={Img02} alt="" className="img-fluid rounded" />
                                                    </Col>
                                                </Row>
                                                <Link to="#" className="float-end"> Read Post <i className="ri-arrow-right-line align-bottom"></i></Link>
                                                <h5 className="mb-0 fs-16"><Link to="#">March 03, <span className="badge bg-success-subtle text-success">2023</span></Link></h5>
                                            </CardBody>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card>
                                            <CardBody>
                                                <Row className="g-1 mb-3">
                                                    <Col className='col-12'>
                                                        <img src={Img03} alt="" className="img-fluid rounded" />
                                                    </Col>
                                                </Row>
                                                <Link to="#" className="float-end"> Read Post <i className="ri-arrow-right-line align-bottom"></i></Link>
                                                <h5 className="mb-0 fs-16"><Link to="#">March 09, <span className="badge bg-success-subtle text-success">2023</span></Link></h5>
                                            </CardBody>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card>
                                            <CardBody>
                                                <Row className="g-1 mb-3">
                                                    <Col className='col-12'>
                                                        <img src={Img04} alt="" className="img-fluid rounded" />
                                                    </Col>
                                                </Row>
                                                <Link to="#" className="float-end"> Read Post <i className="ri-arrow-right-line align-bottom"></i></Link>
                                                <h5 className="mb-0 fs-16"><Link to="#">May 19, <span className="badge bg-success-subtle text-success">2023</span></Link></h5>
                                            </CardBody>
                                        </Card>
                                    </SwiperSlide>
   
                                </div>
                                <div className="swiper-pagination swiper-pagination-dark"></div>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Portfolio;