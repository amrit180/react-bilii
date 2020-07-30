import React from 'react'
import './client.css'
export default function Client(props) {
    return (
        <div>
            <div className="loaderclient">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>{props.children}</span>
                <span></span>
                <span></span>
                <span></span>

            </div>
        </div>
    )
}
