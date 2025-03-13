import React from 'react'
import skill from './data/skills.json'

function Skills() {
  return (
    <>
      <div className='container skills' id='skill'>
        <h1>SKILLS</h1>

        <div className='items' >
          {skill.map((data) => (
            <>
              <div className='item' key={data.id}>
                <img src={`/assets/${data.imageSrc}`} alt='img' />
                <h3>{data.title}</h3>
              </div>
            </>


          ))}
        </div>
      </div>
    </>
  )
}

export default Skills