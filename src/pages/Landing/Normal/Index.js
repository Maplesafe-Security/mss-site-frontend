import React, {useState} from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Connect from './Connect';
import Products from "./Products";
// import Features from './Features';
import Portfolio from "./Portfolio";
import DiscoverItems from "./DiscoverItems";
import TopCreator from "./TopCreator ";
import CTA from './CTA';
import Footer from "./footer";
import Team from './team';

// import Navbar from './navbar';
// import Home from './home';
import Client from './client';
import Services from './services';
import Features from './features';
import Plans from './plans';
// import Faqs from './faq';
import Reviews from './reviews';
import Counter from './counter';
import WorkProcess from './workProcess';
// import Team from './team';
import Contact from './contact';
// import Cta from './cta';
// import Footer from './footer';


const Index = () => {
    document.title = " Maplesafe Security | Camera, Alarm, Sensor Service Installation in Ontario";

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const [plan, setPlan] = useState("");
    const onPlanChanged = newPlan => {
        console.log("newplan is ", newPlan)
        setPlan(newPlan)
    }
    return (
        <React.Fragment>
            <div className="layout-wrapper landing">
                <Navbar onPlanChanged={(x) => onPlanChanged(x)} />
                <Home onPlanChanged={(x) => onPlanChanged(x)}/>
                <Services />
                <Features /> 
                <Portfolio />
                {/* <TopCreator /> */}
                <WorkProcess/>
                <Reviews/>
                <Counter />
                <Plans onPlanChanged={(x) => onPlanChanged(x)}/>
                <Team />
                <Contact plan={plan} />
                <CTA />
                <Footer />
                <button onClick={() => toTop()} className="btn btn-danger btn-icon landing-back-top" id="back-to-top">
                    <i className="ri-arrow-up-line"></i>
                </button>
            </div>
        </React.Fragment>
    );
};

export default Index;