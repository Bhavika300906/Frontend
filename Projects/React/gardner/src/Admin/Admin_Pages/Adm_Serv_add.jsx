import React from 'react'
import Admin_Header from '../Admin_Common/Admin_Header'
import Admin_Pages from '../Admin_Common/Admin_Pages'
import { useState } from 'react'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Adm_Serv_add() {
  const redirect = useNavigate()
  const [service, setservice] = useState({
    name: "",
    img: "",
    logo: "",
    desc: ""
  })

  const getchage = (e) => {
    setservice({
      ...service,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    })
    console.log(service);
  }

  const submitedSer = async (e) => {
    e.preventDefault();

    if (service.name == "" || service.img == "" || service.logo == "" || service.desc == "") {
      console.log("Please fill all the fields");
      toast.error("Please fill all the fields")
      return false;
    }

    const res = await axios.post("http://localhost:3000/services", service)
    redirect("/admin/services/mng")
    setservice({
      name: "",
      img: "",
      logo: "",
      desc: ""
    })
    toast.success("Service Added Successfully")
  }

  // CURD - Create, Update, Read, Delete
  // READ: GET- Read all items or single item
  // CREATE: POST - Create new item
  // UPDATE: PUT/PATCH - Update existing item
  // DELETE: DELETE - Delete existing item


  return (
    <div>
      <Admin_Header />
      <h2 className="text-center my-5">Service Add Page</h2>
      <Admin_Pages title="Service Add" data="Service Add" />
      <div>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
              <p className="fs-2 text-center fw-bold text-primary">Service Add</p>
              <form onSubmit={submitedSer}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" value={service.name} onChange={getchage} name='name' className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input type="url" value={service.img} onChange={getchage} name='img' className="form-control" id="image" placeholder="your images" />
                      <label htmlFor="image">Your Images</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input type="url" value={service.logo} onChange={getchage} name='logo' className="form-control" id="logo" placeholder="your logo" />
                      <label htmlFor="logo">Your Logo</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" onChange={getchage} name='desc' value={service.desc} placeholder="your description" id="message" style={{ height: 100 }} defaultValue={""} />
                      <label htmlFor="message">Your Description</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success py-3 px-4" type="submit">Service Add</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adm_Serv_add
