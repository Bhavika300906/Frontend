import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Home() {
    return (
        // <div>Home</div>

        <div>
            <Header />
            <div>
                {/* Hero Start */}
                <div className="container-fluid p-0 hero-header bg-light mb-5">
                    <div className="container p-0">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6 hero-header-text py-5">
                                <div className="py-5 px-3 ps-lg-0">
                                    <h1 className="font-dancing-script text-primary animated slideInLeft">Welcome</h1>
                                    <h1 className="display-1 mb-4 animated slideInLeft">Beauty Salon Fashion for Women</h1>
                                    <div className="row g-4 animated slideInLeft">
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-square btn btn-primary flex-shrink-0">
                                                    <i className="fa fa-phone text-dark" />
                                                </div>
                                                <div className="px-3">
                                                    <h5 className="text-primary mb-0">Call Us</h5>
                                                    <p className="fs-5 text-dark mb-0">+123456789</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center">
                                                <div className="btn-square btn btn-primary flex-shrink-0">
                                                    <i className="fa fa-envelope text-dark" />
                                                </div>
                                                <div className="px-3">
                                                    <h5 className="text-primary mb-0">Mail Us</h5>
                                                    <p className="fs-5 text-dark mb-0">info@domain.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="owl-carousel header-carousel animated fadeIn">
                                    <img className="img-fluid" src="img/hero-slider-1.jpg" alt />
                                    <img className="img-fluid" src="img/hero-slider-2.jpg" alt />
                                    <img className="img-fluid" src="img/hero-slider-3.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero End */}
                {/* About Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
                                <img className="img-fluid mb-3" src="img/about.jpg" alt />
                                <div className="d-flex align-items-center bg-light">
                                    <div className="btn-square flex-shrink-0 bg-primary" style={{ width: 100, height: 100 }}>
                                        <i className="fa fa-phone fa-2x text-dark" />
                                    </div>
                                    <div className="px-3">
                                        <h3>+0123456789</h3>
                                        <span>Call us direct 24/7 for get a free consultation</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="font-dancing-script text-primary">About Us</h1>
                                <h1 className="mb-5">Why People Choose Us!</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero
                                    lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus, suscipit tempor odio
                                    viverra aliquam. Etiam non ex ex.</p>
                                <div className="row g-3 mb-5">
                                    <div className="col-sm-6">
                                        <div className="bg-light text-center p-4">
                                            <i className="fas fa-calendar-alt fa-4x text-primary" />
                                            <h1 className="display-5" data-toggle="counter-up">25</h1>
                                            <p className="text-dark text-uppercase mb-0">Years experience</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bg-light text-center p-4">
                                            <i className="fas fa-users fa-4x text-primary" />
                                            <h1 className="display-5" data-toggle="counter-up">999</h1>
                                            <p className="text-dark text-uppercase mb-0">Happy Customers</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary text-uppercase px-5 py-3" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Service Start */}
                <div className="container-fluid service py-5">
                    <div className="container">
                        <div className="text-center wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="font-dancing-script text-primary">Our Services</h1>
                            <h1 className="mb-5">Explore Our Services</h1>
                        </div>
                        <div className="row g-4 g-md-0 text-center">
                            <div className="col-md-6 col-lg-4">
                                <div className="service-item h-100 p-4 border-bottom border-end wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="img/haircut.png" alt />
                                    <h3 className="mb-3">Haircut</h3>
                                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
                                        et tempor eirmod magna dolore erat amet</p>
                                    <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="service-item h-100 p-4 border-bottom border-lg-end wow fadeIn" data-wow-delay="0.3s">
                                    <img className="img-fluid" src="img/makeup.png" alt />
                                    <h3 className="mb-3">Makeup</h3>
                                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
                                        et tempor eirmod magna dolore erat amet</p>
                                    <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="service-item h-100 p-4 border-bottom border-end border-lg-end-0 wow fadeIn" data-wow-delay="0.5s">
                                    <img className="img-fluid" src="img/manicure.png" alt />
                                    <h3 className="mb-3">Manicure</h3>
                                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
                                        et tempor eirmod magna dolore erat amet</p>
                                    <a className="btn btn-sm btn-primary text-uppercase my-2" href>Read More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="service-item h-100 p-4 border-bottom border-lg-bottom-0 border-lg-end wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="img/pedicure.png" alt />
                                    <h3 className="mb-3">Pedicure</h3>
                                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
                                        et tempor eirmod magna dolore erat amet</p>
                                    <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="service-item h-100 p-4 border-end wow fadeIn" data-wow-delay="0.3s">
                                    <img className="img-fluid" src="img/massage.png" alt />
                                    <h3 className="mb-3">Massage</h3>
                                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
                                        et tempor eirmod magna dolore erat amet</p>
                                    <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="service-item h-100 p-4 wow fadeIn" data-wow-delay="0.5s">
                                    <img className="img-fluid" src="img/skin-care.png" alt />
                                    <h3 className="mb-3">Skin Care</h3>
                                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
                                        et tempor eirmod magna dolore erat amet</p>
                                    <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Pricing Start */}
                <div className="container-fluid price px-0 py-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center h-100 bg-primary p-5">
                                <div className="wow fadeIn" data-wow-delay="0.3s">
                                    <h1 className="font-dancing-script text-white">Pricing</h1>
                                    <h1 className="mb-0">Beauty Salon</h1>
                                    <h1 className="display-1 text-uppercase mb-5" style={{ letterSpacing: 10 }}>Pricing</h1>
                                    <div className="row g-4 align-items-center">
                                        <div className="col-lg-6">
                                            <div className="text-center bg-dark p-5">
                                                <h4 className="text-white">Enjoy</h4>
                                                <h1 className="display-1 font-work-sans text-white">20%</h1>
                                                <p className="fs-2 text-white mb-0">Off</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Maecenas eget libero lobortis,
                                                auctor nisi quis, aliquet nunc. Nam dapibus lacus.</p>
                                            <a className="btn btn-dark" href>Get 20% Off</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 bg-dark p-5">
                                <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid flex-shrink-0" src="img/price-1.jpg" alt />
                                    <div className="text-end px-4">
                                        <h6 className="text-uppercase text-primary">Haircut</h6>
                                        <h3 className="text-white font-work-sans mb-0">$49</h3>
                                    </div>
                                </div>
                                <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.2s">
                                    <img className="img-fluid flex-shrink-0" src="img/price-2.jpg" alt />
                                    <div className="text-end px-4">
                                        <h6 className="text-uppercase text-primary">Makeup</h6>
                                        <h3 className="text-white font-work-sans mb-0">$79</h3>
                                    </div>
                                </div>
                                <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.3s">
                                    <img className="img-fluid flex-shrink-0" src="img/price-3.jpg" alt />
                                    <div className="text-end px-4">
                                        <h6 className="text-uppercase text-primary">Manicure</h6>
                                        <h3 className="text-white font-work-sans mb-0">$59</h3>
                                    </div>
                                </div>
                                <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.4s">
                                    <img className="img-fluid flex-shrink-0" src="img/price-4.jpg" alt />
                                    <div className="text-end px-4">
                                        <h6 className="text-uppercase text-primary">Pedicure</h6>
                                        <h3 className="text-white font-work-sans mb-0">$49</h3>
                                    </div>
                                </div>
                                <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.5s">
                                    <img className="img-fluid flex-shrink-0" src="img/price-5.jpg" alt />
                                    <div className="text-end px-4">
                                        <h6 className="text-uppercase text-primary">Massage</h6>
                                        <h3 className="text-white font-work-sans mb-0">$39</h3>
                                    </div>
                                </div>
                                <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.6s">
                                    <img className="img-fluid flex-shrink-0" src="img/price-6.jpg" alt />
                                    <div className="text-end px-4">
                                        <h6 className="text-uppercase text-primary">Skin Care</h6>
                                        <h3 className="text-white font-work-sans mb-0">$99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing End */}
                {/* Gallery Start */}
                <div className="container-fluid gallery py-5">
                    <div className="container">
                        <div className="text-center wow fadeIn" data-wow-delay="0.2s">
                            <h1 className="font-dancing-script text-primary">Gallery</h1>
                            <h1 className="mb-5">Explore Our Gallery</h1>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
                                <div className="gallery-item h-100">
                                    <img src="img/gallery-1.jpg" className="img-fluid w-100 h-100" alt />
                                    <div className="gallery-icon">
                                        <a href="img/gallery-1.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-1"><i className="fa fa-eye" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeIn" data-wow-delay="0.4s">
                                <div className="gallery-item h-100">
                                    <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100" alt />
                                    <div className="gallery-icon">
                                        <a href="img/gallery-2.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-2"><i className="fa fa-eye" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeIn" data-wow-delay="0.6s">
                                <div className="gallery-item h-100">
                                    <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100" alt />
                                    <div className="gallery-icon">
                                        <a href="img/gallery-3.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-3"><i className="fa fa-eye" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeIn" data-wow-delay="0.2s">
                                <div className="gallery-item h-100">
                                    <img src="img/gallery-4.jpg" className="img-fluid w-100 h-100" alt />
                                    <div className="gallery-icon">
                                        <a href="img/gallery-4.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-4"><i className="fa fa-eye" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeIn" data-wow-delay="0.4s">
                                <div className="gallery-item h-100">
                                    <img src="img/gallery-5.jpg" className="img-fluid w-100 h-100" alt />
                                    <div className="gallery-icon">
                                        <a href="img/gallery-5.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-5"><i className="fa fa-eye" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.6s">
                                <div className="gallery-item h-100">
                                    <img src="img/gallery-6.jpg" className="img-fluid w-100 h-100" alt />
                                    <div className="gallery-icon">
                                        <a href="img/gallery-6.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-6"><i className="fa fa-eye" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Gallery End */}
                {/* Team Start */}
                <div className="container-fluid overflow-hidden py-5">
                    <div className="container">
                        <div className="text-center wow fadeIn" data-wow-delay="0.2s">
                            <h1 className="font-dancing-script text-primary">Team Members</h1>
                            <h1 className="mb-5">Our Experienced Specialists</h1>
                        </div>
                        <div className="row g-4 team">
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                                <div className="team-item position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                                    <div className="team-overlay">
                                        <p className="text-primary mb-1">Hair Specialist</p>
                                        <h4>Lily Taylor</h4>
                                        <div className="d-flex justify-content-center">
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2" href>
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                                <div className="team-item position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                                    <div className="team-overlay">
                                        <p className="text-primary mb-1">Nail Designer</p>
                                        <h4>Olivia Smith</h4>
                                        <div className="d-flex justify-content-center">
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2" href>
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                                <div className="team-item position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                                    <div className="team-overlay">
                                        <p className="text-primary mb-1">Beauty Specialist</p>
                                        <h4>Ava Brown</h4>
                                        <div className="d-flex justify-content-center">
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2" href>
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                                <div className="team-item position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-4.jpg" alt />
                                    <div className="team-overlay">
                                        <p className="text-primary mb-1">Spa Specialist</p>
                                        <h4>Amelia Jones</h4>
                                        <div className="d-flex justify-content-center">
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2 me-3" href>
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a className="btn btn-dark btn-sm-square border-2" href>
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Testimonial Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center wow fadeIn" data-wow-delay="0.2s">
                            <h1 className="font-dancing-script text-primary">Testimonial</h1>
                            <h1 className="mb-5">What Clients Say!</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.3s">
                            <div className="text-center bg-light p-4">
                                <i className="fa fa-quote-left fa-3x mb-3" />
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                                    ipsum et lorem et sit.</p>
                                <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-1.jpg" alt />
                                <h4 className="mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                            <div className="text-center bg-light p-4">
                                <i className="fa fa-quote-left fa-3x mb-3" />
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                                    ipsum et lorem et sit.</p>
                                <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-2.jpg" alt />
                                <h4 className="mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                            <div className="text-center bg-light p-4">
                                <i className="fa fa-quote-left fa-3x mb-3" />
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                                    ipsum et lorem et sit.</p>
                                <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-3.jpg" alt />
                                <h4 className="mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                            <div className="text-center bg-light p-4">
                                <i className="fa fa-quote-left fa-3x mb-3" />
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                                    ipsum et lorem et sit.</p>
                                <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-4.jpg" alt />
                                <h4 className="mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Blog Start */}
                <div className="container-fluid blog p-0 mt-5">
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                                <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1" />Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1" />Hair Salon</p>
                                <h3 className="mb-3">How to Extend The Life of Your Haircolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor
                                    nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
                                <a className="btn btn-dark align-self-start text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="h-100">
                                <img className="img-fluid w-100 h-100" src="img/blog-1.jpg" alt style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                                <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1" />Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1" />Hair Salon</p>
                                <h3 className="mb-3">Hottest Hairstyles and Haircuts in 2045</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor
                                    nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
                                <a className="btn btn-dark align-self-start text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="h-100">
                                <img className="img-fluid w-100 h-100" src="img/blog-2.jpg" alt style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
            </div>
            <Footer />
        </div>
    )
}

export default Home