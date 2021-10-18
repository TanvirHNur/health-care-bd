import React from 'react';
import { Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import rooms from '../../../images/home-images/room-rent.png'
import amenities from '../../../images/home-images/amenities.png'
import orchard from '../../../images/home-images/orchard-rd.png'
import faq from '../../../images/home-images/faq.png'


const WhyUs = () => {
    return (
    <>
        <Row className="m-4">
            <div className="col-12">
                <h1>Why Health Care</h1>
                <p>
                Located in the heart of Dhaka’s premier Orchard shopping district, Health care Centre is home to specialist doctors, nurses, and medical staff providing quality care across 30 different specialties and subspecialties. Able to communicate in multiple languages, our specialists use state-of-the-art technology to holistically serve your healthcare needs.
                </p>
                <br />
                <p>Learn about how our doctors’ depth of expertise, quality care from our nurses and staff, and experience with modern medical technology can help you and your loved ones.</p>
            </div>
            
        </Row>
        <Row className="m-4">
            <div className="col-md-3 col-6">
                <Link to="/" className="">
                    <img src={rooms} alt="" />
                    <h6  className="ms-3">Rooms and Rates</h6>
                </Link>
            </div>
            <div className="col-md-3 col-6">
                <Link to="/" className="">
                    <img src={amenities} alt="" />
                    <h6  className="ms-5">Amenities</h6>
                </Link>
            </div>
            <div className="col-md-3 col-6">
                <Link to="/" className="">
                    <img src={orchard} alt="" />
                    <h6  className="ms-3">How to Get Here</h6>
                </Link>
            </div>
            <div className="col-md-3 col-6">
                <Link to="/" className="">
                    <img src={faq} alt="" />
                    <h6  className="ms-5">FAQ</h6>
                </Link>
            </div>
        </Row>

    </>
    );
};

export default WhyUs;