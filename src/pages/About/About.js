import React from "react";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import "./about.css";
import aboutMe from "../../images/cv-bilde.png";
import education from "../../images/ntnu.jpg";
import jobs from "../../images/vegvesen-2022.jpeg";
import freetime from "../../images/revy.png";

function Section({ section, index }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { t } = useTranslation();  // Legg til denne linjen

  return (
    <div
      ref={ref}
      className={`section ${index % 2 === 0 ? "text-left" : "text-right"} ${inView ? 'visible' : ''}`}
    >
      <div className="content">
        <div className="text">
          <h1>{t(section.title)}</h1>
          <p>{t(section.content)}</p>
        </div>
        <div className="image">
          <img src={section.image} alt={t(section.title)} />
        </div>
      </div>
    </div>
  );
}

function About() {


  const sections = [
    { 
        title: 'about.sections.aboutMe.title', 
        content: 'about.sections.aboutMe.content', 
        image: aboutMe 
    },
    { 
        title: 'about.sections.education.title', 
        content: 'about.sections.education.content', 
        image: education 
    },
    { 
        title: 'about.sections.jobExperience.title', 
        content: 'about.sections.jobExperience.content', 
        image: jobs 
    },
    { 
        title: 'about.sections.volunteeringAndLeisure.title', 
        content: 'about.sections.volunteeringAndLeisure.content', 
        image: freetime 
    },
  ];

  return (
    <div className="about-container">
      {sections.map((section, index) => (
        <Section key={index} index={index} section={section} />
      ))}
    </div>
  );
}

export default About;
