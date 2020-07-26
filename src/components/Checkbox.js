import React from 'react'
import './Checkbox.css'


export default function Checkbox({ title }) {
    return (
        <div>
            <label className="containers">{title}
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}
