import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

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
    opacity: 0.5,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

// See more button animation
const buttonVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
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

// Graphql query
const query = graphql`
  {
    allContentfulProject(
      filter: { isFeatured: { eq: true } }
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

const Projects = ({ showMoreProjects, toggleMoreProjects }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <Wrapper id="projects" className="container">
      <h2>jane.projects</h2>
      {/* projects */}
      {projects.map(project => {
        const {
          contentfulid: id,
          name,
          description: { description },
          additional: { techtags, git, link },
          image,
        } = project
        const pathToImage = getImage(image)
        return (
          <motion.div
            key={id}
            variants={id % 2 !== 0 ? fromRightVariant : fromLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`project ${
              id % 2 !== 0 ? "project-right" : "project-left"
            }`}
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
              <h5>
                <span>featured project</span>
              </h5>
              <h3>{name}</h3>
              <div className="details">
                <p>{description}</p>
              </div>
              <div className="tech-tags">
                {techtags.map((techtag, index) => {
                  return <span key={index}>{techtag}</span>
                })}
              </div>
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
          </motion.div>
        )
      })}
      {/* more projects button */}
      <AnimatePresence>
        {!showMoreProjects && (
          <motion.button
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => toggleMoreProjects()}
            className="btn btn-outlined"
          >
            show more
          </motion.button>
        )}
      </AnimatePresence>
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
    margin-top: 5.6rem;
    margin-bottom: 1.6rem;
  }

  .project {
    position: relative;
    padding: 3.2rem 0;
    height: 100%;
    width: 100%;

    .image-box {
      position: relative;
      width: 85rem;
      height: 100%;
      max-height: 60rem;
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
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, 50%);
      max-width: 55rem;

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
        padding: 1.8rem 3.6rem;
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
      .image-box {
        width: 65rem;
        max-height: 45rem;
      }
    }

    .project-right {
      .text-box {
        transform: translate(-2.4rem, 50%);
      }
    }

    .project-left {
      .text-box {
        transform: translate(2.4rem, 50%);
      }
    }
  }

  @media only screen and (max-width: 56.25em) {
    .project {
      padding: 0;
      .image-box {
        width: 100%;
        max-height: 90%;
        margin-bottom: 2.8rem;
      }

      .text-box {
        position: relative;
        max-width: 100%;
        margin-bottom: 3.6rem;
      }
    }

    .project-right {
      .text-box {
        transform: translate(0, 0);

        h3,
        h5,
        .tech-tags,
        .buttons {
          padding: 0 2.4rem;
        }
      }
    }

    .project-left {
      .text-box {
        transform: translate(0, 0);

        h3,
        h5,
        .tech-tags,
        .buttons {
          padding: 0 2.4rem;
        }
      }
    }
  }

  @media only screen and (max-width: 37.5em) {
    .project {
      .image-box {
        margin-bottom: 0;
      }

      .text-box {
        padding: 1.2rem 2.4rem;
        background: var(--color-background-2);
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
`

export default Projects
