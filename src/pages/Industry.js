import React, { useEffect } from 'react'
import tech from '../Image/databsepng.png'
import './Industry.css'
import List from '../components/List'
import { FaDotCircle } from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Industry() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (
        <div>
            <div className="imaged">
                <img src={tech} alt="tech" className="techimgs" />
            </div>
            <div className="techcontainer">
                <h1 className="techh1" data-aos-duration="1500" data-aos="fade-up">INDUSTRY SPECIFIC DATABASE</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="1000" data-aos="fade-up">Each industry has the need for various types of mailing list with differing information.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">There are innumerable industries and the need for Industry specific databases is infinite.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">The varieties and variations in the requirements of need based lists are huge and enterprises and businesses find it near impossible to keep these lists updated in real time with in-house efforts.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">Venalicium digital have the experience, experts with extensive knowledge in the intricacies of databases.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up"> Venalicium digital use latest tools to create dynamic, multi sourced, accurate list with need based informations in separate fields in quick time.</h4>up
                </div>

                <div className="techlist">
                    <div>
                        <List details="Oil and Gas Industry Executives List" />
                        <List details="Pharmaceutical Manufacturing Industry Executives List" />
                        <List details="Printing and Publishing Industry Executives List" />
                        <List details="Real Estate Agents and Mortgage Brokers List" />
                        <List details="Telecommunication Industry Executives List" />
                        <List details="Agriculture, Forestry and Fishing Industry Executives List" />
                        <List details="Mining Industry Executives List " />
                        <List details="Education Services Industry Executives List " />
                        <List details="Health and Beauty Industry Executives List" />
                        <List details="Insurance Service Industry Executives List" />
                        <List details="Hotel, Motels and Resorts Executives List" />
                    </div>
                    <div>

                        <List details="Legal Services Industry Executives List" />
                        <List details="Life Science Industry Executives List" />
                        <List details="Medical Device Manufacturing Industry Executives List" />
                        <List details="Advertising and Marketing Industry Executives List" />
                        <List details="Architectural Service Industry Executives List" />
                        <List details="Automotive Industry Executives List" />
                        <List details="Biotechnology Industry Executives List" />
                        <List details="Business Services Industry Executives List" />
                        <List details="Computer Software Industry Executives List" />
                        <List details="Consulting Services Industry Executives List" />
                        <List details="Hospital List" />                    </div>


                </div>

                <div className="offer">
                    <h2>What is on offer:</h2>
                    <ul className="ul">
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>An ever ready accurate mailing list with assured deliveries.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Effective delivery ensures increased exposure and reach.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Enhanced success rates in mailing campaigns.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Dual gain by cost reduction and increased revenue.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Next effect improved ROI.</h4></li>



                    </ul>
                </div>
                <div className="offerp">
                    <p>
                        To acquire and know about databases you require reach us at <a href="https://venaliciumdigital.com">info@venaliciumdigital.com</a></p>
                </div>
            </div>
        </div>


    )
}
