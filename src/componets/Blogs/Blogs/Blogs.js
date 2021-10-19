import React, { useEffect, useState } from 'react';
import './Blogs.css'
import blogCover from '../../../images/blogs/cover.jpg'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Blog from './Blog/Blog';
import HealthBlog from './HealthBlog/HealthBlog';

const Blogs = () => {
    const [blogs, setBlogs]= useState([])
    useEffect( () => {
        fetch('covidBlogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    } , [])
    return (
        <div>
            <Link to="/blog">
            <div className="cover col-md-12 container">
                 <img className="img-fluid mt-5 pt-3" src={blogCover} alt="" />
                 <div className="cover-text">
                     <h6 className="sub-cover">Summer health tips</h6>
                     <h3>10 metallic taste in the mouth causes</h3>
                 </div>
            </div>
            </Link>
            <Row className="mt-5 m-5 ps-5">
                {
                    blogs.slice(0,6).map( blog => <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </Row>
            
            <Row className="mt-5 m-5 ps-5">
                {
                blogs.slice(6,12).map(blog => <HealthBlog
                key={blog.id}
                blog={blog}
                ></HealthBlog>)
                }
            </Row>
        </div>
    );
};

export default Blogs;