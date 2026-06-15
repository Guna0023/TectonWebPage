import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import LandingPage from "./LandingPage";
import "../App.css";
import { ProjectDetails } from "./ProjectDetails";
import {
  Container,
  FirmName,
  Divider,
  Breadcrumb,
  SectionTitle,
  PageContainer,
  GridContainer,
  StyledLink,
  ImageContainer,
  MainImage,
  BackButton,
  ProjectTitle,
  ProjectCard,
} from "../Styles/Style";
// import Contact from "../Pages/Contact";

export default function ProjectGallery() {
  return (
    <>
      <PageContainer>
        <Container>
          <FirmName>TECTON DESIGN LAB</FirmName>
          <Divider />
          <Breadcrumb>{`Home ${window.location.pathname}`}</Breadcrumb>
          <div>
            <p>Architecture & Interiors </p>
            <p>Turnkey & Site Supervision</p>
            <p>Facade & Retrofit</p>
          </div>

          <SectionTitle>Projects</SectionTitle>
          <GridContainer>
            {ProjectDetails.map((project) => (
              <ProjectCard key={project.id}>
                <StyledLink to={`/works/${project.id}`}>
                  <ImageContainer>
                    <MainImage src={project.mainImage} alt={project.title} />
                  </ImageContainer>
                </StyledLink>
                <ProjectTitle>{project.id}</ProjectTitle>
              </ProjectCard>
            ))}
          </GridContainer>
        </Container>
      </PageContainer>
      {/* <Contact /> */}
    </>
  );
}
