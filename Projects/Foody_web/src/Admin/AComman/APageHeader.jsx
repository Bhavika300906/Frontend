import React from 'react'

function APageHeader({name,title}) {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">{title}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
        </div>
    )
}

export default APageHeader