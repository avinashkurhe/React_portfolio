import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1 className="text-center text-warning">Contact Me</h1>

      <div className="container contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Social Links */}
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/avinashkurhe2002" target="_blank" rel="noopener noreferrer" className="icon-item">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/avinashkurhe" target="_blank" rel="noopener noreferrer" className="icon-item">
            <VscGithubAlt className="icons" />
          </a>
          <a href="mailto:kurheavinash2019@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-item">
            <MdOutlineEmail className="icons" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
