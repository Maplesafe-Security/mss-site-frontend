import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Reviews = () => {
    return (
        <React.Fragment>
            <section className="section bg-primary" id="reviews">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="text-center">
                                <div>
                                    <i className="ri-double-quotes-l text-secondary display-3"></i>
                                </div>
                                {/* <h4 className="text-white mb-5"><span className="text-secondary">50</span>+ Satisfied clients </h4> */}

                                <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper client-review-swiper rounded">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-4">" We entrusted Maplesafe to fortify our home security, and the results were beyond impressive. The team's meticulous approach, from the initial consultation to the seamless installation of state-of-the-art cameras, left us with a sense of confidence and peace of mind. Their commitment to excellence is truly commendable."</p>

                                                        <div>
                                                            <h5 className="text-white">John Jackson</h5>
                                                            <p>- Residential Home Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-4">"Choosing Maplesafe Security for our business security was a great decision. Their expertise and flawless installations, coupled with smart technology integration, showcase professionalism that sets them apart in the industry."</p>

                                                        <div>
                                                            <h5 className="text-white">Dale Andrews</h5>
                                                            <p>- Warehouse Business Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-4">" Experiencing Maplesafe's quick response to security alerts reassured us of their reliability. Their efficient troubleshooting reflects a commitment to customer satisfaction. Our security is in capable and responsive hands."</p>

                                                        <div>
                                                            <h5 className="text-white">Maryam Lukman</h5>
                                                            <p>- Farmland Owner</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                    <div className="swiper-button-next bg-white rounded-circle"></div>
                                    <div className="swiper-button-prev bg-white rounded-circle"></div>
                                    <div className="swiper-pagination position-relative mt-4"></div>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Reviews;