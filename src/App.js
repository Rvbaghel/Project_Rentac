import React, { useState } from 'react';
import './App.css';
import Navbar from './home';
import Categories from './Logos/catego';
import './Logos/catego.css';
import Footer from './Footer';
import './Footer.css';
import ChairPage from './Logos/Chair';
import TablePage from './Logos/Table/Table';
import SofaPage from './Logos/Sofa/sofa';

function App() {
  // Define state to keep track of the current page
  const [currentPage, setCurrentPage] = useState('Categories');

  // Function to navigate to different pages
  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  // Render the current page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'Categories':
        return <Categories onNavigate={navigateToPage} />;
      case 'chair':
        return <ChairPage onNavigate={ChairPage} />;
      case 'table':
        return <TablePage onNavigate={navigateToPage} />;
      case 'sofa':
        return <SofaPage onNavigate={navigateToPage} />;
      default:
        return <Categories onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>RENT FURNITURE</h1>
      
      {/* Render the current page */}
      {renderPage()}
      
      <Footer />
    </div>
  );
}

export default App;
