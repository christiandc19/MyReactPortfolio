import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
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
        <a href="#experience" onClick={() => handlePageChange('Experience')}
          className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}>Experience</a>
      </li>

      <li>
        <a href="#contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      </li>
      
    </ul>
  );
}

export default NavTabs;
