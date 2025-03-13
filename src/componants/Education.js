import React from 'react';
import education from './data/education.json';

function Education() {
  return (
    <React.Fragment>
      <div className='container ex' id='education'>
        <h1>EDUCATION</h1>
        {
          education.map((data) => (
            <div key={data.id} className='ex-item text-center my-5'>
              <div className='left'>
                <img src={`/assets/${data.imageSrc}`} alt='img'></img>
              </div>
              <div className='right'>
                <h2>{data.role}</h2>
                <h4>
                  <span style={{color: "yellowgreen"}}>{data.startDate}{"  "}{data.endDate}</span>
                  {" "}
                  <span style={{color: "yellow"}}>{data.location}</span>
                </h4>
                <h5 style={{color: "yellow"}}>{data.college[0]}</h5>
                <h5 style={{color: "yellow"}}>{data.college[1]}</h5>
              </div>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  );
}

export default Education;
