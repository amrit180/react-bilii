import React from 'react'
import about from '../Image/About4K.png'
import './About.css'
import contact from '../Image/contact.jpg'
import it from '../Image/it.jpg'
import sale from '../Image/Sales.jpg'
import finance from '../Image/finance.jpg'
import human from '../Image/human.jpg'
import marketing from '../Image/marketing.jpg'
import Business from '../Image/Business.jpg'
import Card from './Card'
import red from '../Image/redhat.png'
import progress from '../Image/Progress.png'
import eight from '../Image/eight.png'
import mitel from '../Image/Mitel-logo.png'
import sage from '../Image/sage-logo.jpg'
import zen from '../Image/zendesk_logo.png'
import Button from './Button'
import { Row, Col } from 'react-flexbox-grid'

export default function About() {
    return (
        <div>
            <div className="carousels">
                <img className="pics" src={about} alt="pic" />
                <h1>About VenaliciumB2B<br />Digital</h1>

            </div>
            <div className="container">
                <div className="div">
                    <div className="div1">
                        <h1>Just the B2B Facts</h1>
                        <p>Venalicium Digital is a data-driven demand generation partner created by industry pioneers who have set the standards for quality lead generation programs over the past three decades. We provide full-funnel, flexible and scalable solutions to target in-market technology buyers and positively impact sales and marketing ROI.</p>
                    </div>
                    <div className="div2">
                        <h1>Uncovering In-Market Buyers</h1>
                        <p>Venalicium Digital is a data-driven marketing platform that offers lead generation and data services that accelerate the technology sales process by identifying intent among technology buyers. Founded in 2009, Venalicium Digital B2B helps marketers meet the ever-changing demands of B2B sales.</p>
                    </div>
                </div>
                <div className="cards-value">
                    <Row between="xs" >
                        <Col xs={12} sm={12} md={12} lg={4} >
                            <div> <Card image={it} title="IT" info="33.9 Million IT Technology Buyers" className="dj" /></div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} >

                            <div> <Card image={sale} title="Sales" info="42.8 Million Business Technology Buyers" className="dj" /></div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} >
                            <div> <Card image={marketing} className="dj" title="Marketing" info="If you are wondering what digital marketing is… it's is advertising delivered through digital channels. Channels such as social media, mobile ..." /></div>
                        </Col>
                    </Row>
                    <Row between="xs"  >
                        <Col xs={12} sm={12} md={12} lg={4} >
                            <div> <Card image={finance} className="dj" title="Finance" info="13.5 Million Finance Technology Buyers" /></div>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} >
                            <div> <Card image={Business} className="dj" title="Business" info="11.3 Million Marketing Technology Buyers" /></div>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} >
                            <div> <Card image={human} className="dj" title="Human Resources" info="10.4 Million HR Technology Buyers" /></div>
                        </Col>
                    </Row>









                </div>
                <div className="divs">

                    <Row between="xs">
                        <Col xs={12} sm={12} md={12} lg={6} ><div className="picss"><h1>Data drives demand</h1>
                            <p>With several innovative approaches across lead generation,<br /> digital marketing, account-based marketing and database marketing,<br /> venalicium digital provides flexible, scalable solutions for marketers across several vertical markets.<br /> venalicium digital solutions leverage an audience of more than 10 million enterprise and SMB buyers <br />and offer unprecedented depth of detail and extremely high-quality data.</p>
                        </div> </Col>
                        <Col xs={12} sm={12} md={12} lg={6} > <div className="picsd" ><img className="pictures" src={contact} alt="pic" /> </div></Col>

                    </Row>


                </div>
                <div className="client">
                    <h1 className="heading">Our Client</h1>
                    <p>Thanks to these and many other fabulous clients, we’ve been recognized as one of the fastest growing B2B marketing companies in the United States for the past two years.</p>
                    <div className="client-grid">
                        <div className="client-div"><img className="picture" src={red} alt="e" /></div>
                        <div className="client-div"><img className="picture" src={progress} alt="e" /></div>
                        <div className="client-div"><img className="picture" src={sage} alt="e" /></div>
                        <div className="client-div"><img className="picture" src={zen} alt="e" /></div>
                        <div className="client-div"><img className="picture" src={eight} alt="e" /></div>
                        <div className="client-div"><img className="picture" src={mitel} alt="e" /></div>
                    </div>
                </div>
                <div className="contact">
                    <h2>To learn more about our audience and product offerings,</h2>
                    <div className="button"> <Button title="Contact Us" /></div>
                </div>
            </div>
        </div>
    )
}
