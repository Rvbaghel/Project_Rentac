import React from 'react';
import './chair.css';

const Chair = () => {
  return (
    <div className="chair-container">
      <div className="filter">
        <span className="filter-label">FILTERS</span>
        <div className="dropdown">
          <span className="dropdown-label">Sub-Category</span>
          <span className="dropdown-icon">▼</span>
        </div>
        <div className="dropdown">
          <span className="dropdown-label">Price Range</span>
          <span className="dropdown-icon">▼</span>
        </div>
        <div className="options">
          <span>+3 options available</span>
          <span className="options-icon">➔</span>
        </div>
      </div>
    </div>
  );
};

export default Chair;
