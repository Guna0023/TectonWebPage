import React from "react";
import { ProjectDetails } from "./ProjectDetails";
import {
  Container,
  FirmName,
  Divider,
  Breadcrumb,
  SectionTitle,
  GridContainer,
  StyledLink,
  ImageContainer,
  MainImage,
  ProjectTitle,
  ProjectCard,
  BackButton,
  PageContainer,
} from "../Styles/Style";

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 70px;
//   padding: 20px 30px;
//   width: 100%;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// // Styled Link to remove default anchor tag underlines
// const StyledLink = styled(Link)`
//   text-decoration: none;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//   transition:
//     transform 0.3s ease,
//     box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.02);
//     box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
//   }
// `;

// const ImageContainer = styled.div`
//   width: 100%;
//   height: 350px; /* Adjust aspect ratio for your architecture previews */
//   background-color: #f48a8a;
// `;

// const MainImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const LandingPage = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <FirmName>TECTON DESIGN LAB</FirmName>
          <Divider />
          <Breadcrumb>{`Home ${window.location.pathname}`}</Breadcrumb>
          <SectionTitle>Featured Projects</SectionTitle>
          <GridContainer>
            {ProjectDetails.filter(
              (section) => section.MainSection === true,
            ).map((project) => (
              <ProjectCard key={project.id}>
                <StyledLink to={`/works/${project.id}`}>
                  <ImageContainer>
                    <MainImage src={project.mainImage} alt={project.title} />
                  </ImageContainer>
                </StyledLink>
                <ProjectTitle>{project.id}</ProjectTitle>
              </ProjectCard>
            ))}
            <BackButton to="/project">View All Projects</BackButton>
          </GridContainer>
        </Container>
      </PageContainer>
    </>
  );
};

export default LandingPage;
