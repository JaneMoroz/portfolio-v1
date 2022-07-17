import React from "react"
import Wrapper from "../assets/wrappers/About"
import {
  FaWindowClose,
  FaWindowMaximize,
  FaWindowMinimize,
  FaChevronRight,
} from "react-icons/fa"
import { mouse, mouseDarkMode } from "../assets/images/index"
import { motion } from "framer-motion"
import { useGlobalContext } from "../context/context"
import { FormattedMessage } from "react-intl"

// Mouse animation
const mouseVariant = {
  hidden: {
    x: -50,
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

// Program animation
const programVariant = {
  hidden: {
    y: "200",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// Console type thing animation (don't know to call it)
const typeBlockVariant = {
  animate: {
    opacity: [0, 1],
    transition: { repeat: Infinity, repeatType: "reverse", duration: 0.7 },
  },
}

const About = () => {
  const { theme, page } = useGlobalContext()
  const techTags = [
    "javascript",
    "typescript",
    "react",
    "redux",
    "gatsby",
    "mui",
    "styled-components",
    "bootstrap",
    "sass",
    "node.js",
    "express.js",
    "c#",
    ".net",
    "mongoDB",
    "MySQL",
  ]

  return (
    <Wrapper id="about" className="about container">
      {/* mouse */}
      {theme === "light-theme" && (
        <motion.div
          variants={mouseVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background"
        >
          <img src={mouse} alt="mouse" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={mouseVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background"
        >
          <img src={mouseDarkMode} alt="mouse" />
        </motion.div>
      )}
      <h2 className={page === "/ru" ? "no-cursive" : ""}>
        <FormattedMessage id="about-title" defaultMessage="about me" />
      </h2>
      {/* program */}
      <motion.div
        variants={programVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="program"
      >
        {/* program header */}
        <div className="program-header">
          <span>
            <FormattedMessage id="name" defaultMessage="jane" />
            .exe
          </span>
          <div className="program-btns">
            <FaWindowMinimize />
            <FaWindowMaximize />
            <FaWindowClose />
          </div>
        </div>
        {/* program body */}
        <div className="program-body">
          {/* technologies */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <h5>
                <FormattedMessage id="name" defaultMessage="jane" />.
                <span>
                  <FormattedMessage
                    id="technologies"
                    defaultMessage="technologies"
                  />
                </span>
              </h5>
            </div>
            <div className="answer">
              {techTags.map((tag, index) => {
                return (
                  <span key={index} className="tech-tag">
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
          {/* hobbies */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <h5>
                <FormattedMessage id="name" defaultMessage="jane" />.
                <span>
                  <FormattedMessage id="hobbies" defaultMessage="hobbies" />
                </span>
              </h5>
            </div>
            <div className="answer">
              <p>
                <FormattedMessage
                  id="hobbies-full"
                  defaultMessage="hiking, yoga, playing video games and board games"
                />
              </p>
            </div>
          </div>
          {/* dream */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <h5>
                <FormattedMessage id="name" defaultMessage="jane" />.
                <span>
                  <FormattedMessage id="dream" defaultMessage="dream" />
                </span>
              </h5>
            </div>
            <div className="answer">
              <p>
                <FormattedMessage
                  id="dream-full"
                  defaultMessage="i have a
                dream of building something that makes people’s lives easier and
                better"
                />
              </p>
            </div>
          </div>
          {/* last */}
          <div className="program-el">
            <div className="question">
              <FaChevronRight className="icon" />
              <motion.span
                variants={typeBlockVariant}
                animate="animate"
                className="console"
              ></motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  )
}

export default About
