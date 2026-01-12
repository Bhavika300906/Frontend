import React, { useEffect, useState } from 'react'
import Admin_Header from '../Admin_Common/Admin_Header'
import Admin_Pages from '../Admin_Common/Admin_Pages'
import { use } from 'react'

function Team_Mng() {

    const [team, setteam] = useState([])
    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await fetch("http://localhost:3000/team")
        const data = await res.json()
        console.log(data);
        setteam(data)
    }

    return (
        <div>
            <Admin_Header />
            <Admin_Pages title="Team Manage" data="Team Manage" />
            <div>
                <div className="container">
                    <table className="table my-5">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">#id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {team && team.map((data, index) => {
                                return (
                                    <tr scope="row" key={index} className='text-center' >
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td><img src={data.photo} alt="" width="50px" height="50px" /></td>
                                        <td>
                                            <button className='btn btn-primary me-2 '>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Team_Mng
