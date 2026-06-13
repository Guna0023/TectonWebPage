import React from "react";
import styled from "styled-components";
import { FirmName, ContactLink } from "../Styles/Style";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #fafaf8;
  color: #0a0a0a;
  padding: 60px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
  font-size: 0.95rem;
`;

const Link = styled.a`
  display: block;
  margin: 5px 0;
  color: #0c0c0c;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SubscribeBox = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  background: #2c2f23;
  border-radius: 4px;
  overflow: hidden;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  color: #f5f3e6;
  font-size: 0.95rem;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  background: #f5f3e6;
  color: #3a3f2d;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #ddd;
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px 0;
  color: #070707;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 18px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Section>
        <FirmName>TDL</FirmName>
      </Section>

      <Section>
        <Title>Office</Title>
        <p>TECTON DESIGN LAB,</p>
        <p>No.35,</p>
        <p>Ramakapettai</p>
        <p>Thirupathur DT, 635 601</p>
      </Section>

      <Section>
        <Title>Project Enqueries:</Title>
        <Text href="tel:+919791403366">+91 97914 03366</Text>
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

      {/* <Section>
        <Title>Subscribe</Title>
        <Text>Our strategy, thinking and insights. Shared with you.</Text>
        <SubscribeBox>
          <Input type="email" placeholder="Enter your email" />
          <Button>→</Button>
        </SubscribeBox>
      </Section> */}
    </FooterContainer>
  );
}
