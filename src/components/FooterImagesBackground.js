import React from "react"
import Wrapper from "../assets/wrappers/FooterImagesBackground"
import {
  girlFooter,
  girlFooterDarkMode,
  plant,
  tree2,
  tree2DarkMode,
  smallHill,
  smallHillDarkMode,
  bigHill,
  bigHillDarkMode,
} from "../assets/images"
import { motion } from "framer-motion"
import { useGlobalContext } from "../context/context"

const bigHillVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const smallHillVariant = {
  hidden: {
    x: 200,
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

const girlVariant = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

const treeVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

const FooterImagesBackground = () => {
  const { theme } = useGlobalContext()
  return (
    <Wrapper>
      {/* plant */}
      <motion.div
        variants={bigHillVariant}
        initial="hidden"
        whileInView="visible"
        className="background background-1"
      >
        <img src={plant} alt="plant" />
      </motion.div>
      {/* girl */}
      {theme === "light-theme" && (
        <motion.div
          variants={girlVariant}
          initial="hidden"
          whileInView="visible"
          className="background background-2"
        >
          <img src={girlFooter} alt="girl is waving her hand happily" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={girlVariant}
          initial="hidden"
          whileInView="visible"
          className="background background-2"
        >
          <img src={girlFooterDarkMode} alt="girl is waving her hand happily" />
        </motion.div>
      )}
      {/* small hill right */}
      {theme === "light-theme" && (
        <motion.div
          variants={smallHillVariant}
          initial="hidden"
          whileInView="visible"
          className="background background-3"
        >
          <img src={smallHill} alt="small hill" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={smallHillVariant}
          initial="hidden"
          whileInView="visible"
          className="background background-3"
        >
          <img src={smallHillDarkMode} alt="small hill" />
        </motion.div>
      )}
      {/* big hill left */}
      {theme === "light-theme" && (
        <motion.div
          variants={bigHillVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-4"
        >
          <img src={bigHill} alt="big hill" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={bigHillVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="background background-4"
        >
          <img src={bigHillDarkMode} alt="big hill" />
        </motion.div>
      )}
      {/* tree */}
      {theme === "light-theme" && (
        <motion.div
          variants={treeVariant}
          initial="hidden"
          whileInView="visible"
          className="background background-5"
        >
          <img src={tree2} alt="tree" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={treeVariant}
          initial="hidden"
          whileInView="visible"
          className="background background-5"
        >
          <img src={tree2DarkMode} alt="tree" />
        </motion.div>
      )}
    </Wrapper>
  )
}

export default FooterImagesBackground
