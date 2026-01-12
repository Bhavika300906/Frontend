import React from 'react'

function Admin_Pages({ title, data }) {
  return (
    <div>
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">{title}</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">{data}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Admin_Pages