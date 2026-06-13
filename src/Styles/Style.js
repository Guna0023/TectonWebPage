import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: lightyellow;
  padding: 7rem;
  display: flex;
  align-items: flex-start;
`;

export const Container = styled(motion.div)`
  max-width: 100%;
  width: 100%;
  color: #1a1a1a;
`;

export const FirmName = styled.h1`
  margin: 0 0 24px 0;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: #1a1a1a;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #dcd7cf;
  margin: 0 0 48px 0;
`;

export const Breadcrumb = styled.p`
  margin: 0 0 40px 0;
  font-size: 0.95rem;
  color: #666;
  letter-spacing: 0.05em;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 48px 0;
  font-size: 3.5rem;
  letter-spacing: -1px;
  color: #1a1a1a;
  font-family: Helvetica;
`;

export const Content = styled.p`
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

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const Info = styled.p`
  font-size: 2rem;
  margin: 10px 0;
  color: #555;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  padding: 20px 30px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2%;
  padding: 20px 30px;
  border-radius: 12px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Styled Link to remove default anchor tag underlines
export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 350px; /* Adjust aspect ratio for your architecture previews */
  background-color: #f3eded;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 40px;
  text-decoration: none;
  color: #666;
  font-size: 0.9rem;
  &:hover {
    color: #000;
  }
`;

export const ContactLink = styled.a`
  color: #666666;
  text-decoration: none;
  border-bottom: 1px solid #bcbcbc;
  display: inline-block;
  padding-bottom: 2px;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: #1a1a1a;
    border-color: #1a1a1a;
  }
`;
