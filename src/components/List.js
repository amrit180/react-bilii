import React, { useEffect } from 'react'
import './List.css'
import { FaStar } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function List({ details }) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <ul data-aos-duration="1000" data-aos="fade-up" >
                <li data-aos-duration="1000" data-aos="fade-up" >
                    <FaStar color="#fff" className="iconss" />
                    <span className="number">{details}</span>
                </li>
            </ul>
        </div>
    )
}
