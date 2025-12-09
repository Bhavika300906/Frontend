// props : it property
// props : read only
// props :one compoenent to another component dataimport React, { Component } from "react";

function FunProps({ img, desc, title }) {
    return (
        <>
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <button className='btn btn-info'>Add cart</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default FunProps
