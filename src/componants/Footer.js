import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer mt-4 bg-dark">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} <span className="highlight">Avinash Kurhe</span>. All rights reserved.</p>

        {/* Social Icons */}
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/avinashkurhe2002" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className="footer-icon" />
          </a>
          <a href="https://github.com/avinashkurhe" target="_blank" rel="noopener noreferrer">
            <VscGithubAlt className="footer-icon" />
          </a>
          <a href="mailto:kurheavinash2019@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdOutlineEmail className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
