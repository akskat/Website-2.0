import React from "react";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import "./about.css";
import aboutMe from "../../images/cv-bilde.jpg";
import education from "../../images/ntnu.jpg";
import jobs from "../../images/vegvesen-2022.jpeg";
import freetime from "../../images/revy.png";

function Section({ section, index }) {
  const [ref, inView] = useInView();
  const { t } = useTranslation();
  const [activated, setActivated] = React.useState(false);

  React.useEffect(() => {
    // Setter en forsinkelse på 500ms før IntersectionObserver aktiveres
    const timer = setTimeout(() => {
      setActivated(true);
    }, 300);

    return () => clearTimeout(timer); // Rens opp timeren ved avmontering
  }, []);

  return (
    <div
      ref={activated ? ref : null}  // Binder ref kun hvis 'activated' er sann
      className={`section ${index % 2 === 0 ? "text-left" : "text-right"} ${inView ? 'visible' : ''}`}
    >
      <div className="content">
        <div className="text">
          <h1>{t(section.title)}</h1>
          <p>{t(section.content)}</p>
        </div>
        <div className={`about-image image-${index}`}>
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
