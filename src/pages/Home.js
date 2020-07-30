import React, { useRef, useEffect } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Aos from 'aos';
import 'aos/dist/aos.css';
// FILE IMPORT
import './Home.css';

import ScrollToTop from '../components/ScrollToTop';
import MovingRing from '../components/Movingring';
//import Cube3d from '../components/Cube3d';
import Msolution from '../components/Msolution'
import Msolution2 from '../components/Msolution2'
import Msolution3 from '../components/Msolution3'
import Msolution4 from '../components/Msolution4'
import Client from '../components/Client';

import Footer from '../components/Footer';

// IMAGES IMPORT
// import P1 from '../images/redhat.jpg';
// import P2 from '../images/valerie-romain-DLigu9IWFq4-unsplash.jpg'
// import P3 from '../images/mark-basarab-1OtUkD_8svc-unsplash.jpg'
// BODY
export default function Home() {
    //SCROLL TO A PERTICULAR DIV / COMPONENT
    const commentSection = useRef(null);

    const gotoCommentSection = () => window.scrollTo({
        top: commentSection.current.offsetTop,
        behavior: "smooth"
    });


    //SCROLL TO BOTTOM
    //    const scrollToBottom=()=>window.scrollTo({
    //        top:document.documentElement.scrollHeight,
    //        behavior:"smooth"
    //    });


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <div>

            <ScrollToTop />
            <div className="homecover">
                <i className="fas fa-arrow-down" onClick={gotoCommentSection}></i>
                <div className="contentvd">
                    <h2>Venalicium Digital</h2>
                    <h2>Venalicium Digital</h2>
                </div>
                <div className="workvd">
                    <h2 className="ws1" data-aos-duration="2000" data-aos="fade-up" >Lead Generation</h2><br />
                    <h2 className="ws2" data-aos-duration="2000" data-aos="fade-up" data-aos-delay="1000" >Content Creation</h2><br />
                    <h2 className="ws3" data-aos-duration="2000" data-aos="fade-up" data-aos-delay="2000">Lead Development</h2>
                </div>
                {/* <h1 onClick={scrollToBottom}>bottom</h1> */}
            </div>

            {/* =================================1ST DIV========================================= */}
            <div className="d1" ref={commentSection} data-aos="fade-up">
                <h1 data-aos="fade-up"><span className="b2b">B2B</span> Demand Generation Solutions</h1>
                <Row around="xs" >
                    <Col xs={6} md={4} lg={4}>
                        <div className="servicename">
                            <span data-aos-duration="600" data-aos="fade-right">Data Research And Development</span>
                            <span data-aos-duration="800" data-aos="fade-right">Survey Based Lead Generation</span>
                            <span data-aos-duration="900" data-aos="fade-right">Custom Sales Service</span>
                            <span data-aos-duration="700" data-aos="fade-right">Lead Generation</span>
                        </div>

                    </Col>
                    <Col xs={12} md={4} lg={4} data-aos-duration="800" data-aos="fade-up"> <MovingRing /> </Col>
                    <Col xs={6} md={4} lg={4}>

                        <div className="servicename2">
                            <span data-aos-duration="600" data-aos="fade-left">On Demand Webinar promotions</span>

                            <span data-aos-duration="600" data-aos="fade-left">Search Engine Optimization</span>
                            <span data-aos-duration="600" data-aos="fade-left">Content Syndication</span>
                            <span data-aos-duration="600" data-aos="fade-left">Market Research</span>
                        </div>
                    </Col>

                </Row>
            </div>

            {/*======================================2ND DIV========================================== */}

            <div className="d2" >
                <h1 className="div2and3heading" data-aos-duration="800" data-aos="fade-up"><span className="b2b">B2B </span>Marketing Solutions</h1>

                <Row around="xs">

                    <Col xs={12} md={6} lg={6} className="msolcol" data-aos-duration="1000" data-aos="fade-up">
                        <Msolution />
                    </Col>

                    <Col xs={12} md={6} lg={6} className="msolcol" data-aos-duration="1000" data-aos="fade-up">
                        <Msolution2 />
                    </Col>

                </Row>

            </div>

            {/* ===========================================3RD DIV==================================== */}
            <div className="d3">

                <Grid fluid>

                    <Row around="xs" className="try">
                        <Col xs={12} md={6} lg={6} className="msolcol" data-aos-duration="1000" data-aos="fade-up">
                            <Msolution3 />
                        </Col>

                        <Col xs={12} md={6} lg={6} className="msolcol" data-aos-duration="1000" data-aos="fade-up">
                            <Msolution4 />
                        </Col>

                    </Row>

                </Grid>
            </div>
            {/* ================================================4TH DIV======================== */}
            <div className="d4">
                <Client>
                    <h1>Reach Technology Buyers</h1>
                    <p className="homepara">Our entire audience of 30 million+ Enterprise and Small Business decision makers
                    is engaged multiple times per month – ensuring that our B2B solutions
                    database is up-to-date and that our buying intent data is the best in the industry.
        </p>
                </Client>
            </div>
            {/* ================================================5TH DIV======================== */}
            <div className="d5">
                <Client>
                    <h1>Real-Time Behavioral Insights</h1>
                    <p className="homepara">Our data-driven marketing platform collects information from in-market technology buyers real-time to provide
                    detailed and actionable intent data. Our B2B services platform integrates demand generation, data management and
                    reporting functionality into one seamless system.
         No-fuss, easy integration, ultimate flexibility, and unparalleled insight</p>
                </Client>
            </div>

            {/* 
            <div className="d6" data-aos-duration="1000" data-aos="fade-up">
                <h1 data-aos-duration="1000" data-aos="fade-up">Our Clients</h1>
                <Boxmodel />
            </div> */}

            <div className="footervd">
                <Footer />
            </div>

        </div>
    )
}











