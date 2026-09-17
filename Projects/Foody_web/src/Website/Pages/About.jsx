import React from "react";
import Header from "../Comman/Header";
import Footer from "../Comman/Footer";
import PagesHeader from "../Comman/PagesHeader";

function About() {
    return (
        <div>
            <Header />
            <PagesHeader name="About" title="About Us" />
            <div>
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                    <img className="img-fluid w-100" src="img/about.jpg" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p><i className="fa fa-check text-primary me-3" />Tempor erat elitr rebum at clita</p>
                                <p><i className="fa fa-check text-primary me-3" />Aliqu diam amet diam et eos</p>
                                <p><i className="fa fa-check text-primary me-3" />Clita duo justo magna dolore erat amet</p>
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Firm Visit Start */}
                <div className="container-fluid bg-primary bg-icon mt-5 py-6">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                                <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>
                                <p className="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                            </div>
                            <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                                <a className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href>Visit Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Firm Visit End */}
                {/* Feature Start */}
                <div className="container-fluid bg-light bg-icon py-6">
                    <div className="container">
                        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <h1 className="display-5 mb-3">Our Features</h1>
                            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="bg-white text-center h-100 p-4 p-xl-5">
                                    <img className="img-fluid mb-4" src="img/icon-1.png" alt />
                                    <h4 className="mb-3">Natural Process</h4>
                                    <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                    <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href>Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="bg-white text-center h-100 p-4 p-xl-5">
                                    <img className="img-fluid mb-4" src="img/icon-2.png" alt />
                                    <h4 className="mb-3">Organic Products</h4>
                                    <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                    <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href>Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="bg-white text-center h-100 p-4 p-xl-5">
                                    <img className="img-fluid mb-4" src="img/icon-3.png" alt />
                                    <h4 className="mb-3">Biologically Safe</h4>
                                    <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                    <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End */}
            </div>

            <Footer />

        </div>
    )
}

export default About