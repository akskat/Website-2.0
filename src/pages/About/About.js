import React from "react";
import { useInView } from 'react-intersection-observer';
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

  return (
    <div
      ref={ref}
      className={`section ${index % 2 === 0 ? "text-left" : "text-right"} ${inView ? 'visible' : ''}`}
    >
      <div className="content">
        <div className="text">
          <h1>{section.title}</h1>
          <p>{section.content}</p>
        </div>
        <div className="image">
          <img src={section.image} alt={section.title} />
        </div>
      </div>
    </div>
  );
}

function About() {
  const sections = [
    { title: "Om meg selv", content: "Jeg er 23 år gammel student fra Hamar som studerer ved NTNU i Trondheim. ", image: aboutMe },
    { title: "Utdanning", content: "Jeg går fjerde året på Datateknologi med spesialisering innen kunstig intelligens. I tillegg går jeg også Kommunikasjonsteknologi og digital sikkerhet med spesialisering innen informasjonssikkerhet. Våren 2024 skal jeg på utveklsing til UC Berkeley i USA.", image: education },
    { title: "Jobberfaring", content: "Tekst om jobberfaring.", image: jobs },
    { title: "Verv og fritid", content: "Gjennom min studietid har jeg blant annet vært med i linjeforeningens egen revy, Abakusrevyen. Der jobbet jeg i scenegruppa, som hadde ansvar for kontruksjonen av scena og rekvisitter. På fritiden min liker jeg en variert hverdag, som ofte kan fylles med enten bowling, buldring, skogsturer eller sosiale kvelder med venner.", image: freetime },
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
