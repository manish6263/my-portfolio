import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
  return (
    <div className="card shadow h-100" style={{borderRadius: '20px'}}>
                    <img src={blog.imageUrl} alt="blog 1 img" className="p-2 card-img-top" style={{borderRadius: '20px'}} />
                    <div className="card-body">
                        <h4 className="card-title">{blog.title}</h4>
                        <div className="card-text">
                           {blog.desc}
                        </div>
                        <Link to={`/blog/${blog.id}`} className="project-link pt-2">
                            more details
                            <i className="fa-solid fa-right-long"></i>
                        </Link>
                    </div>
                </div>
  )
}

export default BlogCard;