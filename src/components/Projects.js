import React, { useEffect, useState } from "react"
import Wrapper from "../assets/wrappers/Projects"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { useGlobalContext } from "../context/context"
import { FormattedMessage } from "react-intl"

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
        node_locale
      }
    }
  }
`

const Projects = () => {
  const { showMoreProjects, toggleMoreProjects, page } = useGlobalContext()
  const [projects, setProjects] = useState([])
  const {
    allContentfulProject: { nodes: projectsData },
  } = useStaticQuery(query)

  // Localization
  useEffect(() => {
    if (page === "/ru" || page === "/ru/") {
      setProjects(projectsData.filter(project => project.node_locale === "ru"))
    } else {
      setProjects(
        projectsData.filter(project => project.node_locale === "en-US")
      )
    }
  }, [page])

  return (
    <Wrapper id="projects" className="container">
      <h2 className={page === "/ru" || page === "/ru/" ? "no-cursive" : ""}>
        <FormattedMessage id="projects-title" defaultMessage="projects" />
      </h2>
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
                <span>
                  <FormattedMessage
                    id="featured"
                    defaultMessage="featured project"
                  />
                </span>
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
            <FormattedMessage id="show-more-btn" defaultMessage="show more" />
          </motion.button>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Projects
