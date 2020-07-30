import React, { useEffect } from 'react'

import './Landing.css';
import { Link } from 'react-router-dom';
import Landingcomponent from '../components/Landingcomponent'
export default function Landing() {



    return (

        <div>
            <div className="landingpagesigleDiv">
                <div className="landingcompanyname">     <h1 className="land">Venalicium Digital</h1></div>

                <Landingcomponent />

            </div>

            <div className="landingbutton">
                <Link to="/home" className="landingbuttonvd">I Agree</Link>
                <Link to="##" className="landingbuttonvd">I Disagree</Link>
            </div>
        </div>
    )
}


