// props : it property
// props : read only
// props :one compoenent to another component data
// props : class and function
// class : constoto ,  super data this

import React, { Component } from 'react'

class ClassProps extends Component {
    constructor(props) {
        super(props);
        this.data = props;
    }
    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <button className='btn btn-success'>Buy now</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ClassProps