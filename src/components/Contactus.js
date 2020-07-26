import React from 'react'
import contact from '../Image/contacts.jpg'
import './Contactus.css'
// import { BsFillPersonFill } from 'react-icons/bs'
import Button from './Button'
import Checkbox from './Checkbox'

export default function Contactus() {
    return (
        <div>

            <div className="carousel">
                <img className="pic" src={contact} alt="pic" title="We want to hear from you" />
                {/* <h1>We want to hear from you</h1>
                <h4>Tell us a little bit about yourself and your question,<br />
                and someone will be in touch.
                </h4> */}
            </div >
            <div className="container">
                <h2 className="h2">Generate Demand Like Nobody's Business</h2>
                <h1 className="h1">Contact Us</h1>

                <div className="input">

                    <input type="text" placeholder="First Name" className="validate" />

                    <input type="text" placeholder="Last Name" className="validate" />
                </div>
                <div className="email">
                    <input type="text" placeholder="Email" className="validate" />
                    <input type="text" placeholder="Company" className="validate" />
                </div>
                <div className="no">
                    <input type="text" placeholder="Number" className="validate" />
                    <input type="text" placeholder="title" className="validate" />
                </div>
                <div className="label" >
                    <label >Area of Interest</label>
                    <select id="country" name="choose your option">
                        <option value="a">choose your option</option>
                        <option value="b">Partnership Oppurtunity</option>
                        <option value="c">Marketing solutions for my Bussiness</option>
                        <option value="d">Subscription Management</option>
                        <option value="e">Update my Profile</option>
                        <option value="f">Technical Support</option>
                        <option value="g">Others</option>
                    </select>

                </div>
                <div className="message">
                    <label >Message</label>
                    <textarea>Some text...</textarea>

                </div>
                <div className="check">
                    <Checkbox title="I agree to the Terms and Privacy Notice as per CCPA, GDPR and CASL." />
                    <Checkbox title="Subject to the Privacy Notice as per CCPA, GDPR and CASL, I consent to Venalicium Digital B2B using my contact data provided above to contact me by phone or email to provide information regarding Venalicium Digital B2B, its products and services, and other similar Venalicium Digital B2B products and services" />
                </div>
                <Button title="Submit" />
                <div className="address">
                    <div className="pad">
                        <h1>Office in California</h1>
                        <h5>2468 S Bascom Ave, #4,<br />
                            Campbell, CA 95008<br />
                            Phone Number: 630-326-8036<br />
                            Mail:info@venaliciumdigital.com
                            </h5>
                    </div>
                    <div className="pad">
                        <h1>Office in Chicago</h1>
                        <h5>4075, Meadow View Drive,<br />
                                St. Charles , IL 60175<br />
                                Phone Number: 630-326-8036<br />
                                Mail:info@venaliciumdigital.com
                            </h5>
                    </div>
                    <div className="pad">
                        <h1>Office in India</h1>
                        <h5>RMV-II stage, Dollars Colony,<br />
                                Opp 2nd Cross,Bangalore 560094<br />
                                Phone Number: +91-8043023516<br />
                                Mail:info@venaliciumdigital.com<br />
                        </h5>
                    </div>

                </div>
            </div >

        </div>

    )
}
