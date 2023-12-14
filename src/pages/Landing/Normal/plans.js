import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const Plans = (props) => {
    console.log("In Plans. plan is", props)

    return (
        <React.Fragment>
            <section className="section" id="plans">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Choose the plan that's right for you </h3>
                                <p className="text-muted mb-4">Simple pricing. No hidden fees. Advanced features for you
                                    business.</p>

                                {/* <div className="d-flex justify-content-center align-items-center">
                                    <div>
                                        <h5 className="fs-14 mb-0">Month</h5>
                                    </div>
                                    <div className="form-check form-switch fs-20 ms-3 " onClick={toggle} >
                                        <input className="form-check-input" type="checkbox" id="plan-switch" />
                                        <label className="form-check-label" htmlFor="plan-switch"></label>
                                    </div>
                                    <div>
                                        <h5 className="fs-14 mb-0">Annual <span className="badge bg-success-subtle text-success">Save 20%</span></h5>
                                    </div>
                                </div> */}
                            </div>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        <Col lg={4}>
                            <Card className="plan-box mb-0">
                                <CardBody className="p-4 m-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-semibold">Basic Plan</h5>
                                            <p className="text-muted mb-0">For Startup</p>
                                        </div>
                                        <div className="avatar-sm">
                                            <div className="avatar-title bg-light rounded-circle text-primary">
                                                <i className="ri-book-mark-line fs-20"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4 text-center">
                                        <h1 className="month"><sup><small>$</small></sup><span className="ff-secondary fw-bold">750</span></h1>
                                    </div>

                                    <div>
                                        <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Upto <b>4</b> CCTV Cameras
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Upto <b>1</b> Doorbell Cameras
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Mobile App Installation
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Email/App Notification Setup
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-danger me-1">
                                                        <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Alarm System Installation
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-danger me-1">
                                                        <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Motion-Sensing Lights
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-danger me-1">
                                                        <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Backup Battery Power System
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <a onClick={()=> {props.onPlanChanged(`Hello,\nI would like to inquire about your Basic Plan Package \n \nRegards, \n`)}}  href="#contact" className="btn btn-soft-primary w-100">Get
                                                Started</a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* <!--end col--> */}
                        <Col lg={4}>
                            <Card className="plan-box mb-0 ribbon-box right">
                                <CardBody className="p-4 m-2">
                                    <div className="ribbon-two ribbon-two-danger"><span>Popular</span></div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-semibold">Pro Business</h5>
                                            <p className="text-muted mb-0">Professional plans</p>
                                        </div>
                                        <div className="avatar-sm">
                                            <div className="avatar-title bg-light rounded-circle text-primary">
                                                <i className="ri-medal-fill fs-20"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4 text-center">
                                        <h1 className="month"><sup><small>$</small></sup><span className="ff-secondary fw-bold">1500</span></h1>
                                    </div>

                                    <div>
                                        <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Upto <b>6</b> CCTV Cameras
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Upto <b>1</b> Doorbell Cameras
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Mobile App Installation
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Email/App Notification Setup
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Alarm System Installation
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-danger me-1">
                                                        <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Motion-Sensing Lights
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-danger me-1">
                                                        <i className="ri-close-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Backup Battery Power System
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <a onClick={()=> {props.onPlanChanged(`Hello,\nI would like to inquire about your Professional Plan Package \n \nRegards, \n`)}}   href="#contact" className="btn btn-soft-primary w-100">Get
                                                Started</a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="plan-box mb-0">
                                <CardBody className="p-4 m-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-semibold">Platinum Plan</h5>
                                            <p className="text-muted mb-0">Enterprise Businesses</p>
                                        </div>
                                        <div className="avatar-sm">
                                            <div className="avatar-title bg-light rounded-circle text-primary">
                                                <i className="ri-stack-fill fs-20"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4 text-center">
                                        <h1 className="month"><sup><small>$</small></sup><span className="ff-secondary fw-bold">2199</span></h1>
                                    </div>

                                    <div>
                                        <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Upto <b>8</b> CCTV Cameras
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Upto <b>2+</b> Doorbell Cameras
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Mobile App Installation
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Email/App Notification Setup
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Alarm System Installation
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Motion-Sensing Lights
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Backup Battery Power System
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <a onClick={()=> {props.onPlanChanged(`Hello,\nI would like to inquire about your Platinum Plan Package \n \nRegards, \n`)}} href="#contact" className="btn btn-soft-primary w-100">Get
                                                Started</a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    <Row className="justify-content-center">
                    <Col className="gy-4  col-sm-auto">
                            <div>
                                <a href="#contact" className="btn bg-gradient btn-secondary"><i className="ri-shopping-cart-2-line align-middle me-1"></i> View All Packages</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Plans;