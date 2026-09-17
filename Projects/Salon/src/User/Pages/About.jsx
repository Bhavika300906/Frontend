import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function About() {
    return (
        <div>

            <Header />
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


            <Footer />
        </div>
    )
}

export default About