import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FindADoctor.css'

const FindADoctor = ({doctor}) => {
    const {id,img,email, name,hospital, address, specialties} = doctor;
    return (
        <div className="col-md-6">
                 <Col>
                 <Card  className="service-col my-3 p-3 d-flex flex-row align-items-center">
                     <Card.Img className="img-fluid doctor-img" variant="top" src={img} />
                    <Card.Body>
                     <Card.Title>{name}</Card.Title>
                     <h6>{email}</h6>
                     <Card.Text>
                         {hospital}
                         <br />
                         {address}
                     </Card.Text>
                     <h6>PRIMARY SPECIALTIES: {specialties}</h6>
                     <Link className="learn-more-btn" to={`booking/${id}`}>Book Online</Link>
                 </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default FindADoctor;