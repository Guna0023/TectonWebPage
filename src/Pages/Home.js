import React, { useState } from "react";
import { motion } from "framer-motion";
import TDL_LOGO from "../Assets/TDL_LOGO.png";
import styled from "styled-components";

const IntroOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 18, 18, 0.55);
  backdrop-filter: blur(10px);
  z-index: 1200;
`;

const IntroLogo = styled(motion.img)`
  width: 160px;
`;

export default function LogoAnimation() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && (
        <IntroOverlay
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IntroLogo
            src={TDL_LOGO}
            alt="TDL Logo"
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={
              // logoMoved
              //   ? { x: "-42vw", y: "-42vh", scale: 0.28 }
              { x: 0, y: 0, scale: 1 }
            }
            transition={{ duration: 1.1, ease: "easeInOut" }}
            onAnimationComplete={() => setIntroDone(true)}
          />
        </IntroOverlay>
      )}
    </>
  );
}
