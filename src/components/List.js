import React from 'react'
import './List.css'
import { FaStar } from "react-icons/fa";

export default function List({ details }) {
    return (
        <div>
            <ul>
                <li>
                    <FaStar color="#fff" className="iconss" />
                    <span className="number">{details}</span>
                </li>
            </ul>
        </div>
    )
}
