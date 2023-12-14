import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap'; // Make sure to import your components from the correct library

import { Link } from 'react-router-dom';

// Import Images
import avatar1 from "../../../assets/images/users/ava1.png";
import avatar2 from "../../../assets/images/users/ava2.png";
import avatar3 from "../../../assets/images/users/ava3.png";
import avatar4 from "../../../assets/images/users/ava4.png";
import avatar5 from "../../../assets/images/users/ava5.png";
import avatar6 from "../../../assets/images/users/ava6.png";
import avatar7 from "../../../assets/images/users/ava7.png";
import avatar8 from "../../../assets/images/users/ava8.png";


const Team = () => {

    const initialTeammatesToShow = 3; // Set the number of rows to show initially
    const [teammatesToShow, setTeammatesToShow] = useState(initialTeammatesToShow);

    const teammatesData = [
        { name: 'Wasif Yousaf', role: 'Head of IT Operations', avatar: avatar2, hasLinkedin:true, siteurl:"https://linkedin.com" },
        { name: 'Kareem Omar', role: 'CEO', avatar: avatar1, hasLinkedin:true, siteurl:"https://linkedin.com" },
        { name: 'Daud Yalcin', role: 'Head of Business Development', avatar: avatar3, hasLinkedin:true, siteurl:"https://linkedin.com" },
        { name: 'Kaitlyn Clements', role: 'Sales Supervisor', avatar: avatar4, hasLinkedin:true, siteurl:"https://linkedin.com"},
        { name: 'Kyla Colon', role: 'Marketing Lead', avatar: avatar5, hasLinkedin:true, siteurl:"https://linkedin.com"},
        { name: 'Abbie Melton', role: 'Engineering Manager', avatar: avatar6, hasLinkedin:true, siteurl:"https://linkedin.com"},
        { name: 'Barnaby Lara', role: 'Customer Service Supervisor', avatar: avatar7},
        { name: 'Ruben Gilmore', role: 'Customer Service ', avatar: avatar7},
        { name: 'Aaliyah Sosa', role: 'Customer Service ', avatar: avatar8 },
        { name: 'Sam Rose', role: 'Regional Manager (Toronto)', avatar: avatar7 },
        { name: 'Ian Monroe', role: 'Installation Technician (Toronto)', avatar: avatar7 },
        { name: 'Fiona Kidd', role: 'Installation Technician (Toronto)', avatar: avatar8 },
        { name: 'Lana Wiley', role: 'Installation Technician (Toronto)', avatar: avatar8 },
        { name: 'Keith Blaese', role: 'Installation Technician (Scarborough)', avatar: avatar7 },
        { name: 'Brayden Cooper', role: 'Installation Technician (Scarborough)', avatar: avatar7 },
        { name: 'Marshall Mendoza', role: 'Installation Technician (Mississauga)', avatar: avatar7 },
        { name: 'Elliot Robbins', role: 'Installation Technician (Mississauga)', avatar: avatar7 },
        { name: 'Alex Kane', role: 'Installation Technician (Vaughan)', avatar: avatar8 },
        { name: 'Carlo Church', role: 'Installation Technician (Vaughan)', avatar: avatar7 },
        { name: 'Liana Hall', role: 'Regional Manager (Ontario)', avatar: avatar8 },
        { name: 'Mike Baker', role: 'Installation Technician (Western Ontario)', avatar: avatar7 },
        { name: 'Niall Barnes', role: 'Installation Technician (Western Ontario)', avatar: avatar7 },
        { name: 'Gianluca Beasley', role: 'Installation Technician (Durham)', avatar: avatar7 },
        { name: 'Theodore French', role: 'Installation Technician (Durham)', avatar: avatar7 },
        { name: 'Carter Hart', role: 'Installation Technician (East Ontario)', avatar: avatar7 },
        { name: 'Spencer Ayala', role: 'Installation Technician (East Ontario)', avatar: avatar8 },
        { name: 'Ashley Callum', role: 'Installation Technician (North Ontario)', avatar: avatar8 },
        { name: 'Herman Ahmad', role: 'Installation Technician (North Ontario)', avatar: avatar7 },
    ];


    const handleViewAllClick = () => {
        // Toggle between showing all teammates and the initial amount
        setTeammatesToShow((prevTeammatesToShow) =>
          prevTeammatesToShow === teammatesData.length ? initialTeammatesToShow : teammatesData.length
        );
      };
      
    return (
        <React.Fragment>
            <section className="section bg-light" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={4}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Our <span className="text-danger">Team </span></h3>
                                <p className="text-muted mb-4 ff-secondary"> Meet the dedicated experts behind our security solutions – a team committed to your safety and peace of mind.</p>
                            </div>
                        </Col>
                    </Row>

                    {[...Array(Math.ceil(teammatesToShow / 3))].map((_, rowIndex) => (
                        <Row key={rowIndex}>
                            {teammatesData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((teammate, index) => (
                                <Col key={index} lg={4} sm={12}>
                                    <Card>
                                        <CardBody className="text-center p-4">
                                            <div className="avatar-xl mx-auto mb-4 position-relative">
                                                <img src={teammate.avatar} alt="" className="img-fluid rounded-circle" />
                                                {teammate.hasLinkedin ? <a href={teammate.siteurl} className="btn btn-secondary btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                                    <div className="avatar-title bg-transparent">
                                                        <i className="ri-linkedin-fill align-bottom"></i>
                                                    </div>
                                                </a>: <></>}
                                            </div>

                                            <h5 className="mb-1">{teammate.name}</h5>
                                            <p className="text-muted mb-0 ff-secondary">{teammate.role}</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ))}
                    
                    <Row>
                        <div className="col-lg-12">
                        <div className="text-center mt-2">
                            <button className="btn btn-primary" onClick={handleViewAllClick}>
                            {teammatesToShow === teammatesData.length ? 'Hide' : 'View All'} Members{' '}
                            <i className="ri-arrow-right-line ms-1 align-bottom"></i>
                            </button>
                        </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Team;