import React, { useState, useEffect } from "react"
import Wrapper from "../assets/wrappers/MoreProjects"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import setupNames from "../utils/setupNames"
import disk from "../assets/images/illustrations/floppy-disk.svg"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { useGlobalContext } from "../context/context"
import { FormattedMessage } from "react-intl"

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
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
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

// Image animation
const imageVariant = {
  hidden: {
    x: "200px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.6,
      duration: 0.5,
    },
  },
  exit: {
    x: "200px",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
}

// Text animation
const textVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
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

const MoreProjects = () => {
  const {
    allContentfulProject: { nodes: projectsData },
  } = useStaticQuery(query)
  const { showMoreProjects, toggleMoreProjects, page } = useGlobalContext()
  const [projects, setProjects] = useState(
    projectsData.filter(project => project.node_locale === "en-US")
  )
  const [value, setValue] = useState(0)
  const names = setupNames(
    projectsData.filter(project => project.node_locale === "en-US")
  )

  let {
    name,
    description: { description },
    additional: { techtags, git, link },
    image,
  } = projects[value]
  let pathToImage = getImage(image)

  // Localization
  useEffect(() => {
    let tempProjects = []
    if (page === "/ru") {
      tempProjects = projectsData.filter(
        project => project.node_locale === "ru"
      )
      setProjects(tempProjects)
    } else {
      tempProjects = projectsData.filter(
        project => project.node_locale === "en-US"
      )
      setProjects(tempProjects)
    }
  }, [page])

  return (
    <Wrapper id="more-projects" className="container">
      {/* projects navigation */}
      <AnimatePresence initial={false}>
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
      <AnimatePresence initial={false}>
        {showMoreProjects && (
          <motion.div
            variants={projectsVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="project"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={value}
                variants={imageVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="image-box"
              >
                <GatsbyImage class="img" image={pathToImage} alt={name} />

                <motion.div
                  variants={overlayVariant}
                  initial="visible"
                  whileInView="hidden"
                  className="image-overlay"
                ></motion.div>
              </motion.div>
            </AnimatePresence>
            <motion.div
              key={value}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-box"
            >
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
            </motion.div>
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
            <FormattedMessage id="show-less-btn" defaultMessage="show less" />
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

export default MoreProjects
