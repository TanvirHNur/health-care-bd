import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FindADoctor from '../FindADoctor/FindADoctor';

const FindDoctors = () => {
    const [doctors,setDoctors] = useState([])
        useEffect( ()=>{
            fetch('doctors.json')
            .then(res=>res.json())
            .then(data=>setDoctors(data))
        } , []);
    return (
        <Row className="m-5">
            <div className="d-flex justify-content-evenly">
            <h1>Find a Doctor</h1>
            <h1 className="learn-more-btn">Request an Appointment</h1>
            </div>
            {
                doctors.map(doctor=> <FindADoctor
                key={doctor.id}
                doctor={doctor}
                ></FindADoctor>)
            }
        </Row>
    );
};

export default FindDoctors;