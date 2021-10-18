import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../../images/hospital.png'

const Cover = () => {
    return (
        <div id="home">
            <Row className="m-4 align-items-center">
                <div className="col-md-6">
                <h5>AMAZING THINGS ARE HAPPENING HERE</h5>
                <h1>More Top Doctors than any hospital in the BD</h1>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                
            </Row>
        </div>
    );
};

export default Cover;