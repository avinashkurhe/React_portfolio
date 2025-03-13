import React from 'react'
import pdf from '../pdf/avinash_resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import Education from './Education'
import Contact from './Contact'
import Project from './Project'
import Skill from './Skills'

function Home() {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: ["Welcome To My Profile", "My Name Is Avinash Kurhe", "I Am a Full-Stack Developer", "Web-developer (React-js Developer)"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])


  return (
    <>
    
      <div className='container home my-5' id='home'>
        <div className='left'>
          <h1 ref={typedRef}> </h1>
          <a href="https://drive.google.com/file/d/1y3Wn5EWaZ31WdpYTeLbO-SzJuKugxuZr/view?usp=sharing" download='Avinash_resume.pdf' className='btn btn-outline-warning my-3'>Download Resume</a>
        </div>
        <div className='right'>
          <div className='img'>
            <img src={`/assets/${hero.imgurl}`} alt='not'></img>
          </div>
        </div>
      </div>

      <Education/>
      <Skill/>
      <Project/>
      <Contact/>

    </>
  )
}

export default Home
