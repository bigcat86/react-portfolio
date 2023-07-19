import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ view, handleViewChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handleViewChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={view === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handleViewChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={view === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
            <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handleViewChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={view === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handleViewChange('Resume')}
          //  TODO: Add a comment explaining what this logic is doing

          className={view === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handleViewChange('Contact')}
          className={view === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
