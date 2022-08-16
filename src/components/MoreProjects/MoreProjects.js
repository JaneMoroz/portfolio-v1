import React, { useState, useEffect } from "react"
import Wrapper from "../../assets/wrappers/MoreProjects"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import setupNames from "../../utils/setupNames"
import disk from "../../assets/images/illustrations/floppy-disk.svg"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { useGlobalContext } from "../../context/context"
import { FormattedMessage } from "react-intl"
import {
  navVariant,
  projectsVariant,
  buttonVariant,
  imageVariant,
  textVariant,
  overlayVariant2,
} from "../../utils/animation"

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
    if (page === "/ru" || page === "/ru/") {
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
      {/* Start of projects navigation */}
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
      {/* End of projects navigation */}
      {/* Start of projects */}
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
                  variants={overlayVariant2}
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
                    aria-label="Github"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-icon"
                    aria-label="Project's website"
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
      {/* End of projects */}
      {/* Start of show more/less button */}
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
      {/* End of show more/less button */}
      {/* Start of image */}
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
      {/* End of image */}
    </Wrapper>
  )
}

export default MoreProjects
