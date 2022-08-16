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

  // If light-theme
  if (theme === "light-theme") {
    return (
      <Wrapper>
        {/* small hill with plant */}
        <AnimatePresence>
          <motion.div
            key="lt-sm-hill"
            variants={fromBottomVariant}
            initial="hiddenHill"
            animate="visibleThird"
            className="background background-1"
            style={{ y: yBackground1 }}
          >
            <img src={smallHill} alt="small hill with plant" />
          </motion.div>
          {/* girl */}
          <motion.div
            key="lt-girl"
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
          {/* big hill */}
          <motion.div
            key="lt-big-hill"
            variants={fromBottomVariant}
            initial="hiddenHill"
            animate="visibleFirst"
            className="background background-3"
            style={{ y: yBackground3 }}
          >
            <img src={bigHill} alt="big hill" />
          </motion.div>
          {/* tree */}
          <motion.div
            key="lt-tree"
            variants={fromBottomVariant}
            initial="hiddenTree"
            animate="visibleSecond"
            className="background background-4"
            style={{ y: yBackground4 }}
          >
            <img src={tree} alt="tree" />
          </motion.div>
          {/* big cloud */}
          <motion.div
            key="lt-big-cloud"
            variants={bigCloudVariant}
            animate="animate"
            className="background background-5"
          >
            <img src={bigCloud} alt="big cloud" />
          </motion.div>
          {/* sun/moon */}
          <motion.div
            key="lt-sun"
            variants={expandingVariant}
            initial="hidden"
            animate="visible"
            className="background background-6"
          >
            <img src={sun} alt="sun" />
          </motion.div>
          {/* small cloud */}
          <motion.div
            key="lt-small-cloud"
            variants={smallCloudVariant}
            animate="animate"
            className="background background-7"
          >
            <img src={smallCloud} alt="small cloud" />
          </motion.div>
        </AnimatePresence>
      </Wrapper>
    )
  }

  // If dark-theme
  if (theme === "dark-theme") {
    return (
      <Wrapper>
        <AnimatePresence>
          {/* small hill with plant */}
          <motion.div
            key="dt-sm-hill"
            variants={fromBottomVariant}
            initial="hiddenHill"
            animate="visibleThird"
            className="background background-1"
            style={{ y: yBackground1 }}
          >
            <img src={smallHillDarkMode} alt="small hill with plant" />
          </motion.div>
          {/* girl */}
          <motion.div
            key="dt-girl"
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
          {/* big hill */}
          <motion.div
            key="dt-big-hill"
            variants={fromBottomVariant}
            initial="hiddenHill"
            animate="visibleFirst"
            className="background background-3"
            style={{ y: yBackground3 }}
          >
            <img src={bigHillDarkMode} alt="big hill" />
          </motion.div>
          {/* tree */}
          <motion.div
            key="dt-tree"
            variants={fromBottomVariant}
            initial="hiddenTree"
            animate="visibleSecond"
            className="background background-4"
            style={{ y: yBackground4 }}
          >
            <img src={treeDarkMode} alt="tree" />
          </motion.div>
          {/* big cloud */}
          <motion.div
            key="dt-big-cloud"
            variants={bigCloudVariant}
            animate="animate"
            className="background background-5"
          >
            <img src={bigCloudDarkMode} alt="big cloud" />
          </motion.div>
          {/* sun/moon */}
          <motion.div
            key="dt-moon"
            variants={expandingVariant}
            initial="hidden"
            animate="visible"
            className="background background-6"
          >
            <img src={moon} alt="moon" />
          </motion.div>
          {/* small cloud */}
          <motion.div
            key="dt-small-cloud"
            variants={smallCloudVariant}
            animate="animate"
            className="background background-7"
          >
            <img src={smallCloudDarkMode} alt="small cloud" />
          </motion.div>
        </AnimatePresence>
      </Wrapper>
    )
  }
}

export default HeroImagesBackground
