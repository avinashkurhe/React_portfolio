import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <>
    <h1>Contact Me</h1>

    <div className='container contact' id='contact'>
     
      <div className='contact-form'>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' required></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='contact-icons'>
        <a href='https://www.linkedin.com/in/avinashkurhe2002' target='_blank' rel='noopener noreferrer' className='item'><CiLinkedin className='icons' /></a>
        <a href='https://github.com/avinashkurhe' target='_blank' rel='noopener noreferrer' className='item'><VscGithubAlt className='icons' /></a>
        <a href="mailto:kurheavinash2019@gmail.com" target='_blank' rel='noopener noreferrer' className='item'><MdOutlineEmail className='icons' /></a>
      </div>
     
    </div>
    </>
  );
}

export default Contact;
