import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                if (this.state.status !== "amir") {
                    this.setState({ status: "amir" });
                }
            } else {
                if (this.state.status !== "top") {
                    this.setState({ status: "top" });
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }
    render() {
        function hamburger() {
            const hamburger = document.querySelector('.header3 .nav-bar .nav-list .hamburger');
            const mobile_menu = document.querySelector('.header3 .nav-bar .nav-list ul');
            const menu_item = document.querySelectorAll('.header3 .nav-bar .nav-list ul li a');
            // const header3 = document.querySelector('.header3.container');
            // const company = document.querySelector('#company');
            // const logo = document.querySelector('#logo');


            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                mobile_menu.classList.toggle('active');


            });

            // document.addEventListener('scroll', () => {
            //     var scroll_position = window.scrollY;
            //     if (scroll_position > 250) {
            //         header3.style.backgroundColor = '#29323c';
            //         company.style.display = 'block';
            //         logo.style.display = 'none';
            //     } else {
            //         header3.style.backgroundColor = 'transparent';
            //         company.style.display = 'none';
            //         logo.style.display = 'block';
            //     }
            // });

            menu_item.forEach((item) => {
                item.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    mobile_menu.classList.remove('active');
                });
            });
        }



        return (
            <div id="header3" >
                <div className="header3 container3"
                    style={{
                        backgroundColor: this.state.status === "top" ? "transparent" : "rgba(0,0,0,0.7)",
                        color: this.state.status === "top" ? "transparent" : "white",
                        position: "fixed"
                    }}
                >
                    <div className="nav-bar" >
                        <div className="brand" >
                            <Link to="/"
                                style={{
                                    backgroundColor: this.state.status === "top" ? "red" : "green",
                                    color: this.state.status === "top" ? "white" : "blue",
                                    position: "relative"
                                }}
                            >
                                <h1 className="companyname"
                                    style={{
                                        backgroundColor: this.state.status === "top" ? "transparent" : "transparent",
                                        color: this.state.status === "top" ? "transparent" : "#03a9f4",
                                        position: "relative",
                                        fontSize: "25px"



                                    }}
                                >Venalicium Digital</h1>
                            </Link>

                        </div>
                        <Link to="/dataservices">


                            <h1 className="companyname"
                                style={{
                                    backgroundColor: this.state.status === "top" ? "transparent" : "transparent",
                                    color: this.state.status === "top" ? "rgb(197, 204, 214)" : "rgb(197, 204, 214)",
                                    position: "relative",
                                    fontSize: "25px"



                                }}
                            >Data Services</h1>
                        </Link>
                        <Link to="/dataanalytics">


                            <h1 className="companyname"
                                style={{
                                    backgroundColor: this.state.status === "top" ? "transparent" : "transparent",
                                    color: this.state.status === "top" ? "rgb(197, 204, 214)" : "rgb(197, 204, 214)",
                                    position: "relative",
                                    fontSize: "25px"



                                }}
                            >Data Analytics</h1>
                        </Link>


                        <div className="nav-list" id="tbar">
                            <div className="hamburger"
                                style={{
                                    backgroundColor: this.state.status === "top" ? "transparent" : "transparent",
                                    color: this.state.status === "top" ? "black" : "white",
                                    position: "relative"
                                }}
                                onClick={hamburger}>
                                <div className="bar"
                                // style={{
                                //     backgroundColor: this.state.status === "top" ? "red" : "green",
                                //     color: this.state.status === "top" ? "white" : "black",
                                //     position: "relative"
                                // }}
                                ></div>
                            </div>
                            <ul>
                                <li><Link to="/home" data-after="Home">Home</Link></li>
                                <li><Link to="/data-services" data-after="Services">Services</Link></li>
                                {/* <li><Link to="#projects" data-after="Projects">Projects</Link></li> */}
                                <li><Link to='/about' data-after="About Us">About Us</Link> </li>
                                <li><Link to="/contact" data-after="Contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
