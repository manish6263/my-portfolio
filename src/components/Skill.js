import React from 'react';
import { v4 as uuid } from 'uuid';

const Skill = ({ skill }) => {

    const starList = [];
    for (let i = 0; i < skill.starsTotal; i++) {
        if (i < skill.starsActive) {
            starList.push(
                <span className="text-info" key={uuid()}>★</span>
            );
        }
        else {
            starList.push(
                <span key={uuid()}>★</span>
            );
        }
    }

    return (
        <div className='col-6 col-sm-3 p-3'>
            <img
                src={skill.imageUrl}
                alt={skill.name}
                className='rounded-circle'
                style={{ width: '100px', height: '100px' }}
            />
            <div>
                {starList}
            </div>
        </div>
    )
}

export default Skill;