import React from "react";
import styled from "styled-components";
import {
  PageContainer,
  Container,
  FirmName,
  Divider,
  Breadcrumb,
  SectionTitle,
  BackButton,
} from "../Styles/Style";

const ContactBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const BrandTitle = styled.h1`
//   font-size: 3.5rem;
//   letter-spacing: -1px;
//   margin-bottom: 1.5rem;
//   font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

const ContactSection = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem 0;
  border-top: 1px solid #dcd7cf;

  &:last-child {
    border-bottom: 1px solid #dcd7cf;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
  }
`;

const ContactLabel = styled.div`
  h2 {
    font-size: 2.25rem;
    font-weight: 400;
    color: #1a1a1a;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

const ContactDetails = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #666666;
`;

const IndigenousLand = styled.p`
  color: #1b1b1b;
  margin-bottom: 0.25rem;
`;

const ContactLink = styled.a`
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

const MapLink = styled(ContactLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  margin-top: 2.5rem;
  padding-bottom: 0.75rem;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 1px solid #1a1a1a;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  transition: transform 0.2s ease;
`;

const ContactFormWrapper = styled.section`
  background-color: #f5f4f6;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid #5f5e5e;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fafafa;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a1a1a;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fafafa;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #1a1a1a;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
  }
`;

const SubmitButton = styled.button`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: flex-start;

  &:hover {
    background-color: #333333;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export default function Contact() {
  // eslint-disable-next-line no-undef
  const currentPath = globalThis.location?.pathname;
  return (
    <PageContainer>
      <Container>
        <FirmName>TECTON DESIGN LAB</FirmName>
        <Divider />
        <Breadcrumb>{`Home ${currentPath}`}</Breadcrumb>
        <SectionTitle>Contact us</SectionTitle>

        <ContactBody>
          <ContactInfo>
            {/* <BrandTitle>TECTON DESIGN LAB</BrandTitle> */}
            <ContactSection>
              <ContactRow>
                <ContactLabel>
                  <h2>Office</h2>
                </ContactLabel>
                <ContactDetails>
                  <IndigenousLand>TECTON DESIGN LAB</IndigenousLand>
                  <p>No.35,</p>
                  <p>Ramakapettai</p>
                  <p>Thirupathur DT, 635 601</p>

                  <MapLink href="#">
                    <span>Google Maps</span>
                    <Arrow>→</Arrow>
                  </MapLink>
                </ContactDetails>
              </ContactRow>

              <ContactRow>
                <ContactLabel>
                  <h2>Phone</h2>
                </ContactLabel>
                <ContactDetails>
                  <p>
                    <ContactLink href="tel:+919443209854">
                      +91 94432 09854
                    </ContactLink>
                  </p>
                  <p>
                    <ContactLink href="tel:+919791403366">
                      +91 97914 03366
                    </ContactLink>
                  </p>
                </ContactDetails>
              </ContactRow>

              <ContactRow>
                <ContactLabel>
                  <h2>Email</h2>
                </ContactLabel>
                <ContactDetails>
                  <p>
                    <ContactLink href="mailto:contact.tectondl@gmail.com">
                      contact.tectondl@gmail.com
                    </ContactLink>
                  </p>
                </ContactDetails>
              </ContactRow>
            </ContactSection>
          </ContactInfo>

          <ContactFormWrapper>
            <ContactForm action="#" method="POST">
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Name...."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter Email...."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Your Message</Label>
                <FormTextarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell us about your thoughts..."
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactFormWrapper>
        </ContactBody>
        <BackButton to="/">← BACK TO PORTFOLIO</BackButton>
      </Container>
    </PageContainer>
  );
}
