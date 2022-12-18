import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className='navbar navbar-expand-md fixed-top bg-white'>
            <div className="container my-2">
                <div className='navbar-brand flex-grow-1'>
                    <Link to="/" className="text-dark font-weight-bold">Manish Patel</Link>
                </div>
                <Link to="/contact">
                    <button className="btn btn-outline-info ml-auto mx-3">
                        Contact me
                    </button>
                </Link>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#collapseNav'>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse flex-grow-0" id='collapseNav'>
                    <ul className="navbar-nav">
                        <li className="nav-item h6 mx-1 my-auto">
                            <Link to="/all-projects" className={`${location.pathname === '/all-projects' ? 'active' : ''} nav-link h6 mx-1 my-auto`}>Projects</Link>
                        </li>
                        <li className="nav-item h6 mx-1 my-auto">
                            <Link to="/all-blogs" className={`${location.pathname === '/all-blogs' ? 'active' : ''} nav-link h6 mx-1 my-auto`}>Blogs</Link>
                        </li>
                        <li className="nav-item h6 mx-1 my-auto">
                            <Link to="/about" className={`${location.pathname === '/about' ? 'active' : ''} nav-link h6 mx-1 my-auto`}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;