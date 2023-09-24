import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar";
import "./components/navbar.css";
import Footer from "./components/Footer";
import "./components/footer.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="App-padding">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
