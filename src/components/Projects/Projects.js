import React, { useEffect, useState } from "react"
import Wrapper from "../../assets/wrappers/Projects"
import { graphql, useStaticQuery } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import { useGlobalContext } from "../../context/context"
import { FormattedMessage } from "react-intl"
import { buttonVariant } from "../../utils/animation"
import Project from "./Project"

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
        return <Project key={project.contentfulid} project={project} />
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
