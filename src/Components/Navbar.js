import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import TDL_LOGO from "../Assets/TDL_LOGO.png"; // replace with your logo

const Nav = styled.nav`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 700px;
  z-index: 10;
  padding: 20px 40px;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;

const NavMenu = styled(motion.ul)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(motion.li)`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

// const WorkItem = styled(NavItem)`
//   position: relative;
// `;

const menuVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  initial: { opacity: 1, y: 0 },
  hover: { opacity: 1, y: -4, transition: { duration: 0.2 } },
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #080808;
  &:hover {
    color: #5e4949;
  }
`;

const HoverContent = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #f5f4f6;
  // background-color: rgba(245, 244, 246, 0.5);
  opacity: 0.4;
  text-align: left;
  padding: 70px 30px;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  z-index: 5;
  box-sizing: border-box;
`;

const LogoImage = styled.img`
  position: relative;
  top: 50px;
`;

const FirmName = styled.h1`
  position: absolute;
  top: 50%;
  left: 15%;
  margin: 0 0 24px 0;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: #1a1a1a;
`;

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Nav>
        <NavMenu
          variants={menuVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavItem variants={itemVariants}>
            <StyledLink to="/about" onClick={() => setIsHovered(false)}>
              STUDIO
            </StyledLink>
          </NavItem>
          <NavItem variants={itemVariants}>
            <StyledLink to="/project" onClick={() => setIsHovered(false)}>
              WORKS
            </StyledLink>
          </NavItem>
          <NavItem variants={itemVariants}>
            <StyledLink to="/Service" onClick={() => setIsHovered(false)}>
              SERVICES
            </StyledLink>
          </NavItem>

          <NavItem variants={itemVariants}>
            <StyledLink to="/Process" onClick={() => setIsHovered(false)}>
              PROCESS
            </StyledLink>
          </NavItem>

          <NavItem variants={itemVariants}>
            <StyledLink to="/contact" onClick={() => setIsHovered(false)}>
              CONTACT
            </StyledLink>
          </NavItem>
        </NavMenu>
      </Nav>

      <AnimatePresence>
        {isHovered && (
          <HoverContent
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            <LogoImage src={TDL_LOGO} alt="Firm Logo" width="170" />
            <FirmName>TECTON DESIGN LAB</FirmName>
          </HoverContent>
        )}
      </AnimatePresence>
    </div>
  );
}
