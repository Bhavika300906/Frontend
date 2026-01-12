import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-dark text-light px-0 py-2">
                    <div className="row gx-0 d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center me-4">
                                <span className="fa fa-phone-alt me-2" />
                                <span>+012 345 6789</span>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center">
                                <span className="far fa-envelope me-2" />
                                <span>info@example.com</span>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="h-100 d-inline-flex align-items-center mx-n2">
                                <span>Follow Us:</span>
                                <a className="btn btn-link text-light" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-link text-light" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-link text-light" href><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-link text-light" href><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar Start */}
                <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                    <NavLink to="/home" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                        <h1 className="m-0">Gardener</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <NavLink to="/home" className="nav-item nav-link ">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
                            <NavLink to="/project" className="nav-item nav-link">Projects</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu bg-light m-0">
                                    <NavLink to="/features" className="dropdown-item">Features</NavLink>
                                    <NavLink to="/quote" className="dropdown-item">Free Quote</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <a href className="btn btn-success py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3" /></a>
                    </div>
                </nav>
                {/* Navbar End */}
            </div>
        </div>
    )
}

export default Header
