import React from "react"
import Wrapper from "../assets/wrappers/Menu"
import { useGlobalContext } from "../context/context"
import { AnimatePresence, motion } from "framer-motion"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaLinkedinIn,
} from "react-icons/fa"

// Expanding background animation
const containerVariant = {
  hidden: {
    scale: 0,
    originX: 1,
    originY: 0,
    borderRadius: "100% 0 100% 100%",
  },
  visible: {
    scale: 1,
    borderRadius: "0% 0 0% 0%",
    transition: {
      ease: "easeInOut",
      when: "beforeChildren", // after parent animation finishes, only then starts to animate children
    },
  },
  exit: {
    scale: 0,
    borderRadius: "100% 0 100% 100%",
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  },
}

// Menu button animation
const menuButtonVariant = {
  hidden: { opacity: 0, rotate: "0deg" },
  visible: {
    opacity: 1,
    rotate: "90deg",
    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
    rotate: "0deg",
  },
  hover: {
    boxShadow: "0px 0px 8px rgb(245, 201, 194)",
  },
}

// Menu text animation
const menuVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5 },
  },
  exit: { opacity: 0, x: "100vw" },
}

const Menu = () => {
  const { menu, toggleMenu } = useGlobalContext()
  const handleScroll = section => {
    scrollTo(section)
    toggleMenu()
  }

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={menu ? "menu isOpen" : "menu"}
        >
          <Wrapper className="text-container container">
            {/* menu button */}
            <motion.button
              variants={menuButtonVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              className="btn menu-btn"
              onClick={() => toggleMenu()}
            >
              <span>
                <FaBars />
              </span>
            </motion.button>
            <motion.div variants={menuVariant} className="links">
              <button onClick={() => handleScroll("#home")} className="btn">
                <h2>home</h2>
              </button>
              <button onClick={() => handleScroll("#about")} className="btn">
                <h2>about</h2>
              </button>
              <button onClick={() => handleScroll("#projects")} className="btn">
                <h2>projects</h2>
              </button>
              <button onClick={() => handleScroll("#contact")} className="btn">
                <h2>contact</h2>
              </button>
            </motion.div>
            <motion.button variants={menuVariant} className="btn btn-outlined">
              resume
            </motion.button>
            <motion.div variants={menuVariant} className="social">
              <button className="btn btn-icon">
                <FaEnvelope />
              </button>
              <button className="btn btn-icon">
                <FaGithub />
              </button>
              <button className="btn btn-icon">
                <FaLinkedinIn />
              </button>
              <button className="btn btn-icon">
                <FaTwitter />
              </button>
              <button className="btn btn-icon">
                <FaDiscord />
              </button>
            </motion.div>
          </Wrapper>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu
