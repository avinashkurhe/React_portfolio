import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="contact-section mt-3" id="contact">
      <h1 className="text-center text-warning">Contact Me</h1>

      <div className="container contact-container">
       

        {/* Social Links */}
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
    </section>
  );
}

export default Contact;
