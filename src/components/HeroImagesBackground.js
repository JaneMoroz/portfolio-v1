import React from "react"
import Wrapper from "../assets/wrappers/HeroImagesBackground"
import {
  smallHill,
  smallHillDarkMode,
  girl,
  girlDarkMode,
  bigHill,
  bigHillDarkMode,
  tree,
  treeDarkMode,
  bigCloud,
  bigCloudDarkMode,
  sun,
  moon,
  smallCloud,
  smallCloudDarkMode,
} from "../assets/images"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { useGlobalContext } from "../context/context"

// From bottom animation
const fromBottomVariant = {
  hiddenHill: {
    y: 300,
  },
  hiddenTree: {
    y: 100,
    opacity: 0,
  },
  visibleFirst: {
    y: 0,
    transition: { delay: 0.5 },
  },
  visibleSecond: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.7 },
  },
  visibleThird: {
    y: 0,
    transition: { delay: 1 },
  },
}

// From right animation
const fromRightVariant = {
  hidden: {
    x: "50vw",
  },
  visible: {
    x: 0,
    transition: { delay: 1 },
  },
}

// Expnding animation
const expandingVariant = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
  },
}

// Big cloud animation
const bigCloudVariant = {
  animate: {
    x: [0, -50],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 10,
      type: "tween",
    },
  },
}

// Small cloud animation
const smallCloudVariant = {
  animate: {
    x: [0, -40],
    transition: {
      delay: 1,
      repeat: Infinity,
      repeatType: "reverse",
      duration: 10,
      type: "tween",
    },
  },
}

const HeroImagesBackground = () => {
  const { theme } = useGlobalContext()
  // Parallax
  const { scrollYProgress } = useViewportScroll()
  const yBackground1 = useTransform(scrollYProgress, [0, 1], [0, 100 * -5])
  const yBackground2 = useTransform(scrollYProgress, [0, 1], [0, 100 * -2])
  const yBackground3 = useTransform(scrollYProgress, [0, 1], [0, 100 * 1])
  const yBackground4 = useTransform(scrollYProgress, [0, 1], [0, 100 * 3])

  return (
    <Wrapper>
      {/* small hill with plant */}
      {theme === "light-theme" && (
        <motion.div
          variants={fromBottomVariant}
          initial="hiddenHill"
          animate="visibleThird"
          className="background background-1"
          style={{ y: yBackground1 }}
        >
          <img src={smallHill} alt="small hill with plant" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={fromBottomVariant}
          initial="hiddenHill"
          animate="visibleThird"
          className="background background-1"
          style={{ y: yBackground1 }}
        >
          <img src={smallHillDarkMode} alt="small hill with plant" />
        </motion.div>
      )}
      {/* girl */}
      {theme === "light-theme" && (
        <motion.div
          variants={fromRightVariant}
          initial="hidden"
          animate="visible"
          className="background background-2"
          style={{ y: yBackground2 }}
        >
          <img
            src={girl}
            alt="girl is laying on the hill and typing important stuff"
          />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={fromRightVariant}
          initial="hidden"
          animate="visible"
          className="background background-2-dark-mode"
          style={{ y: yBackground2 }}
        >
          <img
            src={girlDarkMode}
            alt="girl is sitting on the hill and enjoying night breeze "
          />
        </motion.div>
      )}
      {/* big hill */}
      {theme === "light-theme" && (
        <motion.div
          variants={fromBottomVariant}
          initial="hiddenHill"
          animate="visibleFirst"
          className="background background-3"
          style={{ y: yBackground3 }}
        >
          <img src={bigHill} alt="big hill" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={fromBottomVariant}
          initial="hiddenHill"
          animate="visibleFirst"
          className="background background-3"
          style={{ y: yBackground3 }}
        >
          <img src={bigHillDarkMode} alt="big hill" />
        </motion.div>
      )}
      {/* tree */}
      {theme === "light-theme" && (
        <motion.div
          variants={fromBottomVariant}
          initial="hiddenTree"
          animate="visibleSecond"
          className="background background-4"
          style={{ y: yBackground4 }}
        >
          <img src={tree} alt="tree" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={fromBottomVariant}
          initial="hiddenTree"
          animate="visibleSecond"
          className="background background-4"
          style={{ y: yBackground4 }}
        >
          <img src={treeDarkMode} alt="tree" />
        </motion.div>
      )}
      {/* big cloud */}
      {theme === "light-theme" && (
        <motion.div
          variants={bigCloudVariant}
          animate="animate"
          className="background background-5"
        >
          <img src={bigCloud} alt="big cloud" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={bigCloudVariant}
          animate="animate"
          className="background background-5"
        >
          <img src={bigCloudDarkMode} alt="big cloud" />
        </motion.div>
      )}
      {/* sun/moon */}
      {theme === "light-theme" && (
        <motion.div
          variants={expandingVariant}
          initial="hidden"
          animate="visible"
          className="background background-6"
        >
          <img src={sun} alt="sun" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={expandingVariant}
          initial="hidden"
          animate="visible"
          className="background background-6"
        >
          <img src={moon} alt="moon" />
        </motion.div>
      )}
      {/* small cloud */}
      {theme === "light-theme" && (
        <motion.div
          variants={smallCloudVariant}
          animate="animate"
          className="background background-7"
        >
          <img src={smallCloud} alt="small cloud" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={smallCloudVariant}
          animate="animate"
          className="background background-7"
        >
          <img src={smallCloudDarkMode} alt="small cloud" />
        </motion.div>
      )}
    </Wrapper>
  )
}

export default HeroImagesBackground
