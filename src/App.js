import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MainSection from "./Components/Mainsection";
import WorkDetails from "./Pages/WorkDetails";
import ProjectGallery from "./Components/ProjectGallery";
import Footer from "./Pages/Footer";
import { Process } from "./Pages/Process";
import { Service } from "./Pages/Service";
import ScrollToTop from "./Router/ScrollToTop";

function App() {
  // eslint-disable-next-line no-undef
  const currentPath = globalThis.location?.pathname;
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/:projectId" element={<WorkDetails />} />
        <Route path="/project" element={<ProjectGallery />} />
        <Route path="/Process" element={<Process />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
      {currentPath !== "/contact" && <Footer />}
    </Router>
  );
}

export default App;
