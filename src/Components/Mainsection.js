import React, { useState, useEffect } from "react";
import "../App.css";
import TDL_LOGO from "../Assets/TDL_LOGO.png";
import CoverImage from "../Assets/Brick_House/CoverImage.png";
import LandingPage from "./LandingPage";
import THINNAIVEEDU from "../Assets/Seenu_Project/THINNAIVEEDU.png";
import Valaivu from "../Assets/Velmurugan_Residance/Valaivu.png";
import MOULEGANRESIDENCE from "../Assets/Mouligam_Utthangarai/MOULEGANRESIDENCE.png";
import Whirl_FrontView from "../Assets/Whirl_House/Whirl_FrontView.png";

const images = [
  { src: CoverImage, id: "Brick-House" },
  { src: THINNAIVEEDU, id: "THINNAIVEEDU" },
  { src: Valaivu, id: "Valaivu" },
  { src: MOULEGANRESIDENCE, id: "Mouligam Residence" },
  { src: Whirl_FrontView, id: "Whirl-House" },
];

export default function Slideshow() {
  const [index, setIndex] = useState(images[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const RandomIndex = Math.floor(Math.random() * images.length);
      console.log(RandomIndex);
      setIndex(images[RandomIndex]);
      console.log(index);
      // setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <img
        src={index.src}
        alt={`Project ${index.id}`}
        onClick={() => (window.location.href = `/works/${index.id}`)}
      />

      <p className="project-description">
        Tecton Design Lab is an architecture and planning practice focused on
        creating refined, functional, and enduring built environments across
        residential and commercial sectors.we believe architecture should not
        only shape spaces, but elevate the way people live, work, and experience
        them.
      </p>

      <div className="lab-logo">
        <img src={TDL_LOGO} alt="Lab logo" />
      </div>
      {/* 
      <div>
        <BackButton to="/project">← View Projects</BackButton>
      </div> */}

      <div>
        <LandingPage />
      </div>
    </div>
  );
}
