import React from 'react';
import './Blogs.css'
import blogCover from '../../images/blogs/cover.jpg'
import { Link } from 'react-router-dom';

const Blogs = () => {
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
        </div>
    );
};

export default Blogs;