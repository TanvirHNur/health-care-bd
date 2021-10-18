
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'


//footer section for all pages
const Footer = () => {
    return (
        <Row className="m-5 footer">
        <div className="col-md-4  mb-4">
        <div className="about-us">
                <h4>About Us</h4>
                <div className="about">            
                <i className="far fa-check-circle"></i>
                <Link className="footer-link" to="/">Corporate Profile</Link>
                </div>
                <div className="about">            
                <i className="far fa-check-circle"></i>
                <Link className="footer-link" to="/">Clinical Outcomes</Link>

                </div>
                <div className="about">            
                <i className="far fa-check-circle"></i>
                <Link className="footer-link" to="/">Volunteer</Link>

                </div>
                <div className="about">            
                <i className="far fa-check-circle"></i>
                <Link className="footer-link" to="/">Governance and Leadership</Link>

                </div>
            </div>
        </div>
        <div className="col-md-4  mb-4">
            <h4>Patient Care</h4>
            <div>
            <Link className="footer-link" to="/">Conditions & Treatments</Link>
            </div>
            <div>
            <Link className="footer-link" to="/">Visitor Information</Link>
            </div>
            <div>
            <Link className="footer-link" to="/">Your Hospital Stay</Link>
            </div>
            <div>
            <Link className="footer-link" to="/">E-Services</Link>
            </div>
            <div>
            <Link className="footer-link" to="/">Specialties & Services</Link>
            </div>
            <div>
            <Link className="footer-link" to="/">Terms and Conditions</Link>
            </div>
            <div>
            <Link className="footer-link" to="/">Privacy Policy</Link>
            </div>
            <div>
            <Link className="footer-link" to="/">Your Clinic Visit</Link>
            </div>
        </div>
        <div className="col-md-4" >
            <h4>Education</h4>
            <div>
                <Link className="footer-link" to="/">Undergraduate</Link>
            </div>
            <div>
                <Link className="footer-link" to="/">Residency</Link>
            </div>
            <div>
                <Link className="footer-link" to="/">Continuing Education</Link>
            </div>
            <div>
                <Link className="footer-link" to="/">Fellowships</Link>
            </div>
            <div className="social my-4">
            <Link to="/"><i className="fab fa-facebook me-3 footer-link"></i></Link>
            <Link to="/"><i className="fab fa-twitter me-3 footer-link"></i></Link>
            <Link to="/"><i className="fab fa-linkedin me-3 footer-link"></i></Link>
            
            </div>
        </div>
      </Row>
    
            
        
    );
};

export default Footer;