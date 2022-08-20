import React from "react"
import Wrapper from "../../assets/wrappers/HeroImagesBackground"
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
} from "../../assets/images"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useGlobalContext } from "../../context/context"
import {
  fromBottomVariant,
  fromRightVariant,
  expandingVariant,
  bigCloudVariant,
  smallCloudVariant,
} from "../../utils/animation"

const HeroImagesBackground = () => {
  const { theme } = useGlobalContext()
  // Parallax
  const { scrollYProgress } = useScroll()
  const yBackground1 = useTransform(scrollYProgress, [0, 1], [0, 100 * -5])
  const yBackground2 = useTransform(scrollYProgress, [0, 1], [0, 100 * -2])
  const yBackground3 = useTransform(scrollYProgress, [0, 1], [0, 100 * 1])
  const yBackground4 = useTransform(scrollYProgress, [0, 1], [0, 100 * 3])

  if (theme === undefined) {
    return <Wrapper></Wrapper>
  }

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
      <motion.div
        variants={bigCloudVariant}
        animate="animate"
        className="background background-5"
      >
        <img
          src={theme === "light-theme" ? bigCloud : bigCloudDarkMode}
          alt="big cloud"
        />
      </motion.div>
      {/* sun/moon */}
      <motion.div
        variants={expandingVariant}
        initial="hidden"
        animate="visible"
        className="background background-6"
      >
        <img src={theme === "light-theme" ? sun : moon} alt="sun" />
      </motion.div>
      {/* small cloud */}
      <motion.div
        variants={smallCloudVariant}
        animate="animate"
        className="background background-7"
      >
        <img
          src={theme === "light-theme" ? smallCloud : smallCloudDarkMode}
          alt="small cloud"
        />
      </motion.div>
    </Wrapper>
  )
}

export default HeroImagesBackground
