import React from 'react';
import { useInView } from 'react-intersection-observer';
import './projects.css';
import grunder from "../../images/grunder.jpeg";
import project2Image from "../../images/cv-bilde.jpg";
import project3Image from "../../images/cv-bilde.jpg";

function ProjectSection({ project, index }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`section ${index % 2 === 0 ? 'text-left' : 'text-right'} ${inView ? 'visible' : ''}`}
    >
      <div className="content">
        <div className="text">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="image">
          <img src={project.image} alt={project.title} />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    { title: 'Start NTNU - Gründerjakten 2023', description: 'Vinner av Start NTNU - Gründerjakten 2023. Casekonkurranse arrangert av Start NTNU og Tripletex. Vinnerbidraget gikk ut på å bruke en kombinasjon av big data og maskinlæring for å forbedre og gi merverdi til Tripletex sin regnskapsapp.', image: grunder },
    { title: 'Prosjekt 2: Denne nettsiden', description: 'Beskrivelse av prosjekt 2.', image: project2Image },
    { title: 'Prosjekt 3: Pentesting av inspera', description: 'Beskrivelse av prosjekt 3.', image: project3Image },
  ];

  return (
    <div className="projects-container">
      <h1>Prosjekter og konkurranser</h1>
      <p>Oversikt over egne prosjekter og konkurranser jeg har deltatt i gjennom min tid som student.</p>
      {projects.map((project, index) => (
        <ProjectSection key={index} index={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
