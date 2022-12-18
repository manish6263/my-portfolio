import React, { useContext, useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';
import ReactMarkdown from 'react-markdown';
import { v4 as uuid } from 'uuid';
import userContext from '../context/userContext';

const AddProject = () => {

    const { addHandler } = useContext(userContext);

    const [projectFormData, setProjectFormData] = useState({
        imageUrl: '',
        title: '',
        description: '',
        body: ''
    });

    const [messageData, setMessageData] = useState({
        submitMessageTextColor: '',
        submitMessage: ''
    });

    const onChange = (e) => {
        setProjectFormData({ ...projectFormData, [e.target.name]: e.target.value });
    }

    const onBodyChange = (value) => {
        setProjectFormData({ ...projectFormData, 'body': value });
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
        if (projectFormData.body === '') {
            displayAlert('text-danger', 'Please enter your project body');
            return false;
        }
        else {
            const id = uuid();
            const response = await fetch(
                '/project/add',
                {
                    method: 'post',
                    body: JSON.stringify({
                        id: id,
                        imageUrl: projectFormData.imageUrl,
                        title: projectFormData.title,
                        description: projectFormData.description,
                        body: projectFormData.body
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const data = await response.json();
            if (data.result === true) {
                console.log('project published');
                displayAlert('text-success', 'Project has been successfully published');
                const newProject = {
                    id: id,
                    imageUrl: projectFormData.imageUrl,
                    title: projectFormData.title,
                    description: projectFormData.description,
                    body: projectFormData.body
                };
                addHandler('ADD_PROJECT', newProject);
                setProjectFormData({
                    imageUrl: '',
                    title: '',
                    description: '',
                    body: ''
                });
            }
            else {
                console.log(data.result);
                displayAlert('text-danger', data.result);
            }
        }
    }

    return (
        <div className="container-fluid py-5 my-5">
            <h1 className="text-center my-5 fw-bold">
                Add <span className="text-info">Project</span>
            </h1>

            <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="imageUrl" className='fw-semibold form-label'>Featured Image Url *</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={projectFormData.imageUrl}
                                id="imageUrl"
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className='fw-semibold form-label'>Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={projectFormData.title}
                                id="title"
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className='fw-semibold form-label'>Project Description *</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={projectFormData.description}
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <SimpleMDE
                            onChange={onBodyChange}
                            value={projectFormData.body}
                            name='body'
                        // options={{
                        //     hideIcons: ["preview", "side-by-side", "fullscreen"],
                        // }}
                        />
                        <button
                            type="submit"
                            className="btn btn-dark my-5 w-100"
                            style={{ backgroundColor: "black" }}
                        >
                            Publish Project
                        </button>
                    </form>
                    <div className="text-center">
                        <h5 className={messageData.submitMessageTextColor}>{messageData.submitMessage}</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                    <div className="justify-content-center d-flex">
                        <img src={projectFormData.imageUrl} alt={projectFormData.title} className='w-75' />
                    </div>
                    <h1 className="font-weight-light text-center my-5">
                        {projectFormData.title}
                    </h1>
                    <ReactMarkdown children={projectFormData.body} />
                </div>
            </div>
        </div>
    )
}

export default AddProject;