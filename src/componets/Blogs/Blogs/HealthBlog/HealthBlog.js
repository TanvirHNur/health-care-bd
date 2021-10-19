import React from 'react';
import { Link } from 'react-router-dom';

const HealthBlog = ({blog}) => {
    const {title, img} =blog;
    return (
        <div className="col-md-6">
        <div className=" ">
            <Link  className="blog-title  d-flex" to='/'>
            <img className="img-fluid blog-img" src={img} alt="" />
            <h4 className="ms-3">{title}</h4></Link>
        </div>
        
        </div>
    );
};

export default HealthBlog;