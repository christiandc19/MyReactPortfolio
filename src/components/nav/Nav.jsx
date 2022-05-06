import React from 'react';
import "./nav.css"

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className='navItems'> 
    <ul>
      
      <li>
        <a href="#home" onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
      </li>

      <li>
        <a href="#about" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
      </li>

      <li>
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
      </li>

      <li>
        <a href="#contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      </li>
      
    </ul>
    </div>
  );
}

export default Nav;
