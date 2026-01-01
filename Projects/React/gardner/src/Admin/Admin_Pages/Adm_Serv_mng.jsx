import React, { useState, useEffect } from 'react'
import Admin_Header from '../Admin_Common/Admin_Header'
import Admin_Pages from '../Admin_Common/Admin_Pages'
import axios from 'axios'
import { toast } from 'react-toastify'

function Adm_Serv_mng() {

  //all service data fetch(get)
  const [service, setservice] = useState([])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/services")
    console.log(res.data);
    setservice(res.data)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  //single service data show state
  const [data,setdata]=useState({
    id:"",
    name:"",
    img:"",  
    logo:"",
    desc:""

  })
  //single product data fetch(get)
  const singleservice=async(id)=>{
    const res=await axios.get(`http://localhost:3000/services/${id}`)
    console.log(res.data);
    setdata(res.data)
  }

  //delete service
  const deleteservice=async(id)=>{
    await axios.delete(`http://localhost:3000/services/${id}`)
    fetchdata()
    toast.success("Service Deleted Successfully")
  }

  return (
    <div>
      <Admin_Header />
      <Admin_Pages title="Service Manage" data="Service Manage" />


      <div className="container">
        <h1>Service Management</h1>

        <table className="table my-5">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {service.map((data) => (
              <tr className="text-center" key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>
                  <img
                    src={data.img}
                    alt={data.name}
                    style={{ width: "100px", height: "50px" }}
                  />
                </td>
                <td>
                  <button className="btn btn-success btn-sm mx-1 p-2">View</button>
                  <button className="btn btn-danger btn-sm mx-1 p-2">Delete</button>
                  <button className="btn btn-info btn-sm mx-1 p-2">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Adm_Serv_mng
