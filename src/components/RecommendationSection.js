import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import userContext from '../context/userContext';
import RecommendationCard from './RecommendationCard';

const RecommendationSection = () => {

    const { recommendations } = useContext(userContext);

    return (
        <>
            <div className='container-fluid my-5'>
                <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                    {
                        recommendations.map(
                            (recommendation) => (
                                <RecommendationCard key={uuid()} recommendation={recommendation} />
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default RecommendationSection;