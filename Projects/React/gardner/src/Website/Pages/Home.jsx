import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

function Home() {
    return (
        <div>
            <Header />
            <div>
                {/* Carousel Start */}
                <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                                <div className="carousel-caption lg-8">
                                    <div className="container">
                                        <div className="row justify-content-center lg-8">
                                            <div className="col-lg-8">
                                                <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
                                                <a href className="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                                <div className="carousel-caption lg-8">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-7">
                                                <h1 className="display-1 text-white mb-5 animated slideInDown">Create Your Own Small Garden At Home</h1>
                                                <a href className="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Carousel End */}
                {/* Top Feature Start */}
                <div className="container-fluid top-feature py-5 pt-lg-0">
                    <div className="container py-5 pt-lg-0">
                        <div className="row gx-0">
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: 160 }}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                            <i className="fa fa-times text-primary" />
                                        </div>
                                        <div className="ps-3">
                                            <h4>No Hidden Cost</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: 160 }}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                            <i className="fa fa-users text-primary" />
                                        </div>
                                        <div className="ps-3">
                                            <h4>Dedicated Team</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: 160 }}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                            <i className="fa fa-phone text-primary" />
                                        </div>
                                        <div className="ps-3">
                                            <h4>24/7 Available</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Top Feature End */}
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-end">
                            <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                                <img className="img-fluid rounded" data-wow-delay="0.1s" src="img/about.jpg" />
                            </div>
                            <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                                <h1 className="display-1 text-primary mb-0">25</h1>
                                <p className="text-primary mb-4">Year of Experience</p>
                                <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a className="btn btn-primary py-3 px-4" href>Explore More</a>
                            </div>
                            <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="row g-5">
                                    <div className="col-12 col-sm-6 col-lg-12">
                                        <div className="border-start ps-4">
                                            <i className="fa fa-award fa-3x text-primary mb-3" />
                                            <h4 className="mb-3">Award Winning</h4>
                                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-12">
                                        <div className="border-start ps-4">
                                            <i className="fa fa-users fa-3x text-primary mb-3" />
                                            <h4 className="mb-3">Dedicated Team</h4>
                                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Facts Start */}
                <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Garden Complated</span>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facts End */}
                {/* Features Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
                                <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a className="btn btn-primary py-3 px-4" href>Explore More</a>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6">
                                        <div className="row g-4">
                                            <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                                <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}>
                                                        <i className="fa fa-check fa-3x text-primary" />
                                                    </div>
                                                    <h4 className="mb-0">100% Satisfaction</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                                <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}>
                                                        <i className="fa fa-users fa-3x text-primary" />
                                                    </div>
                                                    <h4 className="mb-0">Dedicated Team</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                                        <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                                            <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}>
                                                <i className="fa fa-tools fa-3x text-primary" />
                                            </div>
                                            <h4 className="mb-0">Modern Equipment</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features End */}
                {/* Service Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="fs-5 fw-bold text-primary">Our Services</p>
                            <h1 className="display-5 mb-5">Services That We Offer For You</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img rounded">
                                        <img className="img-fluid" src="img/service-1.jpg" alt />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square rounded-circle mx-auto mb-3">
                                            <img className="img-fluid" src="img/icon/icon-3.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Landscaping</h4>
                                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img rounded">
                                        <img className="img-fluid" src="img/service-2.jpg" alt />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square rounded-circle mx-auto mb-3">
                                            <img className="img-fluid" src="img/icon/icon-6.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Pruning plants</h4>
                                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img rounded">
                                        <img className="img-fluid" src="img/service-3.jpg" alt />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square rounded-circle mx-auto mb-3">
                                            <img className="img-fluid" src="img/icon/icon-5.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Irrigation &amp; Drainage</h4>
                                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img rounded">
                                        <img className="img-fluid" src="img/service-4.jpg" alt />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square rounded-circle mx-auto mb-3">
                                            <img className="img-fluid" src="img/icon/icon-4.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Garden Maintenance </h4>
                                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img rounded">
                                        <img className="img-fluid" src="img/service-5.jpg" alt />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square rounded-circle mx-auto mb-3">
                                            <img className="img-fluid" src="img/icon/icon-8.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Green Technology</h4>
                                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item rounded d-flex h-100">
                                    <div className="service-img rounded">
                                        <img className="img-fluid" src="img/service-6.jpg" alt />
                                    </div>
                                    <div className="service-text rounded p-5">
                                        <div className="btn-square rounded-circle mx-auto mb-3">
                                            <img className="img-fluid" src="img/icon/icon-2.png" alt="Icon" />
                                        </div>
                                        <h4 className="mb-3">Urban Gardening</h4>
                                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Quote Start */}
                <div className="container-fluid quote my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-2.jpg">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                                    <h1 className="display-5 text-center mb-5">Get A Free Quote</h1>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-light border-0" id="gname" placeholder="Gurdian Name" />
                                                <label htmlFor="gname">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email" />
                                                <label htmlFor="gmail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-light border-0" id="cname" placeholder="Child Name" />
                                                <label htmlFor="cname">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-light border-0" id="cage" placeholder="Child Age" />
                                                <label htmlFor="cage">Service Type</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-light border-0" placeholder="Leave a message here" id="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-primary py-3 px-4" type="submit">Submit Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Quote End */}
                {/* Projects Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="fs-5 fw-bold text-primary">Our Projects</p>
                            <h1 className="display-5 mb-5">Some Of Our Wonderful Projects</h1>
                        </div>
                        <div className="row wow fadeInUp" data-wow-delay="0.3s">
                            <div className="col-12 text-center">
                                <ul className="list-inline rounded mb-5" id="portfolio-flters">
                                    <li className="mx-2 active" data-filter="*">All</li>
                                    <li className="mx-2" data-filter=".first">Complete Projects</li>
                                    <li className="mx-2" data-filter=".second">Ongoing Projects</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row g-4 portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                                <div className="portfolio-inner rounded">
                                    <img className="img-fluid" src="img/service-1.jpg" alt />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Landscaping</h4>
                                        <div className="d-flex">
                                            <a className="btn btn-lg-square rounded-circle mx-2" href="img/service-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                            <a className="btn btn-lg-square rounded-circle mx-2" href><i className="fa fa-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                                <div className="portfolio-inner rounded">
                                    <img className="img-fluid" src="img/service-2.jpg" alt />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Pruning plants</h4>
                                        <div className="d-flex">
                                            <a className="btn btn-lg-square rounded-circle mx-2" href="img/service-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                            <a className="btn btn-lg-square rounded-circle mx-2" href><i className="fa fa-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                                <div className="portfolio-inner rounded">
                                    <img className="img-fluid" src="img/service-3.jpg" alt />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Irrigation &amp; Drainage</h4>
                                        <div className="d-flex">
                                            <a className="btn btn-lg-square rounded-circle mx-2" href="img/service-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                            <a className="btn btn-lg-square rounded-circle mx-2" href><i className="fa fa-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                                <div className="portfolio-inner rounded">
                                    <img className="img-fluid" src="img/service-4.jpg" alt />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Garden Maintenance</h4>
                                        <div className="d-flex">
                                            <a className="btn btn-lg-square rounded-circle mx-2" href="img/service-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                            <a className="btn btn-lg-square rounded-circle mx-2" href><i className="fa fa-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                                <div className="portfolio-inner rounded">
                                    <img className="img-fluid" src="img/service-5.jpg" alt />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Green Technology</h4>
                                        <div className="d-flex">
                                            <a className="btn btn-lg-square rounded-circle mx-2" href="img/service-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                            <a className="btn btn-lg-square rounded-circle mx-2" href><i className="fa fa-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                                <div className="portfolio-inner rounded">
                                    <img className="img-fluid" src="img/service-6.jpg" alt />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Urban Gardening</h4>
                                        <div className="d-flex">
                                            <a className="btn btn-lg-square rounded-circle mx-2" href="img/service-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                            <a className="btn btn-lg-square rounded-circle mx-2" href><i className="fa fa-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Projects End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="fs-5 fw-bold text-primary">Our Team</p>
                            <h1 className="display-5 mb-5">Dedicated &amp; Experienced Team Members</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item rounded">
                                    <img className="img-fluid" src="img/team-1.jpg" alt />
                                    <div className="team-text">
                                        <h4 className="mb-0">Doris Jordan</h4>
                                        <p className="text-primary">Landscape Designer</p>
                                        <div className="team-social d-flex">
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item rounded">
                                    <img className="img-fluid" src="img/team-2.jpg" alt />
                                    <div className="team-text">
                                        <h4 className="mb-0">Johnny Ramirez</h4>
                                        <p className="text-primary">Garden Designer</p>
                                        <div className="team-social d-flex">
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item rounded">
                                    <img className="img-fluid" src="img/team-3.jpg" alt />
                                    <div className="team-text">
                                        <h4 className="mb-0">Diana Wagner</h4>
                                        <p className="text-primary">Senior Gardener</p>
                                        <div className="team-social d-flex">
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Testimonial Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                                <p className="fs-5 fw-bold text-primary">Testimonial</p>
                                <h1 className="display-5 mb-5">What Our Clients Say About Us!</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                                <a className="btn btn-primary py-3 px-4" href>See More</a>
                            </div>
                            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="owl-carousel testimonial-carousel">
                                    <div className="testimonial-item">
                                        <img className="img-fluid rounded mb-3" src="img/testimonial-1.jpg" alt />
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                        <h4>Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                    <div className="testimonial-item">
                                        <img className="img-fluid rounded mb-3" src="img/testimonial-2.jpg" alt />
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                        <h4>Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
            <Footer />


        </div>
    )
}

export default Home
