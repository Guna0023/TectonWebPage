import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Logo from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import MainSection from "./Components/Mainsection";
import WorkDetails from "./Pages/WorkDetails";
import LandingPage from "./Components/LandingPage";
import ProjectGallery from "./Components/ProjectGallery";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/:projectId" element={<WorkDetails />} />
        <Route path="/project" element={<ProjectGallery />} />
      </Routes>
      {window.location.pathname !== "/contact" && <Footer />}
    </Router>
  );
}

export default App;
