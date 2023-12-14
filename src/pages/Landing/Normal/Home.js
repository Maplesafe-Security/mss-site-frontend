import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <React.Fragment>
             <section className="section nft-hero" id="home">
            <div className="bg-overlay"></div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} sm={10}>
                        <div className="text-center">
                            <h1 className="display-4 fw-medium mb-4 lh-base text-white">Elevate Your <span className="text-secondary"> Security </span> Experience</h1>
                            <p className="lead text-white-50 lh-base mb-4 pb-2">Ready to fortify your space with state-of-the-art security? Explore our services or get in touch with our experts today and get security cameras installed.</p>

                            <div className="hstack gap-2 justify-content-center">
                                <a onClick={()=> { props.onPlanChanged(`Hello,\nI would like to inquire about a free consultation! \n \nRegards, \n`)}} href="#contact" className="btn btn-primary">Book a Free Consultation <i className="ri-arrow-right-line align-middle ms-1"></i></a>
                                <a href="#plans" className="btn btn-secondary">View Plans <i className="ri-eye-line align-middle ms-1"></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Home;