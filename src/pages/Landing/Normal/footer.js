import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
// import logolight from "../../../assets/images/logo-light.png";
import logomss from "../../../assets/images/logo-maplesafesecurity.png";


const Footer = () => {
    return (
        <React.Fragment>
            <footer className="custom-footer bg-dark py-5 position-relative">
                <Container>
                    <Row>
                        <Col lg={12} className="mt-2">
                            <div>
                                <div>
                                    <img src={logomss} alt="logo light" height="100" />

                                </div>
                                <div className="mt-2">
                                        <p>As leaders in the industry, we specialize in delivering secure, simple, and personalized security systems for homes and businesses.</p>
                                        <p>Your safety is our priority at Maplesafe Security.</p>
                                    {/* <p>Premium Multipurpose Admin & Dashboard Template</p>
                                    <p>You can build any type of web application like eCommerce, CRM, CMS, Project management apps, Admin Panels, etc using Velzon.</p> */}
                                </div>
                            </div>
                        </Col>
                        {/* <Col lg={7} className="ms-lg-auto">
                            <Row>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-white mb-0">Company</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Gallery</Link></li>
                                            <li><Link to="#">Projects</Link></li>
                                            <li><Link to="#">Timeline</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-white mb-0">Apps Pages</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="#">Services</Link></li>
                                            <li><Link to="#">Pricing</Link></li>
                                            <li><Link to="#">Booking</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-white mb-0">Support</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="#">FAQ</Link></li>
                                            <li><Link to="#">Contact</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col> */}

                    </Row>

                    <Row className="text-center text-sm-start align-items-center mt-1">
                        <Col sm={6}>

                            <div>
                                <p className="copy-rights mb-0">
                                    {new Date().getFullYear()} © Maplesafe Security
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end mt-3 mt-sm-0">
                                <ul className="list-inline mb-0 footer-social-link">
                                    {/* <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-facebook-fill"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-linkedin-fill"></i>
                                            </div>
                                        </Link>
                                    </li> */}
                                    <li className="list-inline-item">
                                        <Link to="https://wa.me/message/7UNVHHXHRUJHP1" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-whatsapp-fill"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-twitter-x-fill"></i>
                                            </div>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment >
    );
};
// linkedin, twitter, facebook, instagram, whatsapp

export default Footer;