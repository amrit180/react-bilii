import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Button from './Button'
import Checkbox from './Checkbox'
// import Form from './Form'


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section services">
                    <h1 className="logo-t"><span>Marketing</span> Services</h1>
                    <p>Content Syndication<br />
                    Webinar Promotion<br />
                    On Demand Webinar promotions<br />
                    BANT/Highly Qualified Leads<br />
                    Account Based Marketing(ABM)<br />
                    Search Engine Optimization<br />
                    Paid Search Management<br />
                    Social Media Marketing<br />
                    Contact Appending<br />
                    Customer prong</p>
                    <div className="margin"><FaFacebookF size="20px" className="icon" />
                        <FaTwitter size="20px" className="icon" />
                        <FaLinkedinIn size="20px" className="icon" />
                    </div>
                </div>
                <div className="footer-section media">
                    <h1>Our<span> Media</span> Pulishing</h1>
                    <h4 className="home"><span>Marketing</span> Professionals</h4>
                    <h4 className="home"><span>Finance </span> Professionals</h4>
                    <h4 className="home"><span>Technology</span> Professionals</h4>
                    <h4 className="home"><span>HR</span> Professionals</h4>
                </div>
                <div className="footer-section data-links">
                    <h1><span>Data</span> Services</h1>
                    <h4 className="home"><span>Technology</span> Database</h4>
                    <h4 className="home"><span>Healthcare</span> Database</h4>
                    <h4 className="home"><span>Industry specific </span> Database</h4>
                </div>
                <div className="footer-section contact-form">
                    <h1>Download<span> our</span> Media Kit</h1>
                    <div className="inputs">
                        <input type="text" placeholder="First Name" className="validates" />
                        <input type="text" placeholder="Last Name" className="validates" />
                    </div>
                    <div className="emails">
                        <input type="text" placeholder="Email" className="validates" />
                        <input type="text" placeholder="Company" className="validates" />
                    </div>
                    <div className="nos">
                        <input type="text" placeholder="Number" className="validates" />
                        <input type="text" placeholder="title" className="validates" />
                    </div>
                    <div>
                        <Checkbox title="I authorize Venalicium Digital to email me relevant content such as ebooks, white papers, research reports, webinar invitations, and event invitations." />
                        <Button title="Submit" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copy">&copy;<script>document.write(new Date().getFullYear());</script> Venalicium Digital 2020. All Right Reserved. | Designed by Bili

                </div>
                <div className="footer-bottom2">
                    <div className="copy">  Design | Developed And  Maintained by <a className="bili-link" href="https://www.bili.co.in"> Bili Pvt. Ltd. </a>

                    </div>
                </div>
            </div>
        </div >
    )
}
