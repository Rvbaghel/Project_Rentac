
import React from 'react';
import './catego.css'; // Ensure this path is correct

import ChairImage from './chair2.png';
import TableImage from './table2.png';
import SofaImage from './sofa.png';
import Cl from './Chair'

const categories = [
  {
    title: 'Chair',
    image: ChairImage,
    link: {Cl}, 
  },
  {
    title: 'Table',
    image: TableImage,
    link: '/Table/Table.js', 
  },
  {
    title: 'Sofa',
    image: SofaImage,
    link: '/sofa.html', 
  },
];

const Categories = () => {
  const handleImageClick = (link) => {
    // Navigate to the specified HTML page
    window.location.href = link;
  };

  return (
    <section className="categories">
      {categories.map((category) => (
        <div className="category" key={category.title} onClick={() => handleImageClick(category.link)}>
          <img src={category.image} alt={category.title} />
          <h3>{category.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Categories;







/*
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './catego.css'; // Ensure this path is correct

import ChairImage from './chair2.png';
import TableImage from './table2.png';
import SofaImage from './sofa.png';

const categories = [
  {
    title: 'Chair',
    image: ChairImage,
    link: "/Chair/Chair", // Define the path to navigate to when Chair is clicked
  },
  {
    title: 'Table',
    image: TableImage,
    link: '/Table', // Define the path to navigate to when Table is clicked
  },
  {
    title: 'Sofa',
    image: SofaImage,
    link: '/sofa', // Define the path to navigate to when Sofa is clicked
  },
];

const Categories = () => {
  return (
    <section className="categories">
      {categories.map((category) => (
        <div className="category" key={category.title}>
         
          <Link to={category.link}>
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Categories;
*/