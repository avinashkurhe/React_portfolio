import React from 'react';
import education from './data/education.json';

function Education() {
  return (
    <section className='container education-section mt-4' id='education'>
      <h1 className='text-center text-warning mb-4'>EDUCATION</h1>
      
      {education.map((data) => (
        <div key={data.id} className='ex-item d-flex flex-wrap align-items-center my-4'>
          
          {/* Left Section - Image */}
          <div className='left'>
            <img src={`/assets/${data.imageSrc}`} alt='Education' className='edu-img' />
          </div>

          {/* Right Section - Details */}
          <div className='right text-center text-md-start'>
            <h2 className='text-primary fw-bold'>{data.role}</h2>
            <h4>
              <span className='text-success'>{data.startDate} - {data.endDate}</span> |
              <span className='text-warning ms-2'>{data.location}</span>
            </h4>
            <h5 className='text-warning'>{data.college[0]}</h5>
            <h5 className='text-warning'>{data.college[1]}</h5>
          </div>

        </div>
      ))}
    </section>
  );
}

export default Education;
