import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <React.Fragment>
            <section className="py-5 bg-primary position-relative">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col className="col-sm">
                            <div>
                                <h4 className="text-white mb-0 fw-semibold">Secure Your Cutting-Edge Surveillance!</h4>
                            </div>
                        </Col>

                        <Col className="col-sm-auto">
                            <div>
                                {/* <Link to="/apps-nft-create" className="btn bg-gradient btn-success me-1">Book Free Consultation</Link> */}
                                {/* <Link to="/apps-nft-explore" className="btn bg-gradient btn-secondary">Order Online</Link> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default CTA;