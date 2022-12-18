import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import userContext from '../context/userContext';
import Skill from './Skill';

const SkillsSection = () => {

    const { skills } = useContext(userContext);

    const finalSkillRow = [];

    // for (let i = 0; i < skills.length; i++) {
        // let skillRow = skills.slice(i * 4, (i + 1) * 4);
        finalSkillRow.push(
            // <div key={uuid()} className="col-sm-6 col-md-6">
                skills.map((skill) => (
                    <Skill key={uuid()} skill={skill} />
                ))
            // </div>
        );
    // }

    return (
        <div className="bg-light w-100">
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                <h1 className="font-weight-light">
                    <span className="text-info">Technology</span> stack
                </h1>
                <div className="lead pb-5">
                    I design, develop and deliver with this weapons
                </div>
                <div className="row">
                {finalSkillRow}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;