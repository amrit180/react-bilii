import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import dta from '../Image/datascience.png'
import devops from '../Image/DEVOPS.png'
import legacy from '../Image/legacy.png'
import modern from '../Image/moderndata.png'
import support from '../Image/support.png'
import './Legacy.css'
import tech from '../Image/databsepng.png'


export default function Legacy() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <div>
            <div className="Dimageaskv">
                <img src={tech} alt="tech" className="techimgkv" />
            </div>
            <div className="techcontainerkv">
                <h1 className="techh1kv" data-aos-duration="1000" data-aos="fade-up">LEGACY MODERNIZATION</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="800" data-aos="fade-up">An absolute must for those engaged in the field Technology to grow.</h4>
                    <img src={legacy} alt="tech" className="imgtech" />
                </div>
                <h1 className="techh1" data-aos-duration="1000" data-aos="fade-up">MODERN DATA PLATFORM</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="800" data-aos="fade-up">“Manage a complex multi-technology environment for real-time Data Management and Advanced Analytics.”</h4>
                    <img src={modern} alt="tech" className="imgtech" />
                </div>
                <h1 className="techh1" data-aos-duration="1000" data-aos="fade-up">DATA SCIENCE AND ADVANCED ANALYTICS</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="800" data-aos="fade-up">Generate business value by gaining insights from Big Data through innovative solutions fabricated by Statisticians and Technology experts.</h4>
                    <img src={dta} alt="tech" className="imgtech" />
                </div>
                <h1 className="techh1" data-aos-duration="1000" data-aos="fade-up">DEVOPS</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="800" data-aos="fade-up">Automation and Optimization with seamless collaboration of the development and operations of Hadoop and other Analytics Applications</h4>
                    <img src={devops} alt="tech" className="imgtech" />
                </div>
                <h1 className="techh1" data-aos-duration="1000" data-aos="fade-up">SUPPORT</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="800" data-aos="fade-up">Keeping the lights on 24*7 — supporting all the Big Data applications and Infrastructure used across the organization</h4>
                    <img src={support} alt="tech" className="imgtech" />
                </div>
            </div>

        </div>
    )
}
