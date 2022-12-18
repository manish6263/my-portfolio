import React from 'react';
import BlogSection from '../components/BlogSection';
import ProjectSection from '../components/ProjectSection';
import RecommendationSection from '../components/RecommendationSection';
import SkillsSection from '../components/SkillsSection';
import Title from '../components/Title';

const Home = () => {
    return (
        <>
            <Title />
            <RecommendationSection />
            <SkillsSection />
            <ProjectSection />
            <BlogSection />
        </>
    )
}

export default Home;