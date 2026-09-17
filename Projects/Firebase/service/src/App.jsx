import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ServiceProvider } from './context/ServiceContext';
import { ToastContainer } from 'react-toastify';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBBtn } from 'mdb-react-ui-kit';

import ServiceList from './components/ServiceList';
import AddService from './components/AddService';
import EditService from './components/EditService';

function App() {
  return (
    <ServiceProvider>
      <Router>
        {/* Navigation Bar */}
        <MDBNavbar expand='lg' light bgColor='light' className='shadow-sm'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#' className='fw-bold text-primary'>
              <i className="fas fa-tools me-2"></i> Services Manager
            </MDBNavbarBrand>
            <div>
              <Link to="/">
                <MDBBtn outline color='primary' className='me-2'>
                  <i className="fas fa-home me-1"></i> Home
                </MDBBtn>
              </Link>
              <Link to="/add">
                <MDBBtn color='primary'>
                  <i className="fas fa-plus me-1"></i> Add Service
                </MDBBtn>
              </Link>
            </div>
          </MDBContainer>
        </MDBNavbar>

        {/* Routes */}
        <MDBContainer className="mt-4">
          <Routes>
            <Route path="/" element={<ServiceList />} />
            <Route path="/add" element={<AddService />} />
            <Route path="/edit/:id" element={<EditService />} />
          </Routes>
        </MDBContainer>

        {/* Toast Notification Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </ServiceProvider>
  );
}

export default App;