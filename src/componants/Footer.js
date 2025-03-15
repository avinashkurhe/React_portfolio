import React from 'react'
function Footer() {
  return (
      <div className="footer-content mt-5">
        <p id='foot'>&copy; {new Date().getFullYear()} <span className="highlight">Avinash Kurhe</span>. All rights reserved.</p>
      </div>
  );
}

export default Footer;
