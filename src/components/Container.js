import React, { useState } from 'react';
import About from './AboutMe';
import Contact from './Contact';
import Pastwork from './Pastwork';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Resume from './Resume';


export default function Container() {
  const [currentPage, setCurrentPage] = useState('');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About/>;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Pastwork') {
      return <Pastwork />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header/>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
  );
}