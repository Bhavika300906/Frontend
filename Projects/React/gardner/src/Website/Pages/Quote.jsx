import React from 'react'
import Header from '../Common/Header'
import Pages from '../Common/Pages'
import Footer from '../Common/Footer'

function Quote() {
    return (
        <div>
            <Header />
            <Pages  title="Quote" data="Quote" />
            <div>
                {/* Quote Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="fs-5 fw-bold text-primary">Free Quote</p>
                            <h1 className="display-5 mb-5">Get A Free Quote</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                                                <label htmlFor="gname">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                                                <label htmlFor="gmail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                                                <label htmlFor="cname">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                                                <label htmlFor="cage">Service Type</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: 100 }} defaultValue={""} />
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

            </div>
            <Footer />
        </div>
    )
}

export default Quote
