import React, { useEffect, useState } from 'react';
import userContext from './userContext';

const UserState = (props) => {

  const [user, setUser] = useState({ name: 'Manish Patel', leadText: 'I am a full stack developer' });

  const [projects, setProjects] = useState([]);

  const [blogs, setBlogs] = useState([]);

  const [recommendations, setRecommendations] = useState([]);

  const [skills, setSkills] = useState([]);

  //get all the projects form the database........
  const getProjects = async () => {
    console.log('inside get projects');

    let response = await fetch(
      '/project/all-projects',
      {
        method: 'get'
      }
    );
    console.log('response', response);
    response = await response.json();
    console.log('response after json', response);

    if (response.isSuccessfull === true) {
      const projectArray = [];
      for (let i = 0; i < response.projects.length; i++) {
        projectArray.push(response.projects[i]);
      }
      setProjects(projectArray);
    }
  }


  //get all the blogs form the database........
  const getBlogs = async () => {

    let response = await fetch(
      '/blog/all-blogs',
      {
        method: 'get'
      }
    );
    response = await response.json();
    console.log(response);

    if (response.isSuccessfull === true) {
      const blogArray = [];
      for (let i = 0; i < response.blogs.length; i++) {
        blogArray.push(response.blogs[i]);
      }
      setBlogs(blogArray);
    }
  }


  //get all the recommendations from the database..........
  const getRecommendations = async () => {
    let response = await fetch(
      '/recommendation/all-recommendations',
      {
        method: 'get'
      }
    );
    response = await response.json();
    console.log(response);
    if (response.isSuccessfull === true) {
      const recommendationArray = [];
      response.recommendations.forEach((recommendation) => {
        if (recommendation.onShowcase === true) {
          recommendationArray.push(recommendation);
        }
      });
      // console.log(recommendationArray);
      setRecommendations(recommendationArray);
    }
  }

  //get all the skills from the database.......
  const getSkills = async () => {
    let response = await fetch(
      '/skill/all-skills',
      {
        method: 'get'
      }
    );
    response = await response.json();
    console.log(response);
    if (response.isSuccessfull === true) {
      const skillArray = [];
      for (let i = 0; i < response.skills.length; i++) {
        skillArray.push(response.skills[i]);
      }
      setSkills(skillArray);
    }
  }

  useEffect(() => {
    // console.log('Inside use effect');
    getProjects();
    getBlogs();
    getRecommendations();
    getSkills();
  }, []);


  const addHandler = (action, newObject) => {

    switch (action) {
      case 'ADD_PROJECT':
        setProjects([newObject, ...projects]);
        break;

      case 'ADD_BLOG':
        setBlogs([newObject, ...blogs]);
        break;

      case 'ADD_RECOMMENDATION':
        setRecommendations([newObject, ...recommendations]);
        break;

      case 'ADD_SKILL':
        setSkills([newObject, ...skills]);
        break;

      default:
        break;
    }
  }

  return (
    <userContext.Provider value={{ user, projects, blogs, recommendations, skills, setSkills, setUser, addHandler }}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState;