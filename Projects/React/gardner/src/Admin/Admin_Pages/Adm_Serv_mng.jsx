import React, { useEffect, useState } from 'react'
import Admin_Header from '../Admin_Common/Admin_Header'  // ✅ FIXED!
import Admin_Pages from '../Admin_Common/Admin_Pages'    // ✅ FIXED!
import axios from 'axios'
import { toast } from 'react-toastify'

function Adm_Serv_mng() {
  const [service, setservice] = useState([])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/services")
    setservice(res.data)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const [data, setdata] = useState({
    id: "",
    name: "",
    img: "",
    logo: "",
    desc: ""
  })

  const singlservice = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`)
    console.log(res.data)
    setdata(res.data)
  }

  const deleteservice = async (id) => {
    const res = await axios.delete(`http://localhost:3000/services/${id}`)
    fetchdata()
    toast.success('service deleted..')
  }

  const [edit, setedit] = useState(null)
  const [edited, setedited] = useState({
    id: "",
    name: "",
    img: "",
    logo: "",
    desc: ""
  })

  const opendata = (data) => {
    console.log(data)
    setedit(data)
    setedited(data)
  }

  const getchange = (e) => {
    setedited({
      ...edited,
      [e.target.name]: e.target.value
    })
    console.log(edited)
  }

  const getupdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/services/${edited.id}`, edited)
      console.log(res.data)
      toast.success('service updated..')
      setedited({
        id: "",
        name: "",
        img: "",
        logo: "",
        desc: ""
      })
      setedit(null)
      fetchdata()
    } catch (error) {
      console.log("Api data not Found..", error)
    }
  }

  return (
    <div>
      <Admin_Header />
      <Admin_Pages title="Service Management" data="Service" />

      <div className="container">
        <h1>Service Management</h1>
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
            {
              service && service.map((data, index) => {
                return (
                  <tr scope="row" key={index} className='text-center'>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>
                      <img src={data.img} style={{ width: "100px" }} alt="" />
                    </td>
                    <td>
                      <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlservice(data.id)}>View</button>
                      <button className='btn btn-success mx-2' onClick={() => opendata(data)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => deleteservice(data.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        {
          edit && (
            <div className="container">
              <div className="row my-5">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <p className="fs-2 text-center fw-bold text-primary">Service update</p>
                  <form >
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" onChange={getchange} value={edited.name} name='name' className="form-control" id="name" placeholder="Your Name" />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input type="url" onChange={getchange} value={edited.img} name='img' className="form-control" id="image" placeholder="your images" />
                          <label htmlFor="image">your images</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input type="url" onChange={getchange} value={edited.logo} name='logo' className="form-control" id="logo" placeholder="your logo" />
                          <label htmlFor="logo">your logo</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" onChange={getchange} value={edited.desc} name='desc' placeholder="your descrition" id="message" style={{ height: 100 }} defaultValue={""} />
                          <label htmlFor="message">your descrition</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary py-3 px-4" onClick={getupdate} type="submit">Service update</button>
                        <button className="btn btn-primary py-3 px-4 mx-2" onClick={() => setedit(null)} type="button">Service cancel</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
        }

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Service Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="col-12 wow mx-auto fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item rounded d-flex h-100">
                    <div className="service-img rounded">
                      <img className="img-fluid" src={data.img} alt />
                    </div>
                    <div className="service-text rounded p-5">
                      <div className="btn-square rounded-circle mx-auto mb-3" style={{ overflow: "hidden" }}>
                        <img className="img-fluid" src={data.logo} alt="Icon" />
                      </div>
                      <h4 className="mb-3">{data.id}</h4>
                      <h4 className="mb-3">{data.name}</h4>
                      <p className="mb-4">{data.desc}</p>
                      <a className="btn btn-sm" href="#"><i className="fa fa-plus text-primary me-2" />Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adm_Serv_mng