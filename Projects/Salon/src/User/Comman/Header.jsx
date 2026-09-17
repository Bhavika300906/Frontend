import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <div>
            {/* <h1>Header</h1> */}
            <div>
                {/* Spinner Start */}
                {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
                {/* Spinner End */}
                {/* Navbar Start */}
                <div className="container-fluid bg-light sticky-top p-0">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a href="index.html" className="navbar-brand bg-primary py-4 px-5 me-0">
                            <h1 className="mb-0"><i className="bi bi-scissors" />Salone</h1>
                        </a>
                        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse p-3" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <a href="service.html" className="nav-item nav-link">Service</a>
                                <a href="price.html" className="nav-item nav-link">Price</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu bg-light mt-2">
                                        <a href="gallery.html" className="dropdown-item">Photo Gallery</a>
                                        <a href="blog.html" className="dropdown-item">Beauty Blog</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="d-flex">
                                <a className="btn btn-primary btn-sm-square me-3" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-primary btn-sm-square me-3" href><i className="fab fa-instagram" /></a>
                                <a className="btn btn-primary btn-sm-square" href><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Navbar End */}
            </div>

        </div>
    )
}

export default Header