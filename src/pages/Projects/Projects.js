import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './projects.css';
import grunder from "../../images/grunder.jpeg";
import norkat from "../../images/norkat.jpg";
import oldwebsite from "../../images/old-webiste.jpg";
import insperaImage from "../../images/inspera-image.jpg";
import inspera from "../../pdfs/Inspera.pdf";
import { useTranslation } from 'react-i18next';

function ProjectSection({ project, index }) {
  const [ref, inView] = useInView();
  const [activated, setActivated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setActivated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  
  const imageClass = `project-image-${index}`;
  return (
      <div
          ref={activated ? ref : null}
          className={`section ${index % 2 !== 0 ? 'text-left' : 'text-right'} ${inView ? 'visible' : ''}`}
      >
          <div className="project-content">
              <div className="text">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
              </div>
              <div className={`project-image ${imageClass}`}>
                  <img src={project.image} alt={project.title} />
              </div>
          </div>
      </div>
  );
}


function Projects() {
  const { t } = useTranslation();
  const projects = [
    { title: t('projects.details.0.title'), description: t('projects.details.0.description'), image: grunder },
    { title: t('projects.details.1.title'), description: t('projects.details.1.description'), image: norkat },
    { title: t('projects.details.2.title'), description: t('projects.details.2.description'), image: oldwebsite },
    { 
      title: t('projects.details.3.title'), 
      description: (
          <span>
              {t('projects.details.3.description')}{' '}
              <a className='project-link' href={inspera} target="_blank" rel="noopener noreferrer">
                  {t('projects.details.3.reportLink')}
              </a>
          </span>
      ), 
      image: insperaImage 
  }
  ];

  return (
    <div className="projects-container">
      <h1>{t('projects.title')}</h1>
      <br/>
      {projects.map((project, index) => (
        <ProjectSection key={index} index={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
