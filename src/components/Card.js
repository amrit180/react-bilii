import React from 'react'
import './Card.css'



function Card({ image, title, info }) {
    return (
        <div className="card">
            <div className="poster"><img src={image} alt="pic" /> </div>
            <div className="details">
                <h1>{title}</h1>
                <div className="info">
                    <p>{info}</p>
                </div>

            </div>
        </div>
    )
}

export default Card
// FaRegStar
// FaStarHalfAlt
// FaStar