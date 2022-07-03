import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import setupNames from "../utils/setupNames"
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

// Overlay animation
const overlayVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0.5,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// Graphql query
const query = graphql`
  {
    allContentfulProject(
      filter: { isFeatured: { eq: false } }
      sort: { fields: contentfulid, order: ASC }
    ) {
      nodes {
        contentfulid
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        name
        additional {
          git
          link
          techtags
        }
        description {
          description
        }
      }
    }
  }
`

const MoreProjects = ({ showMoreProjects, toggleMoreProjects }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = useStaticQuery(query)
  const names = setupNames(projects)
  const [value, setValue] = useState(0)
  const {
    contentfulid: id,
    name,
    description: { description },
    additional: { techtags, git, link },
    image,
  } = projects[value]
  const pathToImage = getImage(image)

  return (
    <Wrapper className="container">
      {/* projects navigation */}
      <AnimatePresence>
        {showMoreProjects && (
          <motion.div
            variants={navVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="projects-nav"
          >
            {names.map((name, index) => {
              return (
                <button
                  key={index}
                  className={index === value ? "btn active-btn" : "btn"}
                  onClick={() => setValue(index)}
                >
                  {name}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
      {/* project */}
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
              <GatsbyImage image={pathToImage} alt={name} />
              <motion.div
                variants={overlayVariant}
                initial="visible"
                whileInView="hidden"
                className="image-overlay"
              ></motion.div>
            </div>
            <div className="text-box">
              <div className="header">
                <h3>{name}</h3>
                <div className="buttons">
                  <a
                    href={git}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-icon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-icon"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <p>{description}</p>
              <div className="tech-tags">
                {techtags.map((techtag, index) => {
                  return <span key={index}>{techtag}</span>
                })}
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
  grid-template-columns: max-content 3fr;
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
      text-transform: capitalize;
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
    height: 75rem;

    .image-box {
      position: relative;
      width: 100%;
      height: 100%;
      max-height: 50rem;
      overflow: hidden;
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
