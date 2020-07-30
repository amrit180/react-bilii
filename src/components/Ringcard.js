import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import './ringcard.css';
export default class Ringcard extends Component {
  render() {
    return (
      <div>

        <Row around="xs">
          <Col xs={12} sm={6} md={4} lg={4}>

            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">

                <h2>React.js</h2>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">

                <h2>Wordpress</h2>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">

                <h2>Node.js</h2>
              </div>
            </div>
          </Col>

        </Row>



        <Row around="xs" className="row2">
          <Col xs={12} sm={6} md={4} lg={4}>

            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">

                <h2>Basic Frontend</h2>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">

                <h2>Graphics Designing</h2>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <div className="square">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">

                <h2>Video Editor</h2>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    )
  }
}
