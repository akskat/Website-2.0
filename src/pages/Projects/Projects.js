import React from 'react';
import { useInView } from 'react-intersection-observer';
import './projects.css';
import grunder from "../../images/grunder.jpeg";
import norkat from "../../images/norkat.jpg";
import oldwebsite from "../../images/old-webiste.jpg";
import insperaImage from "../../images/inspera-image.jpg";
import inspera from "../../pdfs/Inspera.pdf";

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
    { title: 'Enkeltpersonsforetak - norkat.no', description: 'Pågående prosjekt for å lage mitt eget enkeltpersonsforetak. Estimert oppstart for både selskap og nettside er innen mai 2024. Enkeltpersonsforetaket skal brukes til å lage nettsider for små- til mellomstore bedrifter.', image: norkat },
    { title: 'Eldre versjon av personlig nettside', description: 'En eldre versjon av min personlige nettside, akselkatralen.com. ', image: oldwebsite },
    {
      title: 'Prosjekt 3: Pentesting av inspera',
      description: (
        <>
          Beskrivelse av prosjekt 3.
          <br />
          <a href={inspera} target="_blank" rel="noopener noreferrer">Se detaljert rapport (PDF)</a>
        </>
      ),
      image: insperaImage
    },
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
