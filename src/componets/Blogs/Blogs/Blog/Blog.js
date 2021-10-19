import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = ({blog}) => {
    const {title, img} =blog;
    return (
        <div className="col-md-4">
        <div className=" p-5">
            <Link  className="blog-title" to='/'>
            <img className="img-fluid blog-img" src={img} alt="" />
            <h4>{title}</h4></Link>
        </div>
        
        </div>
    );
};

export default Blog;