import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const ServiceCard = ({ service, onDelete }) => {
  return (
    <MDBCard className="h-100 shadow-sm hover-shadow">
      {/* Show Image if it exists */}
      {service.Image ? (
        <MDBCardImage 
          src={service.Image} 
          position='top' 
          alt={service.Name} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
      ) : (
        // Fallback placeholder if no image
        <div style={{ height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="text-muted">No Image</span>
        </div>
      )}
      
      <MDBCardBody>
        <MDBCardTitle>{service.Name}</MDBCardTitle>
        <h6 className="text-muted mb-2">{service.Category}</h6>
        <MDBCardText>
          {service.Description.substring(0, 100)}... {/* Show only first 100 chars */}
        </MDBCardText>
        <h5 className="text-primary mb-3">${service.Price}</h5>
        
        <div className="d-flex justify-content-between">
          <Link to={`/edit/${service.id}`}>
            <MDBBtn color='info' size='sm'>
              <i className="fas fa-edit me-1"></i> Edit
            </MDBBtn>
          </Link>
          <MDBBtn color='danger' size='sm' onClick={() => onDelete(service.id)}>
            <i className="fas fa-trash me-1"></i> Delete
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ServiceCard;