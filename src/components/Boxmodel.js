import React from 'react'
import './boxmodel.css';
import red from '../Image/redhat.png'
import progress from '../Image/Progress.png'
import eight from '../Image/eight.png'
import mitel from '../Image/Mitel-logo.png'
import sage from '../Image/sage-logo.jpg'
import zen from '../Image/zendesk_logo.png'
export default function Boxmodel() {
    return (
        <div>
            <div className="containerbox">
                <div className="boxes">
                    <div className="thumb">
                        <img src={red} />

                    </div>
                    <div className="details">
                        <div className="content">
                            <i className="far fa-handshake"></i>
                            <h3>Red Hat</h3>

                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="thumb">
                        <img src={eight} />

                    </div>
                    <div className="details">
                        <div className="content">
                            <i className="far fa-handshake"></i>
                            <h3>Global Cloud Communications</h3>

                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="thumb">
                        <img src={sage} />

                    </div>
                    <div className="details">
                        <div className="content">
                            <i className="far fa-handshake"></i>
                            <h3>Sage</h3>

                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="thumb">
                        <img src={mitel} />

                    </div>
                    <div className="details">
                        <div className="content">
                            <i className="far fa-handshake"></i>
                            <h3>Mitel</h3>

                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="thumb">
                        <img src={progress} />

                    </div>
                    <div className="details">
                        <div className="content">
                            <i className="far fa-handshake"></i>
                            <h3>Progress</h3>

                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="thumb">
                        <img src={zen} />

                    </div>
                    <div className="details">
                        <div className="content">
                            <i className="far fa-handshake"></i>
                            <h3>Zendesk</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
