// ============================================
// COMPLETE Services.jsx - COPY THIS ENTIRE FILE
// Location: Website/Pages/Services.jsx
// ============================================

import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Pages from '../Common/Pages'
import axios from 'axios'

function Services() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = async () => {
        try {
            const res = await axios.get("http://localhost:3000/services")
            console.log("✅ Fetched services:", res.data)
            setServices(res.data)
            setLoading(false)
        } catch (error) {
            console.error("❌ Error fetching services:", error)
            setLoading(false)
        }
    }

    return (
        <div>
            <Header />
            <Pages title="Our Services" data="Services" />
            <div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="fs-5 fw-bold text-primary">Our Services</p>
                            <h1 className="display-5 mb-5">Services That We Offer For You</h1>
                        </div>
                        
                        {loading ? (
                            <div className="text-center my-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading services...</p>
                            </div>
                        ) : services.length === 0 ? (
                            <div className="alert alert-warning text-center my-5">
                                <h4>No Services Available</h4>
                                <p>Please add services from the admin panel.</p>
                            </div>
                        ) : (
                            <div className="row g-4">
                                {services.map((service, index) => (
                                    <div 
                                        className="col-lg-4 col-md-6 wow fadeInUp" 
                                        data-wow-delay={`${0.1 + (index * 0.2)}s`} 
                                        key={service.id}
                                    >
                                        <div className="service-item rounded h-100 w-100 ">
                                            <div className="service-img rounded">
                                                <img 
                                                    className="img-fluid" 
                                                    src={service.img} 
                                                    alt={service.name} 
                                                />
                                            </div>
                                            <div className="service-text rounded h-100 w-100 p-5">
                                                <div className="btn-square rounded-circle mx-auto mb-4">
                                                    <img 
                                                        className="img-fluid rounded-circle" 
                                                        src={service.logo} 
                                                        alt="Icon" 
                                                    />
                                                </div>
                                                <h4 className="mb-3">{service.name}</h4>
                                                <p className="mb-4">{service.desc}</p>
                                                <a className="btn btn-sm" href="#">
                                                    <i className="fa fa-plus text-primary me-2" />
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services