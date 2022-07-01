import React from "react"
import styled from "styled-components"
import project3 from "../assets/images/project-3.jpeg"
import disk from "../assets/images/illustrations/floppy-disk.svg"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

// Navigation animation
const navVariant = {
  hidden: {
    opacity: 0,
    x: "-100vh",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Projects animation
const projectsVariant = {
  hidden: {
    opacity: 0,
    x: "100vh",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// See less button animation
const buttonVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const MoreProjects = ({ showMoreProjects, toggleMoreProjects }) => {
  return (
    <Wrapper className="container">
      <AnimatePresence>
        {showMoreProjects && (
          <motion.div
            variants={navVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="projects-nav"
          >
            <button className="btn">eTickets App</button>
            <button className="btn">Skazka</button>
            <button className="btn">Sealife</button>
            <button className="btn">SanaFood</button>
            <button className="btn">Dog's Power App</button>
            <button className="btn">Portfolio v1</button>
            <button className="btn">eTickets App</button>
            <button className="btn">Skazka</button>
            <button className="btn">Sealife</button>
            <button className="btn">SanaFood</button>
            <button className="btn">Dog's Power App</button>
            <button className="btn">Portfolio v1</button>
            <button className="btn">eTickets App</button>
            <button className="btn">Skazka</button>
            <button className="btn">Sealife</button>
            <button className="btn">SanaFood</button>
            <button className="btn">Dog's Power App</button>
            <button className="btn">Portfolio v1</button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMoreProjects && (
          <motion.div
            variants={projectsVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="project"
          >
            <div className="image-box">
              <img src={project3} alt="project 3" />
              <div className="image-overlay"></div>
            </div>
            <div className="text-box">
              <div className="header">
                <h3>eTickets App</h3>
                <div className="buttons">
                  <button className="btn btn-icon">
                    <FaGithub />
                  </button>
                  <button className="btn btn-icon">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
              <p>
                An app for buying movie tickets with authentication and admin
                functionalities.
              </p>
              <div className="tech-tags">
                <span>react</span>
                <span>redux</span>
                <span>react router</span>
                <span>styled components</span>
                <span>stripe</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMoreProjects && (
          <motion.button
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => toggleMoreProjects()}
            className="btn btn-outlined"
          >
            show less
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMoreProjects && (
          <motion.div
            variants={navVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="background"
          >
            <img src={disk} alt="floppy disk" />
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  column-gap: 3.2rem;
  margin-top: 2.4rem !important;
  margin-bottom: 5.6rem;

  .background {
    position: absolute;
    top: 100%;
    left: 0;
    transform: translate(0, -50%);
    z-index: -1;
  }

  @media only screen and (max-width: 56.25em) {
    .background {
      display: none;
    }
  }

  .projects-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    margin-left: 1.6rem;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    max-height: 50rem;

    ::-webkit-scrollbar {
      height: 2px;
      width: 2px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-background-2);
    }

    .btn {
      font-size: 2rem;
      font-weight: 300;
      line-height: 1.5;
      width: 100%;
      white-space: nowrap;
      text-align: start;
      color: var(--color-text-secondary);
      padding: 0.8rem 1.6rem;
      transition: all 0.3s;
    }

    .btn:hover,
    .btn.active-btn {
      color: var(--color-text-main);
      background-color: var(--color-background-2);
    }
  }

  .projects-nav::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 5px;
    background: var(--color-background-2);
  }

  .project {
    position: relative;
    padding: 3.2rem 0;

    .image-box {
      position: relative;
      width: 100%;
      height: 100%;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--color-accent-pink-transparent);
      }
    }

    .text-box {
      width: 100%;
      padding: 1.6rem 3.2rem;
      background: var(--color-background-2);
      color: var(--color-text-main);
      line-height: 1.5;

      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.6rem;
      }

      .buttons {
        display: flex;
        column-gap: 1.6rem;
      }

      p {
        padding-bottom: 1.6rem;
      }

      .tech-tags {
        display: flex;
        column-gap: 1rem;
        justify-content: end;
        white-space: nowrap;
        flex-wrap: wrap;
      }
    }
  }

  .btn {
    grid-column: 1/-1;
    justify-self: center;
  }

  @media only screen and (max-width: 75em) {
    .project {
      margin: 2.4rem;
    }
  }

  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    max-height: 100%;

    .projects-nav {
      flex-direction: row;
      overflow-x: auto;
      width: 100%;
      scroll-snap-type: x mandatory;
      padding: 1.6rem 2.4rem;
    }

    .projects-nav::before {
      display: none;
    }

    .project {
      margin: 0;
    }
  }
`

export default MoreProjects
