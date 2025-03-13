import React from 'react';
import skill from './data/skills.json';

function Skills() {
  return (
    <section className='container skills-section mt-5' id='skill'>
      <h1 className='text-center text-warning mb-4'>SKILLS</h1>

      <div className='skills-grid'>
        {skill.map((data) => (
          <div className='skill-item' key={data.id}>
            <img src={`/assets/${data.imageSrc}`} alt={data.title} className='skill-img' />
            <h3 className='text-primary'>{data.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
