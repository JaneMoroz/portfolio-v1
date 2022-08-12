import React from "react"
import Wrapper from "../assets/wrappers/NavigationButton"
import { FaBars } from "react-icons/fa"
import { motion } from "framer-motion"
import { useGlobalContext } from "../context/context"

// Menu animation
const menuButtonVariant = {
  hidden: {
    opacity: 0,
    rotate: "0deg",
  },
  visible: {
    opacity: 1,
    rotate: "180deg",
    transition: {
      delay: 1,
    },
  },
  hover: {
    boxShadow: "0px 0px 8px rgb(245, 201, 194)",
  },
}

const NavigationButton = () => {
  const { toggleMenu } = useGlobalContext()
  return (
    <Wrapper>
      <motion.button
        variants={menuButtonVariant}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="btn menu-btn"
        onClick={() => toggleMenu()}
        aria-label="menu"
      >
        <span>
          <FaBars />
        </span>
      </motion.button>
    </Wrapper>
  )
}

export default NavigationButton
