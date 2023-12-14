import React, { useState, useEffect } from 'react';
import { Collapse, Container, NavbarToggler, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Scrollspy from "react-scrollspy";

import MyCartDropdown from '../../../Components/Common/MyCartDropdown';

//import Images
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";
import logomss from "../../../assets/images/logo-maplesafesecurity.png";

const Navbar = (props) => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    };

    const [activeLink, setActiveLink] = useState();
    useEffect(() => {
        const activation = (event) => {
            const target = event.target;
            if (target) {
                target.classList.add('active');
                setActiveLink(target);
                if (activeLink && activeLink !== target) {
                    activeLink.classList.remove('active');
                }
            }
        };
        const defaultLink = document.querySelector('.navbar li.a.active');
        if (defaultLink) {
            defaultLink?.classList.add("active")
            setActiveLink(defaultLink)
        }
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => {
            link.addEventListener('click', activation);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', activation);
            });
        };
    }, [activeLink]);

    var windowSize = document.documentElement.clientWidth;
    useEffect(() => {
        var navbar = document.getElementById("navbar");
        if (windowSize >= 992) {
            navbar.classList.add("navbar-light")
        }
        else {
            navbar.classList.remove("navbar-light")
        }
    }, [windowSize, scrollNavigation]);

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/index">
                        {/* <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="17" /> */}
                        <img src={logomss} className="card-logo card-logo-light" alt="logo light" height="120" />
                    </Link>

                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>

                    <Collapse
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                        isOpen={isOpenMenu}
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "home",
                                "gallery",
                                "reviews",
                                "plans",
                                "team",
                                "contact",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item">
                                <NavLink href="#home" className={"nav" ? "" : "active text-success"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#services" className={"nav" ? "" : "active text-success"}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#gallery" className={"nav" ? "" : "active text-success"}>Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#reviews" className={"nav" ? "" : "active text-success"}>Reviews</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#plans" className={"nav" ? "" : "active text-success"}>Plans / Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#team" className={"nav" ? "" : "active text-success"}>Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#contact" className={"nav" ? "" : "active text-success"}>Contact</NavLink>
                            </li>
                        </Scrollspy>

                        <div className="d-flex align-items-center gap-3">
                            {/* <MyCartDropdown /> */}
                            <a onClick={()=> { props.onPlanChanged(`Hello,\nI would like to inquire about the free quote! \n \nRegards, \n`)}} href="#contact" className="btn btn-primary">Get A Free Quote</a>
                        </div>
                    </Collapse>
                </Container>
            </nav>
            <div className="bg-overlay bg-overlay-pattern"></div>
        </React.Fragment>
    );
};

export default Navbar;