import React from 'react';

const RecommendationCard = ({ recommendation }) => {
    return (
        <>
            <div className='col-12 col-md-4'>
                {/* <a href="/" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h4 className="card-text">{recommendation.recommendationMessage}</h4>
                        <p className="card-text text-secondary mb-0">{recommendation.name}</p>
                        <p className="card-text text-secondary">
                            {recommendation.designation} at {recommendation.company}
                        </p>
                    </div>
                </div>
                {/* </a> */}
            </div>

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h4 className="card-text" data-bs-toggle="modal" data-bs-target="#exampleModal">{recommendation.recommendationMessage}</h4>
                                    <p className="card-text text-secondary mb-0">{recommendation.name}</p>
                                    <p className="card-text text-secondary">
                                        {recommendation.designation} at {recommendation.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default RecommendationCard;