import React from 'react';
import { Row } from 'react-bootstrap';
import './AppDownload.css'
import img from '../../../images/cover-2.png'
import app1 from '../../../images/app/Google_Play_Badge_Black.png'
import app2 from '../../../images/app/App_Store_Badge_Black_567x168.png'
import { Link } from 'react-router-dom';

const AppDownload = () => {
    return (
        <Row className="m-4 align-items-center">
            <div className="col-md-6">
                <img className="img-fluid app-img" src={img} alt="" />
            </div>
            <div className="col-md-6">
                <h2 className="mb-3">Download the HC Connect app</h2>
                <div>
                    <a target="_blank" href="https://play.google.com/store/apps"><img className="me-2" src={app1} alt="" /></a>
                    <a target="_blank" href="https://play.google.com/store/apps"><img src={app2} alt="" /></a>
                </div>
            </div>
        </Row>
    );
};

export default AppDownload;