import React from "react"
import styled from "styled-components"
import {
  girlFooter,
  girlFooterDarkMode,
  plant,
  tree2,
  tree2DarkMode,
  smallHill,
  smallHillDarkMode,
  bigHill,
  bigHillDarkMode,
} from "../assets/images/index"
import { motion } from "framer-motion"

const bigHillVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const smallHillVariant = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

const girlVariant = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

const treeVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

const FooterImagesBackground = ({ theme }) => {
  return (
    <Wrapper>
      {/* plant */}
      <motion.div
        variants={bigHillVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="background background-1"
      >
        <img src={plant} alt="plant" />
      </motion.div>
      {/* girl */}
      {theme === "light-theme" && (
        <motion.div
          variants={girlVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-2"
        >
          <img src={girlFooter} alt="girl is waving her hand happily" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={girlVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-2"
        >
          <img src={girlFooterDarkMode} alt="girl is waving her hand happily" />
        </motion.div>
      )}
      {/* small hill right */}
      {theme === "light-theme" && (
        <motion.div
          variants={smallHillVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-3"
        >
          <img src={smallHill} alt="small hill" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={smallHillVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-3"
        >
          <img src={smallHillDarkMode} alt="small hill" />
        </motion.div>
      )}
      {/* big hill left */}
      {theme === "light-theme" && (
        <motion.div
          variants={bigHillVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-4"
        >
          <img src={bigHill} alt="big hill" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={bigHillVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-4"
        >
          <img src={bigHillDarkMode} alt="big hill" />
        </motion.div>
      )}
      {/* tree */}
      {theme === "light-theme" && (
        <motion.div
          variants={treeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-5"
        >
          <img src={tree2} alt="tree" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={treeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-5"
        >
          <img src={tree2DarkMode} alt="tree" />
        </motion.div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  .background {
    position: absolute;
  }

  .background-1 {
    top: 70%;
    left: 30%;
    z-index: 8;
  }

  .background-2 {
    top: 30%;
    left: 10%;
    z-index: 7;
  }

  .background-3 {
    top: 55%;
    left: 50%;
    z-index: 6;
  }

  .background-4 {
    top: 60%;
    left: -5%;
    z-index: 5;
  }

  .background-5 {
    top: 20%;
    left: 70%;
    z-index: 4;
  }

  @media only screen and (max-width: 56.25em) {
    .background-2 {
      top: 30%;
      left: 0;
    }
    .background-5 {
      display: none;
    }
  }

  @media only screen and (max-width: 37.5em) {
    .background-2 {
      display: none;
    }
  }
`

export default FooterImagesBackground
