import React from 'react'

function Footer() {
    return (
        <div>
            <div>
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-4">Our Office</h4>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-youtube" /></a>
                                    <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-4">Services</h4>
                                <a className="btn btn-link" href>Landscaping</a>
                                <a className="btn btn-link" href>Pruning plants</a>
                                <a className="btn btn-link" href>Urban Gardening</a>
                                <a className="btn btn-link" href>Garden Maintenance</a>
                                <a className="btn btn-link" href>Green Technology</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <a className="btn btn-link" href>About Us</a>
                                <a className="btn btn-link" href>Contact Us</a>
                                <a className="btn btn-link" href>Our Services</a>
                                <a className="btn btn-link" href>Terms &amp; Condition</a>
                                <a className="btn btn-link" href>Support</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-4">Newsletter</h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative w-100">
                                    <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Copyright Start */}
                <div className="container-fluid copyright py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
            </div>
        </div>
    )
}

export default Footer
