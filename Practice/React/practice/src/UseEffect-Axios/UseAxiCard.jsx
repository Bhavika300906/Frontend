import axios from 'axios'
import React, { useEffect, useState } from 'react'


function UseAxiCard() {
    const [data, setData] = useState([])

    useEffect(() => {
        prodata()
    }, [])

    const prodata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setData(res.data)
    }

    return (
        <>
            <h1>This is the Axios Card Component</h1>
            <div className="container">
                <div className="row">
                    {
                        data && data.map((data, index) => {

                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card" style={{ width: '18rem', margin: '20px', padding: '10px' }}>
                                        <img src={data.image} className="card-img-top" style={{height: '200px'}} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.id}</h5>
                                            <h5 className="card-title">{data.title.slice(0, 20)}</h5>
                                            <p className="card-text">{data.description.slice(0, 50)}</p>
                                            <button className='btn btn-success'>Buy now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>


    )
}
export default UseAxiCard