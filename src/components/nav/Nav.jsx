import React from 'react';
import "./nav.css"



function Nav({ currentPage, handlePageChange }) {
  return (
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-items" id="navbarNav">
      <ul class="navbar-nav">
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
  </div>
</nav>














    // <div className='navItems'> 
    // <ul>
      
    //   <li>
    //     <a href="#home" onClick={() => handlePageChange('Home')}
    //       className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
    //   </li>

    //   <li>
    //     <a href="#about" onClick={() => handlePageChange('About')}
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
    //   </li>

    //   <li>
    //     <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
    //       className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
    //   </li>

    //   <li>
    //     <a href="#contact" onClick={() => handlePageChange('Contact')}
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
    //   </li>
      
    // </ul>

    // </div>
  );
}

export default Nav;
