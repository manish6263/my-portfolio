import React, { useState } from 'react';

const Contact = () => {

    const [messageData, setMessageData] = useState({
        submitMessageTextColor: '',
        submitMessage: ''
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    //on change..........
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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

    //contact submit........
    const contactSubmit = async (e) => {
        e.preventDefault();

        if (formData.name === '') {
            displayAlert('text-danger', 'Please enter the name');
            return false;
        }

        else if (formData.email === '') {
            displayAlert('text-danger', 'Please enter the email');
            return false;
        }

        else if (formData.description === '') {
            displayAlert('text-danger', 'Please enter the message or description');
            return false;
        }

        else {

            const response = await fetch(
                '/contact',
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        description: formData.description
                    }),
                }
            );
            const data = await response.json();
            console.log(data.result);
            if (data.result === true) {
                displayAlert('text-success', `Thank you ${formData.name}. I will contact you soon!`);
                console.log('contact form submitted');
            }
            else {
                displayAlert('text-danger', data.result);
                console.log(data.result);
            }
            setFormData({
                name: '',
                email: '',
                description: ''
            });
        }
    }

    return (
        <div className="container my-5 py-5">
            <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Thank you! </span>for your interest
            </h1>
            <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                    {/* <form action='http://localhost:5000/contact' method='post'> */}
                    <form onSubmit={contactSubmit}>
                        <div className="my-3">
                            <label htmlFor="name" className='form-label fw-semibold'>Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                className="form-control"
                                onChange={onChange}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="email" className='form-label fw-semibold'>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                className="form-control"
                                onChange={onChange}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="description" className='form-label fw-semibold'>
                                Tell me about your project *
                            </label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={formData.description}
                                rows="5"
                                onChange={onChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-dark float-end"
                            style={{ backgroundColor: "black" }}
                        >
                            Let's talk business
                        </button>
                    </form>
                </div>
            </div>

            <div className="py-5 mx-2 text-center">
                <h5 className={messageData.submitMessageTextColor}>{messageData.submitMessage}</h5>
            </div>
        </div>
    )
}

export default Contact;