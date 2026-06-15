import React from "react";
import styled from "styled-components";
import { FirmName } from "../Styles/Style";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

const FooterContainer = styled.footer`
  // background-color: #fafaf8;
  // color: #0a0a0a;
  // padding: 60px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // display: grid;
  // grid-template-columns: 1.4fr 1fr 1fr 1fr;
  // gap: 2.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--hair-dark);
`;

// .footer-grid a, .footer-grid p{
//     display:block;
//     font-size:0.92rem;
//     color:#B9B4AC;
//     margin:0 0 0.55rem;
//     transition:color .2s;
//   }

const Section = styled.div`
  flex: 1 1 200px;
  margin: 20px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Text = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
`;

const Link = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px 0;
  color: #070707;
  text-decoration: none;
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 18px;
  }
`;

// const NavItem = styled(motion.li)`
//   display: flex;
//   gap: 20px;
//   font-size: 20px;
//   font-weight: 500;
//   cursor: pointer;
//   list-style: none;
//   text-decoration: none;
// `;

// const NavList = styled(motion.ul)`
//   display: flex; /* lays items in a row */
//   gap: 20px; /* space between items */
//   list-style: none; /* removes default bullets */
//   padding: 0; /* removes default padding */
//   margin: 0; /* removes default margin */
// `;

// const NavItem = styled(motion.li)`
//   font-size: 20px;
//   font-weight: 500;
//   cursor: pointer;
//   text-decoration: none;
// `;

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <Section>
        <FirmName>TDL</FirmName>
      </Section>
      <Section>
        <Title>Navigate</Title>
        <Link onClick={() => navigate("/About")}>Studio</Link>
        <Link onClick={() => navigate("/project")}>Work</Link>
        <Link onClick={() => navigate("/Service")}>Services</Link>
        <Link onClick={() => navigate("/Process")}>Process</Link>
      </Section>
      <Section>
        <Title>Services</Title>
        <Link onClick={() => navigate("/Project")}>Design</Link>
        <Link onClick={() => navigate("/Project")}>Build</Link>
        <Link onClick={() => navigate("/Contact")}>Renovate</Link>
        <Link onClick={() => navigate("/Contact")}>Consultation</Link>
      </Section>

      <Section>
        <Title>Office</Title>
        <Text>No.35,Ramakapettai</Text>
        <Text>Thirupathur DT, 635 601</Text>
      </Section>

      <Section>
        <Title>Project Enqueries:</Title>
        <Text href="tel:+919791403366">+91 97914 03366</Text>
        <Text href="tel:+919443209854">+91 94432 09854</Text>
        <Text>contact.tectondl@gmail.com</Text>
      </Section>

      <Section>
        <Title>Social</Title>
        <IconLink href="#" target="_blank">
          <FaLinkedin /> LinkedIn
        </IconLink>
        <IconLink
          href="https://www.instagram.com/tecton_dl?igsh=MWJzNm9pMnFvdjA2aA%3D%3D&utm_source=qr"
          target="_blank"
        >
          <FaInstagram /> Instagram
        </IconLink>
      </Section>
    </FooterContainer>
  );
}
