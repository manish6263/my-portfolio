import React, { useContext } from 'react';
import userContext from '../context/userContext';

const Title = () => {
   
    const { user } = useContext(userContext);
    return (
        <div className="container">
            <div className="row text-center align-items-center my-5 py-5">
                <div className="col-12 col-md-6 pt-5">
                    <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt="AVENGERS" className="img-fluid rounded-circle w-75" />
                </div>
                <div className="col-12 col-md-6 pt-5">
                    <div className="font-weight-light" style={{ fontSize: '50px' }}>
                        Hii, I am <span className="text-info">{user.name}</span>
                    </div>
                    <h4 className="font-weight-light">{user.leadText}</h4>
                </div>
            </div>
        </div>
    )
}

export default Title;