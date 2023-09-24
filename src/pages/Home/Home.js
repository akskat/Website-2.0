import React from 'react';
import './home.css';
import image from '../../images/line-drawing-black (2).svg';



function Home() {


  return (
    <div className="homeTop">
      <div className="textContainer">
        <h1>Aksel Katralen</h1>
        <h3>Student, NTNU Trondheim</h3>
        <p>Student ved Datateknologi og Kommunikasjonsteknologi og digital sikkerhet </p>
        <div className="btnContainer">
          <button>
            <span>Om meg</span>
          </button>
        </div>
      </div>
      <div className="imageContainer">
        <img className="sideImage" src={image} alt="Line Drawing" />
      </div>
    </div>
  );
}

export default Home;
