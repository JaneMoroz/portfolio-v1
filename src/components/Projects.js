import React from "react"
import styled from "styled-components"
import project1 from "../assets/images/project-1.jpeg"
import project2 from "../assets/images/project-2.jpeg"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

// From left animation
const fromLeftVariant = {
  hidden: {
    x: "-100",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// From right animation
const fromRightVariant = {
  hidden: {
    x: "100",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// Overlay animation
const overlayVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0.6,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

const Projects = ({ showMoreProjects, toggleMoreProjects }) => {
  return (
    <Wrapper id="projects" className="container">
      <h2>jane.projects</h2>
      {/* project 1 */}
      <motion.div
        variants={fromLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="project project-right"
      >
        <div className="image-box">
          <img src={project1} alt="project 1" />
          <motion.div
            variants={overlayVariant}
            initial="visible"
            whileInView="hidden"
            className="image-overlay"
          ></motion.div>
        </div>
        <div className="text-box">
          <h5>
            <span>featured project</span>
          </h5>
          <h3>lucky paws store</h3>
          <div className="details">
            <p>
              An online store. The project is built with React and it consumes
              <span> Lucky-Paws-Store-REST-API</span>. It’s purpose is not only
              to provide great customer experience but also to allow the store
              owner to manage products, orders, users and reviews.
            </p>
          </div>
          <div className="tech-tags">
            <span>react</span>
            <span>redux</span>
            <span>react router</span>
            <span>styled components</span>
            <span>stripe</span>
          </div>
          <div className="buttons">
            <button className="btn btn-icon">
              <FaGithub />
            </button>
            <button className="btn btn-icon">
              <FaExternalLinkAlt />
            </button>
          </div>
        </div>
      </motion.div>
      {/* project 2 */}
      <motion.div
        variants={fromRightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="project project-left"
      >
        <div className="image-box">
          <img src={project2} alt="project 2" />
          <motion.div
            variants={overlayVariant}
            initial="visible"
            whileInView="hidden"
            className="image-overlay"
          ></motion.div>
        </div>
        <div className="text-box">
          <h5>
            <span>featured project</span>
          </h5>
          <h3>Best Pizza Order App</h3>
          <div className="details">
            <p>
              A pizza order app. The project is built with React and it’s main
              features are the ability to sort and filter menu items,
              pagination, “stripe” menu, the ability to processes payments with
              Stripe using Netlify's Lambda function service.
            </p>
          </div>
          <div className="tech-tags">
            <span>react</span>
            <span>react router</span>
            <span>context api</span>
            <span>netlify</span>
            <span>stripe</span>
          </div>
          <div className="buttons">
            <button className="btn btn-icon">
              <FaGithub />
            </button>
            <button className="btn btn-icon">
              <FaExternalLinkAlt />
            </button>
          </div>
        </div>
      </motion.div>
      {!showMoreProjects && (
        <button
          onClick={() => toggleMoreProjects()}
          className="btn btn-outlined"
        >
          show more
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
  h2 {
    text-align: center;
    margin-top: 6.8rem;
    margin-bottom: 1.6rem;
  }

  .project {
    position: relative;
    padding: 3.2rem 0;
    height: 50rem;
    width: 100%;

    .image-box {
      position: relative;
      width: 80rem;
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

    @media only screen and (max-width: 56.25em) {
      .image-box {
        width: 60rem;
      }
    }

    @media only screen and (max-width: 37.5em) {
      .image-box {
        width: 100%;
      }
    }

    .text-box {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, 50%);
      max-width: 50rem;

      h5 {
        margin-bottom: 0.3rem;
      }

      h3,
      .tech-tags {
        margin-bottom: 1rem;
      }

      p span {
        color: var(--color-dark-pink);
      }

      .tech-tags {
        display: flex;
        column-gap: 1rem;
        font-size: 1.4rem;
      }

      .details {
        padding: 1.6rem 3.2rem;
        margin-bottom: 1rem;
        background: var(--color-background-2);
        color: var(--color-text-main);
        line-height: 1.5;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
      }

      .buttons {
        display: flex;
        column-gap: 1.6rem;
      }
    }

    @media only screen and (max-width: 37.5em) {
      .text-box {
        top: 100%;
        padding: 1.8rem 2.4rem;
        background: var(--color-background-2);
        max-width: 100%;
        width: 100%;
        .details {
          display: none;
        }
        h3,
        .tech-tags {
          color: var(--color-text-main);
        }
      }
    }
  }

  .project-right {
    h5,
    h3,
    buttons {
      text-align: end;
    }

    .tech-tags,
    .buttons {
      justify-content: end;
    }
  }

  .project-left {
    .image-box {
      margin-left: auto;
    }

    .text-box {
      left: 0;
      transform: translate(0, 50%);
    }
  }

  @media only screen and (max-width: 75em) {
    .project {
      padding: 3.2rem 2.4rem;
    }

    .project-right {
      .text-box {
        transform: translate(-2.4rem, 50%);
      }

      @media only screen and (max-width: 37.5em) {
        padding: 2.4rem 0;
        .text-box {
          transform: translate(0, -100%);
        }
      }
    }

    .project-left {
      .text-box {
        transform: translate(2.4rem, 50%);
      }

      @media only screen and (max-width: 37.5em) {
        padding: 2.4rem 0;
        .text-box {
          transform: translate(0, -100%);
        }
      }
    }
  }
`

export default Projects
