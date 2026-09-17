import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

const CategoryFilter = ({ services, currentCategory, onSelectCategory }) => {
  // 1. Get unique categories from the services list
  // We add 'All' at the start manually
  const categories = ['All', ...new Set(services.map(s => s.Category).filter(c => c))];

  return (
    <div className="d-flex justify-content-center mb-4">
      <MDBBtnGroup shadow='0'>
        {categories.map((category, index) => (
          <MDBBtn
            key={index}
            color={currentCategory === category ? 'primary' : 'light'} // Highlight active button
            onClick={() => onSelectCategory(category)}
            style={{ textTransform: 'capitalize' }}
          >
            {category}
          </MDBBtn>
        ))}
      </MDBBtnGroup>
    </div>
  );
};

export default CategoryFilter;