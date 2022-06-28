import React from "react"
import styled from "styled-components"
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

const Menu = ({ menu, toggleMenu }) => {
  const handleScroll = section => {
    scrollTo(section)
    toggleMenu()
  }

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{
            scale: 0,
            originX: 1,
            originY: 0,
            borderRadius: "100% 0 100% 100%",
          }}
          animate={{ scale: 1, borderRadius: "0% 0 0% 0%" }}
          exit={{ scale: 0, borderRadius: "100% 0 100% 100%" }}
          transition={{ duration: 1 }}
          className={menu ? "menu isOpen" : "menu"}
        >
          <Wrapper className="text-container container">
            {/* menu button */}
            <motion.button
              initial={{ opacity: 0, rotate: "0deg" }}
              animate={{ opacity: 1, rotate: "90deg" }}
              transition={{ delay: 1.5 }}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(245, 201, 194)",
              }}
              className="btn menu-btn"
              onClick={() => toggleMenu()}
            >
              <span>
                <FaBars />
              </span>
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="links"
            >
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
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="btn btn-outlined"
            >
              resume
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="social"
            >
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

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 10% 0;

  .menu-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: var(--color-accent-pink);
    padding: 2.4rem;
    border-radius: 50%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: var(--color-light-pink);
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    row-gap: 3.6rem;
    margin-bottom: 4rem;
  }
  .social {
    display: flex;
    column-gap: 2rem;
    padding-top: 2.4rem;
  }
`

export default Menu
