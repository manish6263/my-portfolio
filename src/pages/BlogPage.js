import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import userContext from '../context/userContext';

const BlogPage = () => {

  const id = useParams().id;
  // console.log(id);
  const { blogs } = useContext(userContext);

  const blog = blogs.filter((blog) => blog.id === id)[0];
  // console.log(blog);
  return (
    <div className="container py-5 my-5 markdown">
      <div className="d-flex justify-content-center">
        <img src={blog.imageUrl} alt={blog.title} className='w-100' />
      </div>
      <h1 className="fw-light text-center my-5">{blog.title}</h1>
      <ReactMarkdown children={blog.body} />
    </div>
  )
}

export default BlogPage;