import React from 'react'
import Header from '../Common/Header'
import Pages from '../Common/Pages'
import Footer from '../Common/Footer'

function Testimonial() {
    return (
        <div>
            <Header />
            <Pages title="Testimonial" data="Testimonial" />
            <div>
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

export default Testimonial
