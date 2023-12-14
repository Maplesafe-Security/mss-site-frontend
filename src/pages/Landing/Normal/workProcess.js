import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import processArrow from "../../../assets/images/landing/process-arrow-img.png";

const WorkProcess = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Our Work Process </h3>
                                <p className="text-muted mb-4 ff-secondary">Experience security solutions tailored to your needs with our meticulous work process. From in-depth consultations to expert installations and ongoing support, we prioritize transparency, precision, and your peace of mind.</p>
                            </div>
                        </Col>
                    </Row>


                    <Row className="text-center">
                        <Col lg={4}>
                            <div className="process-card mt-4">
                                <div className="process-arrow-img d-none d-lg-block">
                                    <img src={processArrow} alt="" className="img-fluid" />
                                </div>
                                <div className="avatar-sm icon-effect mx-auto mb-4">
                                    <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                        <i className="ri-quill-pen-line"></i>
                                    </div>
                                </div>

                                <h5>Tell us what you need</h5>
                                <p className="text-muted ff-secondary">Begin your security journey by sharing your needs with us.</p>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="process-card mt-4">
                                <div className="process-arrow-img d-none d-lg-block">
                                    <img src={processArrow} alt="" className="img-fluid" />
                                </div>
                                <div className="avatar-sm icon-effect mx-auto mb-4">
                                    <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                        <i className="ri-user-follow-line"></i>
                                    </div>
                                </div>

                                <h5>Get free quotes</h5>
                                <p className="text-muted ff-secondary">Unlock tailored security solutions with our free quotes.</p>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="process-card mt-4">
                                <div className="avatar-sm icon-effect mx-auto mb-4">
                                    <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                        <i className="ri-book-mark-line"></i>
                                    </div>
                                </div>

                                <h5>Deliver high quality product</h5>
                                <p className="text-muted ff-secondary"> Our meticulous craftsmanship ensures each installation meets the highest level of performance and reliability.</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default WorkProcess;