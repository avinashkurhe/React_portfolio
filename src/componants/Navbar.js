import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container nav_bar'>
      <div className='left nav_item'>Portfolio</div>
      <div className='right nav_bar'>
        <Link className='nav_item' to='/'>Home</Link>
        <Link className='nav_item' to='/education'>Education</Link>
        <Link className='nav_item' to='/skills'>Skills</Link> {/* corrected path */}
        <Link className='nav_item' to='/projects'>Projects</Link> {/* corrected path */}
        <Link className='nav_item' to='/contact'>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
