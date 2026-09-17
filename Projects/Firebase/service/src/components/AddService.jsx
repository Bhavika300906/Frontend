import React, { useState } from 'react';
import { useServices } from '../context/ServiceContext';
import { useNavigate } from 'react-router-dom';
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBTextArea } from 'mdb-react-ui-kit';

const AddService = () => {
  const [service, setService] = useState({ Name: '', Description: '', Price: '', Category: '', Image: '' });
  const { addService } = useServices();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addService({
        Name: service.Name,
        Description: service.Description,
        Category: service.Category,
        Price: service.Price,
        Image: service.Image // Now just saving the link directly
    });
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <MDBCard style={{ maxWidth: '500px', width: '100%' }}>
        <MDBCardBody>
          <h3 className="text-center mb-4">Add New Service</h3>
          <form onSubmit={handleSubmit}>
            <MDBInput 
              label='Service Name' 
              type='text' 
              className='mb-3'
              value={service.Name}
              onChange={(e) => setService({...service, Name: e.target.value})}
              required
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
              required
            />
            
            {/* Image Link Input */}
            <MDBInput 
              label='Image URL (Paste Link Here)' 
              type='text' 
              className='mb-3'
              value={service.Image}
              onChange={(e) => setService({...service, Image: e.target.value})}
              placeholder="https://example.com/my-image.jpg"
            />

            {/* Live Preview */}
            {service.Image && (
              <div className="mb-3 text-center">
                <img 
                  src={service.Image} 
                  alt="Preview" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} 
                  onError={(e) => e.target.style.display = 'none'} // Hides if link is broken
                />
              </div>
            )}

            <MDBBtn type="submit" block>Add Service</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddService;