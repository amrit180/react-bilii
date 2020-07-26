import React from 'react'
import './Button.css'

export default function Button({ title }) {
    return (
        <div>
            <button className="block" onClick={console.log("clicked")}>{title}</button>
        </div>
    )
}
