import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useServices } from '../context/ServiceContext';
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBTextArea } from 'mdb-react-ui-kit';

const EditService = () => {
  const { id } = useParams();
  const { services, updateService } = useServices();
  const navigate = useNavigate();
  const [service, setService] = useState({ Name: '', Description: '', Price: '', Category: '', Image: '' });

  useEffect(() => {
    const foundService = services.find(s => s.id === id);
    if (foundService) setService(foundService);
  }, [id, services]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateService(id, {
        ...service,
        Price: service.Price
    });
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <MDBCard style={{ maxWidth: '500px', width: '100%' }}>
        <MDBCardBody>
          <h3 className="text-center mb-4">Edit Service</h3>
          <form onSubmit={handleSubmit}>
            <MDBInput 
              label='Service Name' 
              type='text' 
              className='mb-3'
              value={service.Name}
              onChange={(e) => setService({...service, Name: e.target.value})}
            />
            <MDBInput 
              label='Category' 
              type='text' 
              className='mb-3'
              value={service.Category}
              onChange={(e) => setService({...service, Category: e.target.value})}
            />
            <MDBTextArea 
              label='Description' 
              rows={3} 
              className='mb-3'
              value={service.Description}
              onChange={(e) => setService({...service, Description: e.target.value})}
            />
            <MDBInput 
              label='Price' 
              type='number' 
              className='mb-3'
              value={service.Price}
              onChange={(e) => setService({...service, Price: e.target.value})}
            />

            {/* Image Link Input */}
            <MDBInput 
              label='Image URL' 
              type='text' 
              className='mb-3'
              value={service.Image}
              onChange={(e) => setService({...service, Image: e.target.value})}
            />

            {/* Current Image Preview */}
            {service.Image && (
              <div className="mb-3 text-center">
                <p className="text-muted small">Preview:</p>
                <img 
                  src={service.Image} 
                  alt="Preview" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            )}

            <MDBBtn type="submit" color='success' block>Update</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default EditService;