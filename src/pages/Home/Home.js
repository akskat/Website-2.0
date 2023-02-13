// Home.js
import React from "react";
import "./home.css"


const Home = () => {
  return (
    <div className="home">
      <h1>Aksel Katralen</h1>
      <h2>
        Datateknologi
      </h2>
      <h3>NTNU</h3>
      <p className="home-small-text">
        Velkommen til min personlige nettside. 
        Navnet mitt er Aksel Katralen og jeg studerer Datateknologi ved NTNU i Trondheim. 
        På denne nettsiden finner man informasjon om meg og min kompetanse innen IT og programmering.
      </p>
    </div>
  );
}

export default Home;
