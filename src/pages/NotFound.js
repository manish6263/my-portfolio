import React from 'react';

const NotFound = () => {
  return (
    <div className="container text-center py-5 my-5">
        <div className="display-4 pt-5 mt-5 fw-bold">
            <span className="text-danger">Oops!</span> It's a 404
        </div>
        <div className="lead">
            Sorry could not find, what you are looking for
        </div>
    </div>
  )
}

export default NotFound;