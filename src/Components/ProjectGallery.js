import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
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
} from "../Styles/Style";
import Contact from "../Pages/Contact";

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProjectTitle = styled.p`
  margin: 16px 0 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  text-align: left;
`;

export default function ProjectGallery() {
  return (
    <>
      <PageContainer>
        <Container>
          <FirmName>TECTON DESIGN LAB</FirmName>
          <Divider />
          <Breadcrumb>{`Home ${window.location.pathname}`}</Breadcrumb>
          <BackButton to="/">← BACK TO PORTFOLIO</BackButton>
          <SectionTitle>Projects</SectionTitle>
          <GridContainer>
            {ProjectDetails.map((project) => (
              <ProjectCard key={project.id}>
                <StyledLink to={`/works/${project.id}`}>
                  <ImageContainer>
                    <MainImage src={project.mainImage} alt={project.title} />
                  </ImageContainer>
                </StyledLink>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectCard>
            ))}
          </GridContainer>
        </Container>
      </PageContainer>
      <Contact />
    </>
  );
}
