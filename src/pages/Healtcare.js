import React, { useEffect } from 'react'
import tech from '../Image/databsepng.png'
import './Healtcare.css'
import List from '../components/List'
import { FaDotCircle } from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Healtcare() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (
        <div>
            <div className="imaged">
                <img src={tech} alt="tech" className="techimgs" />
            </div>
            <div className="techcontainer">
                <h1 className="techh1" data-aos-duration="1500" data-aos="fade-up">HEALTHCARE DATABASE</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="1000" data-aos="fade-up">Health care database can be distinctly different depending on the user.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">Equipment manufacturers and Pharmaceutical companies would seek a database of Providers. At times companies would require a databases of Providers in a given specialty that have a demand for the service or product they specialize.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">Health care and wellness product industry has huge requirement of quality databases. They have products to suit different requirements of varied individual groups. The need of a real time updated database cannot be over emphasized.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">Some specific groups within the healthcare database are pharmacists, pharmacies, Physiotherapists, Chiropractors, nursing personnel and many such more</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up"> Health care provider, Individuals and Institutions, would require databases of potential and prospective Client base, based on the institution or individual caregivers specialization.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">Venalicium digital have knowledgeable experts with considerable experience in this field to create and provide healthcare databases.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">Venalicium digital has the skill set and uses the best in class tools to create a dynamic, effective and ever fresh database.</h4>
                    <h4 data-aos-duration="1000" data-aos="fade-up">Venalicium digital being front runners in this field has an extremely efficient Email Appending service too, which is ever so critical to healthcare databases</h4>
                </div>

                <div className="techlist">
                    <div>
                        <List details="Internal Medicine Specialists List" />
                        <List details="Orthopaedists List" />
                        <List details="Oncologists List" />
                        <List details="Physical Therapists List" />
                        <List details="Haematologists List" />
                        <List details="Ophthalmologists List" />
                        <List details="Pathologists List " />
                        <List details="Radiation Oncologists List " />
                        <List details="Radiologists List" />
                        <List details="Chiropractors List" />
                        <List details="Neurologists List" />
                        <List details="Nephrologists List" />
                        <List details="Obstetrics List" />
                        <List details="Paediatricians List" />
                        <List details="Physical Medicine / Rehabilitation List" />
                        <List details="Anesthetists List" />
                        <List details="Gastroenterologists List" />
                        <List details="Neurosurgeons List" />
                        <List details="Athletic Therapists List" />
                        <List details="Family/Marital Therapists List" />
                        <List details="Hospital Administrators List" />
                        <List details="Hospital List" />
                        <List details="Hospital Executives List" />
                        <List details="Hospitals Decision Makers List" />
                        <List details="Medical and Hospital Equipment Industry Executives List" />
                        <List details="Medical Institutions List" />
                        <List details="Pharmacies List" />
                        <List details="Respiratory Therapists List" />
                        <List details="HIPAA Compliance Managers Mailing List" />
                        <List details="Home Healthcare Providers Mailing List" />
                        <List details="Hospital Office Managers Mailing List" />
                        <List details="Nurse Practitioners Mailing List" />
                        <List details="Professional Career Women in Healthcare Mailing List" />
                        <List details="Office Based Nurses Mailing List" />
                        <List details="Hospital Office Managers Mailing List" />
                        <List details="Nurses and RN’s Mailing List" />
                        <List details="HMO and PPO Managers Mailing List" />
                        <List details="Nursing Home Operators Mailing List" />
                        <List details="Rheumatologist’s Mailing List" />
                        <List details="Surgeon Mailing List" />
                        <List details="Pulmonologists Mailing List" />
                        <List details="Otolaryngologist Mailing List" />
                        <List details="Emergency Medicine Specialists Mailing List" />
                        <List details="General Surgeons Mailing List" />
                        <List details="Psychiatrists Mailing List" />
                        <List details="Orthopedic Surgeons Mailing List" />
                        <List details="Diagnostic Radiologists Mailing List" />
                        <List details="Internist’s Mailing List" />


                    </div>
                    <div>
                        <List details="Oral Surgeon’s Mailing List" />
                        <List details="Gynecologists Mailing List" />
                        <List details="Dermatologist’s Mailing List" />
                        <List details="Urologist List Mailing List" />
                        <List details="Plastic Surgeons Mailing List" />
                        <List details="Family Practitioners Mailing List" />
                        <List details="General Practitioners Mailing List" />
                        <List details="Nurses Mailing List" />
                        <List details="Dentists Mailing List" />
                        <List details="Phlebotomists Mailing List" />
                        <List details="Anatomical Clinical Pathologist Mailing List" />
                        <List details="Clinical Lab Scientists Mailing List" />
                        <List details="Denturists Mailing List" />
                        <List details="Addiction Counsellors Mailing List" />
                        <List details="Oral and Maxillofacial Surgeons Mailing List" />
                        <List details="Pharmaceutical Mailing List" />
                        <List details="Chest and Cardiac Surgeons Mailing List" />
                        <List details="Physiatrist Mailing List" />
                        <List details="Radiology Directors Mailing List" />
                        <List details="Nutritionist Medicine Physician Mailing List" />
                        <List details="Hypnotherapists Mailing List" />
                        <List details="Hypnotists Mailing List" />
                        <List details="Bariatrician Mailing List" />
                        <List details="Group Practice Physicians Mailing List" />
                        <List details="PACS Administrator Mailing List" />
                        <List details="Quality Assurance Medical Directors Mailing List" />
                        <List details="Dialysis Nurses Mailing List" />
                        <List details="Geriatrician Mailing List" />
                        <List details="Massage Therapists Mailing List" />
                        <List details="Cardiologists Mailing List" />
                        <List details="Naturopathic Physicians Mailing List" />
                        <List details="Optometrists Mailing List" />
                        <List details="Podiatrists Mailing List" />
                        <List details="Psychologists Mailing List" />
                        <List details="Occupational Therapists Mailing List" />
                        <List details="Pharmacy Directors Mailing List" />
                        <List details="Laboratory Directors Mailing List" />
                        <List details="Orthodontists Mailing List" />
                        <List details="Veterinarians Mailing List" />
                        <List details="ENT Specialists Mailing List" />
                        <List details="Cosmetologists Mailing List" />
                        <List details="Physician Recruiters Mailing List" />
                        <List details="Audiologists Mailing List" />
                        <List details="Paramedic Emergency Medical Technicians Mailing List" />
                        <List details="Infection Control Directors Mailing List" />
                        <List details="Oncology Nurses Mailing List" />
                        <List details="Dental Laboratories Mailing List" />

                    </div>
                </div>
                <div className="offer">
                    <h2>What is on offer:</h2>
                    <ul className="ul">
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Accurate, verified and cured database..</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>No wastage of time and effort.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Customized lists to suit the individual needs..</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Cost savings and improved ROI</h4></li>



                    </ul>
                </div>
                <div className="offerp">
                    <p>
                        Obtain an email list that ensures deliverability, relevance and highest accuracy. Find out how Venalicium digital can help you in earning maximum email ROI, connect with our experts at 630-326-8036 for a free consultation or email us at <a href="https://venaliciumdigital.com">info@venaliciumdigital.com</a></p>
                </div>
            </div>

        </div>
    )
}
