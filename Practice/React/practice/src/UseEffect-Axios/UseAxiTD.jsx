import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseAxiTD() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log("Api data not Found")
        }
    }

    return (
        <div>
            <h1>Hello this user data</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">address</th>
                            <th scope="col">compnay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data, index) => {
                                // console.log(data)
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.company.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default UseAxiTD