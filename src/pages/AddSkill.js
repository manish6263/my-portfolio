import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import userContext from '../context/userContext';

const AddSkill = () => {

    const { addHandler } = useContext(userContext);

    const [skillFormData, setSkillFormData] = useState({
        imageUrl: '',
        name: '',
        starsTotal: 0,
        starsActive: 0
    });

    const [messageData, setMessageData] = useState({
        submitMessageTextColor: '',
        submitMessage: ''
    });

    const onChange = (e) => {
        setSkillFormData({ ...skillFormData, [e.target.name]: e.target.value });
    }

    //display alert..........
    const displayAlert = (textColor, message) => {
        setMessageData({
            submitMessageTextColor: textColor,
            submitMessage: message
        });

        setTimeout(() => {
            setMessageData({
                submitMessageTextColor: '',
                submitMessage: ''
            });
        }, 3000);
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const id = uuid();
        const response = await fetch(
            '/skill/add',
            {
                method: 'post',
                body: JSON.stringify({
                    id: id,
                    imageUrl: skillFormData.imageUrl,
                    name: skillFormData.name,
                    starsTotal: skillFormData.starsTotal,
                    starsActive: skillFormData.starsActive
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const data = await response.json();
        if (data.result === true) {
            console.log('skill added');
            displayAlert('text-success', 'skill has been successfully added');
            const newSkill = {
                id: id,
                imageUrl: skillFormData.imageUrl,
                name: skillFormData.name,
                starsTotal: skillFormData.starsTotal,
                starsActive: skillFormData.starsActive
            };
            addHandler('ADD_SKILL', newSkill);
            setSkillFormData({
                imageUrl: '',
                name: '',
                starsTotal: 0,
                starsActive: 0
            });
        }
        else {
            console.log(data.result);
            displayAlert('text-danger', data.result);
        }
    }

    return (
        <div className="container-fluid py-5 my-5">
            <h1 className="text-center my-5 fw-bold">
                Add <span className="text-info">Skill</span>
            </h1>

            <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="imageUrl" className='fw-semibold form-label'>Featured Image Url *</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={skillFormData.imageUrl}
                                id="imageUrl"
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className='fw-semibold form-label'>Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={skillFormData.name}
                                id="name"
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="starsTotal" className='fw-semibold form-label'>Total Rating *</label>
                            <input
                                type="number"
                                name="starsTotal"
                                id="starsTotal"
                                value={skillFormData.starsTotal}
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="starsActive" className='fw-semibold form-label'>Your Rating *</label>
                            <input
                                type="number"
                                name="starsActive"
                                id="starsActive"
                                value={skillFormData.starsActive}
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-dark my-5 w-100"
                            style={{ backgroundColor: "black" }}
                        >
                            Add Skill
                        </button>
                    </form>
                    <div className="text-center">
                        <h5 className={messageData.submitMessageTextColor}>{messageData.submitMessage}</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                    <div className="justify-content-center d-flex">
                        <img src={skillFormData.imageUrl} alt={skillFormData.name} className='w-75' />
                    </div>
                    <h1 className="font-weight-light text-center my-5">
                        {skillFormData.name}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default AddSkill;