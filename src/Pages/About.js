import React from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";
import { Info } from "../Styles/Style";
import { ProjectDetails } from "../Components/ProjectDetails";
import { PageContainer } from "../Styles/Style";
import {
  Container,
  FirmName,
  Divider,
  Breadcrumb,
  SectionTitle,
  BackButton,
} from "../Styles/Style";
// import Footer from "./Footer";

const Content = styled.p`
  margin: 0 0 28px 0;
  font-size: 1rem;
  color: #333;
  line-height: 1.8;
  letter-spacing: 0.005em;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.75;
  }
`;

const About = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <FirmName>TECTON DESIGN LAB</FirmName>
          <Divider />

          <Breadcrumb>{`Home ${window.location.pathname} us`}</Breadcrumb>

          <SectionTitle>About us</SectionTitle>
          <SectionTitle>THINK . DESIGN . LEAD</SectionTitle>

          <Content>
            Tecton Design Lab is an architecture and planning practice focused
            on creating refined, functional, and enduring built environments
            across residential and commercial sectors. With experience spanning
            over 80,000 sq.ft. of developed built space, the studio has
            delivered projects ranging from private residences and luxury homes
            to commercial buildings, office spaces, jewellery showrooms, and
            mixed-use developments.
          </Content>

          <Content>
            Our portfolio includes residential projects from 1,000 sq.ft. to
            10,000 sq.ft., featuring integrated lifestyle elements such as
            swimming pools, home theatres, and terrace gardens, along with
            commercial developments of up to 15,000 sq.ft. Guided by the
            philosophy of THINK . DESIGN . LEAD, we approach every project
            through careful analysis, purposeful design, and responsible project
            leadership. ensuring architecture that is both visionary and
            buildable.
          </Content>

          <Content>
            At Tecton Design Lab, we believe architecture should not only shape
            spaces, but elevate the way people live, work, and experience them.
          </Content>
          <FirmName>Architecture | Interior | Masterplanning</FirmName>
          <Info>7+ years of practice</Info>
          <Info>{ProjectDetails.length}+ Projects across Tamil Nadu</Info>
          <BackButton to="/">← BACK TO PORTFOLIO</BackButton>
        </Container>
      </PageContainer>
    </>
  );
};

export default About;
