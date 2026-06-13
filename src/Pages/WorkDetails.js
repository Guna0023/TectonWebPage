import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectDetails } from "../Components/ProjectDetails";
import {
  PageContainer,
  Container,
  FirmName,
  Divider,
  Breadcrumb,
  GridSubContainer,
} from "../Styles/Style";

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  background-color: #f6f3eb; /* Warm off-white background from image */
  min-height: 100vh;
  color: #333333;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 60px 40px;
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 40px;
  text-decoration: none;
  color: #666;
  font-size: 0.9rem;
  &:hover {
    color: #000;
  }
`;

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Asymmetric split */
  gap: 80px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr; /* Stack vertically on mobile */
    gap: 40px;
  }
`;

// Left Column - Metadata Sidebar
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  padding: 16px 0;
  border-bottom: 1px solid #dcd8cf; /* Thin architectural divider lines */
  font-size: 0.95rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const MetaLabel = styled.div`
  font-weight: 500;
  color: #555555;
`;

const MetaValue = styled.div`
  color: #888888; /* Slightly muted for values */
`;

// Right Column - Content Main Body
const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainHeading = styled.h1`
  font-family:
    Georgia, "Times New Roman", serif; /* Elegant Editorial Serif font */
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 40px 0;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 24px;
  }
`;

const DescriptionParagraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444444;
  margin: 0 0 28px 0;
  max-width: 750px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// --- COMPONENT LOGIC ---

const WorkDetails = () => {
  const { projectId } = useParams();

  // Find project based on React Router path param
  const project = ProjectDetails.find((p) => p.id === projectId);

  if (!project) {
    return (
      <PageWrapper>
        <h2>Project not found</h2>
        <BackButton to="/">← Back to Projects</BackButton>
      </PageWrapper>
    );
  }

  const {
    client,
    location,
    traditionalPlace,
    dates,
    role,
    scope,
    paragraphs,
    subImages,
  } = project.details;

  return (
    <>
      <PageContainer>
        <Container>
          <FirmName>TECTON DESIGN LAB</FirmName>
          <Divider />
          <Breadcrumb>{`Home ${window.location.pathname}`}</Breadcrumb>
          <BackButton to="/">← BACK TO PORTFOLIO</BackButton>
          <img
            src={project.mainImage}
            alt={`${project.title}`}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "40px" }}
          />

          <LayoutContainer>
            {/* Left Hand Sidebar Metadata */}
            <Sidebar>
              <MetaRow>
                <MetaLabel>Client</MetaLabel>
                <MetaValue>{client}</MetaValue>
              </MetaRow>

              <MetaRow>
                <MetaLabel>Location</MetaLabel>
                <MetaValue>{location}</MetaValue>
              </MetaRow>

              <MetaRow>
                <MetaLabel>
                  Traditional Place Name/ Indigenous Country
                </MetaLabel>
                <MetaValue>{traditionalPlace}</MetaValue>
              </MetaRow>

              <MetaRow>
                <MetaLabel>Dates</MetaLabel>
                <MetaValue>{dates}</MetaValue>
              </MetaRow>

              <MetaRow>
                <MetaLabel>Role</MetaLabel>
                <MetaValue>{role}</MetaValue>
              </MetaRow>

              <MetaRow>
                <MetaLabel>Scope</MetaLabel>
                <MetaValue>{scope}</MetaValue>
              </MetaRow>
            </Sidebar>

            {/* Right Hand Narrative Content */}
            <ContentBody>
              <MainHeading>{project.title}</MainHeading>

              {paragraphs.map((text, index) => (
                <DescriptionParagraph key={index}>{text}</DescriptionParagraph>
              ))}
            </ContentBody>
          </LayoutContainer>
          {subImages && subImages.length > 0 && (
            <GridSubContainer>
              {subImages.map((image, index) => (
                <div key={index}>
                  <img
                    style={{ width: "100%", borderRadius: "8px" }}
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                  />
                </div>
              ))}
            </GridSubContainer>
          )}
        </Container>
      </PageContainer>
    </>
  );
};

export default WorkDetails;
