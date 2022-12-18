import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../context/userContext';
import BlogCard from './BlogCard';

const BlogSection = () => {

    const { blogs } = useContext(userContext);

    return (
        <div className="container my-5" style={{maxWidth: '1000px', margin: 'auto'}}>
            <h1 className="font-weight-light text-center">
                My <span className="text-info">Blogs</span>
            </h1>
            <div className="lead text-center">I share my views on technology in these blogs</div>
            <div className="row my-5 pt-3 container mx-auto">
                {
                    blogs.slice(0, 3).map((blog) => {
                        return (
                            <div key={blog.id} className="col-12 col-sm-6 col-md-4 my-2">
                                <BlogCard blog={blog} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="my-5" style={{ textAlign: 'right' }}>
                <div>
                    <Link to="/all-blogs" className="text-dark">
                        <h5 style={{ display: "inline" }}>
                            See my blogs
                            <i className="fas fa-arrow-right align-middle"></i>
                        </h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;