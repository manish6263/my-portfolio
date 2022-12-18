import React, { useContext } from 'react';
import userContext from '../context/userContext';
import BlogCard from '../components/BlogCard';

const AllBlogs = () => {

    const { blogs } = useContext(userContext);
    return (
        <div className="container text-center my-5 py-5">
            <h1 className="fw-semibold py-5">
                My All<span className="text-info"> Blogs</span>
            </h1>
            <div className="row my-4 pt-4">
                {blogs.map((blog) => (
                    <div key={blog.id} className="col-12 col-md-6 py-3">
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllBlogs;