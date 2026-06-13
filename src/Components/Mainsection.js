import React, { useState, useEffect } from "react";
import "../App.css";
import TDL_LOGO from "../Assets/TDL_LOGO.png";
import Navbar from "./Navbar";
import CoverImage from "../Assets/Project-01/CoverImage.png";
import LandingPage from "./LandingPage";
import seenu from "../Assets/Project_02/Seenu.png";
import Illam from "../Assets/Project_03/Illam.png";
import Utthangarai from "../Assets/Project_04/Utthangarai.png";
import { BackButton } from "../Styles/Style";
import Footer from "../Pages/Footer";

const images = [
  { src: CoverImage, id: "Brick-House" },
  { src: seenu, id: "edq-housing-tower" },
  { src: Illam, id: "edq-housing-tower" },
  { src: Utthangarai, id: "edq-housing-tower" },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <img
        src={images[index].src}
        alt={`Project ${images[index].id}`}
        onClick={() => (window.location.href = `/works/${images[index].id}`)}
      />

      <p className="project-description">
        Tecton Design Lab is an architecture and planning practice focused on
        creating refined, functional, and enduring built environments across
        residential and commercial sectors.
      </p>

      <div className="lab-logo">
        <img src={TDL_LOGO} alt="Lab logo" />
      </div>
      <div className="project-description">
        <h3>Projects</h3>
        <span className="project-info">
          At Tecton Design Lab, we believe architecture should not only shape
          spaces, but elevate the way people live, work, and experience them.
        </span>
      </div>

      <div>
        <BackButton to="/project">← View Projects</BackButton>
      </div>

      <div>
        <LandingPage />
      </div>
    </div>
  );
}
