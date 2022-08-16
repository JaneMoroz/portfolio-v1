import React from "react"
import Wrapper from "../../assets/wrappers/Menu"
import { useGlobalContext } from "../../context/context"
import { AnimatePresence, motion } from "framer-motion"
import { FaBars } from "react-icons/fa"
import { socialLinks } from "../../assets/data/links"
import { FormattedMessage } from "react-intl"
import {
  containerVariant,
  menuButtonVariant,
  menuVariant,
} from "../../utils/animation"
import NavButton from "./NavButton"

const Menu = () => {
  const { menuIsOpen, toggleMenu, page } = useGlobalContext()

  return (
    <AnimatePresence>
      {menuIsOpen && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={menuIsOpen ? "menu isOpen" : "menu"}
        >
          <Wrapper className="text-container container">
            {/* Start of toggle menu button */}
            <motion.button
              variants={menuButtonVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              className="btn menu-btn"
              aria-label="menu"
              onClick={() => toggleMenu()}
            >
              <span>
                <FaBars />
              </span>
            </motion.button>
            {/* End of toggle menu button */}
            {/* Start of navigation buttons */}
            <motion.div variants={menuVariant} className="links">
              <NavButton section="home" langId="menu-home" defaultMsg="home" />
              <NavButton
                section="about"
                langId="menu-about"
                defaultMsg="about"
              />
              <NavButton
                section="projects"
                langId="menu-projects"
                defaultMsg="projects"
              />
              <NavButton
                section="contact"
                langId="menu-contact"
                defaultMsg="contact"
              />
            </motion.div>
            {/* End of navigation buttons */}
            {/* Start of resume button */}
            <motion.a
              href={
                page === "/ru" || page === "/ru/"
                  ? "/ишунина-евгения-cv.pdf"
                  : "/ishunina-evgeniya-cv.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              variants={menuVariant}
              className="btn btn-outlined"
            >
              <FormattedMessage id="cv-btn" defaultMessage="resume" />
            </motion.a>
            {/* End of resume button */}
            {/* Start of social links */}
            <motion.div variants={menuVariant} className="social">
              {socialLinks.map((socialLink, index) => {
                const { icon, link, label, newTab } = socialLink
                if (newTab) {
                  return (
                    <a
                      key={index}
                      href={link}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-icon"
                    >
                      {icon}
                    </a>
                  )
                }
                return (
                  <a
                    key={index}
                    href={link}
                    aria-label={label}
                    className="btn btn-icon"
                  >
                    {icon}
                  </a>
                )
              })}
            </motion.div>
            {/* End of social links */}
          </Wrapper>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu
