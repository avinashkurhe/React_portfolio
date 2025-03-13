import React from 'react';
import project from './data/projects.json';

function Project() {
  return (
    <section className='container projects my-5' id='project'>
      <h1 className='text-center text-warning mb-4'>PROJECTS</h1>

      <div className="row justify-content-center">
        {project.map((data) => (
          <div key={data.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="project-card">
              <div className="project-img">
                <img src={data.imageSrc} alt={data.title} />
              </div>
              <div className="project-content">
                <h5>{data.title}</h5>
                <p>{data.description}</p>
                <div className="project-buttons">
                  <a href={data.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
