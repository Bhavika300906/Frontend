import React from 'react';
import { useServices } from '../context/ServiceContext';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBSpinner
} from 'mdb-react-ui-kit';

const ServiceList = () => {
  const { services, loading, deleteService } = useServices();

  if (loading) return <div className="text-center mt-5"><MDBSpinner role='status'><span className='visually-hidden'>Loading...</span></MDBSpinner></div>;

  return (
    <MDBContainer className="mt-4">
      <h2 className="text-center mb-4">Our Services</h2>
      <MDBRow>
        {services.map((service) => (
          <MDBCol key={service.id} md='4' className='mb-4'>
            <MDBCard>
              {/* Display Image if it exists */}
              {service.Image && (
                <MDBCardImage src={service.Image} position='top' alt={service.Name} />
              )}
              <MDBCardBody>
                {/* FIX: Use Capital keys (Name, Description, Price) */}
                <MDBCardTitle>{service.Name}</MDBCardTitle>
                <MDBCardText>
                  {service.Description}
                  <br />
                  <br />
                  <strong>Category: {service.Category}</strong>
                  <br />
                  <strong className="text-primary">Price: {service.Price}</strong>
                </MDBCardText>
                <div className="d-flex justify-content-between">
                  <Link to={`/edit/${service.id}`}>
                    <MDBBtn color='info' size='sm'>Edit</MDBBtn>
                  </Link>
                  <MDBBtn color='danger' size='sm' onClick={() => deleteService(service.id)}>
                    Delete
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default ServiceList;