import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import userContext from '../context/userContext';

const ProjectPage = () => {

  const id = useParams().id;
  // console.log(id);
  const { projects } = useContext(userContext);

  const project = projects.filter((project) => project.id === id)[0];
  // console.log(project);
  return (
    <div className="container py-5 my-5 markdown">
      <div className="d-flex justify-content-center">
        <img src={project.imageUrl} alt={project.title} className='w-100' />
      </div>
      <h1 className="fw-light text-center my-5">{project.title}</h1>
      <ReactMarkdown children={project.body} />
    </div>
  )
}

export default ProjectPage;