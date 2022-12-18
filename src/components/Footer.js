import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid text-center" style={{ backgroundColor: 'black' }}>
                <div className="py-5">
                    <h2 className="text-light">Interested in working with me?</h2>
                    <Link to="/contact">
                        <button className="btn btn-outline-light mt-3 btn-lg">Contact me</button>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-info pb-3">More links</h5>
                        <div>
                            <Link to="/all-blogs" className="text-light d-block">Blogs</Link>
                        </div>
                        <div>
                            <Link to="/" className="text-light d-block">Home</Link>
                        </div>
                        <div>
                            <Link to="/about" className="text-light d-block">About</Link>
                        </div>
                        <div>
                            <Link to="/all-projects" className="text-light d-block">Projects</Link>
                        </div>
                        <div>
                            <Link to="/write-a-recommendation" className="text-light">Write a recommendation
                                <i className="fas fa-heart text-light"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-light py-3 text-start">
                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, repellendus molestias
                            expedita nulla asperiores voluptas reprehenderit quas porro aut dolor? Mollitia ipsum excepturi
                            assumenda, pariatur cum ipsa repellat iure molestias quod, beatae porro tempora.Lorem ipsum
                            dolor sit amet, djsjsdff consectetur adipisicing elit. Porro illo eum architecto, doloremque
                            aspernatur eveniet fuga nemo ea, voluptatem ipsa eligendi id veritatis sapiente consequuntur
                        </div>
                    </div>
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-info pb-3">Social</h5>
                        <div style={{ display: 'inline' }} className='px-3'>
                            <a href="https://www.linkedin.com/in/manish-patel-4791181a1/"><i className="fab fa-linkedin text-light h1"></i></a>
                        </div>
                        <div style={{ display: 'inline' }} className='px-3'>
                            <a href="https://github.com/manish6263"><i className="fab fa-github text-light h1"></i></a>
                        </div>
                        <div style={{ display: 'inline' }} className='px-3'>
                            <a href="/"><i className="fas fa-envelope text-light h1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-info py-3">
                    <p>Copyright © Manish Patel 2022-23</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;