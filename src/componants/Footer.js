import React from 'react';

function Footer() {
  return (
    <footer className='container footer'>
      <div className='footer-content text-center'>
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
