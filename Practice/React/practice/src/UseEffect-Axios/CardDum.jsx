import axios from "axios";
import React, { useEffect, useState } from "react";


function CardDum() {
    const [products, proData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        proData(res.data.products)
    }


    return (
        <div>
            <h1>Card Dummy Component</h1>
            <div className="container">
                <div className="row">
                    {
                        products && products.map((products, index) => {

                            return (
                                <div className="card text-bg-dark" style={{ width: "350px", height: "400px", margin: "10px", padding: "20px" }}>
                                    <img src={products.thumbnail} className="card-img " style={{ width: "300px", height: "250px", margin: "10px", padding: "20px" }} alt={products.title} />

                                    <div className="card-img-overlay">
                                        <p className="card-text" style={{ height: "200px" }}>{products.id}</p>
                                        <p className="card-text">{products.price}</p>
                                        <h5 className="card-title">{products.title.slice(0, 20)}</h5>
                                        <p className="card-text">{products.description.slice(0, 50)}</p>
                                    </div>
                                </div>

                            )

                        })
                    }
                </div>
            </div>

        </div >
    )
}

export default CardDum
