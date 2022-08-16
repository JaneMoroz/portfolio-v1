import React from "react"
import { motion } from "framer-motion"
import { FormattedMessage } from "react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import {
  slideInFromLeftVariant,
  slideInFromRightVariant,
  overlayVariant,
} from "../../utils/animation"

const Project = ({ project }) => {
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
      variants={id % 2 !== 0 ? slideInFromRightVariant : slideInFromLeftVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`project ${id % 2 !== 0 ? "project-right" : "project-left"}`}
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
            <FormattedMessage id="featured" defaultMessage="featured project" />
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
    </motion.div>
  )
}

export default Project
