import React from 'react';

const RecommendationCard = ({ recommendation }) => {
    return (
        <>
            <div className='col-12 col-sm-6 col-md-4'>
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h6 className="card-text">{recommendation.recommendationMessage}</h6>
                        <p className="card-text text-secondary mb-0" style={{ fontSize: '13px' }}>{recommendation.name}</p>
                        <p className="card-text text-secondary" style={{ fontSize: '15px' }}>
                            {recommendation.designation} at {recommendation.company}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendationCard;