import React from 'react'
import Admin_Header from '../Admin_Common/Admin_Header'
import Admin_Pages from '../Admin_Common/Admin_Pages'

function Team_add() {

  return (
    <div>
      <Admin_Header />
      <Admin_Pages title="Team Add" data="Team Add" />
      <div>
        <div>
          <div className="container">
            <div className="row my-5">
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                <p className="fs-2 text-center fw-bold text-primary">Team Add</p>
                <form >
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" name='name' className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating">
                        <input type="url" name='img' className="form-control" id="image" placeholder="your images" />
                        <label htmlFor="image">Your Images</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating">
                        <input type="url" name='logo' className="form-control" id="logo" placeholder="your logo" />
                        <label htmlFor="logo">Your Logo</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="your description" id="message" style={{ height: 100 }} defaultValue={""} />
                        <label htmlFor="message">Your Description</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success py-3 px-4" type="submit">Team Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team_add
