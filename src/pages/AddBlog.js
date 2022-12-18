import React, { useContext, useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';
import ReactMarkdown from 'react-markdown';
import userContext from '../context/userContext';
import { v4 as uuid } from 'uuid';

const AddBlog = () => {

    const { addHandler } = useContext(userContext);

    const [blogFormData, setBlogFormData] = useState({
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
        setBlogFormData({ ...blogFormData, [e.target.name]: e.target.value });
    }

    const onBodyChange = (value) => {
        setBlogFormData({ ...blogFormData, 'body': value });
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


    //form submitted............
    const onSubmit = async (e) => {
        e.preventDefault();
        if (blogFormData.body === '') {
            displayAlert('text-danger', 'Please enter you blog body');
            return false;
        }
        else {
            const id = uuid();
            const response = await fetch(
                '/blog/add',
                {
                    method: 'post',
                    body: JSON.stringify({
                        id: id,
                        imageUrl: blogFormData.imageUrl,
                        title: blogFormData.title,
                        description: blogFormData.description,
                        body: blogFormData.body
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const data = await response.json();
            if (data.result === true) {
                console.log('blog buplished');
                displayAlert('text-success', 'Blog has been successfully published');
                const newBlog = {
                    id: id,
                    imageUrl: blogFormData.imageUrl,
                    title: blogFormData.title,
                    description: blogFormData.description,
                    body: blogFormData.body
                };
                addHandler('ADD_BLOG', newBlog);
                setBlogFormData({
                    imageUrl: '',
                    title: '',
                    description: '',
                    body: ''
                });
            }
            else{
                displayAlert('text-danger', data.result);
            }
            console.log(data.result);
        }
    }

    return (
        <div className="container-fluid py-5 my-5">
            <h1 className="text-center my-5 fw-bold">
                Add <span className="text-info">Blog</span>
            </h1>

            <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="imageUrl" className='fw-semibold form-label'>Featured Image Url *</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={blogFormData.imageUrl}
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
                                value={blogFormData.title}
                                id="title"
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className='fw-semibold form-label'>Blog Description *</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={blogFormData.description}
                                className="form-control"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <SimpleMDE
                            onChange={onBodyChange}
                            value={blogFormData.body}
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
                            Publish Blog
                        </button>
                    </form>
                    <div className="text-center">
                        <h5 className={messageData.submitMessageTextColor}>{messageData.submitMessage}</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                    <div className="justify-content-center d-flex">
                        <img src={blogFormData.imageUrl} alt={blogFormData.title} className='w-75' />
                    </div>
                    <h1 className="font-weight-light text-center my-5">
                        {blogFormData.title}
                    </h1>
                    <ReactMarkdown children={blogFormData.body} />
                </div>
            </div>
        </div>
    )
}

export default AddBlog;