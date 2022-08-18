import React from "react"
import Wrapper from "../../assets/wrappers/FooterImagesBackground"
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
} from "../../assets/images"
import { motion } from "framer-motion"
import { useGlobalContext } from "../../context/context"
import {
  bigHillVariant,
  smallHillVariant,
  girlVariant,
  treeVariant,
} from "../../utils/animation"

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
      <motion.div
        variants={girlVariant}
        initial="hidden"
        whileInView="visible"
        className="background background-2"
      >
        <img
          src={theme === "light-theme" ? girlFooter : girlFooterDarkMode}
          alt="girl is waving her hand happily"
        />
      </motion.div>
      {/* small hill right */}
      <motion.div
        variants={smallHillVariant}
        initial="hidden"
        whileInView="visible"
        className="background background-3"
      >
        <img
          src={theme === "light-theme" ? smallHill : smallHillDarkMode}
          alt="small hill"
        />
      </motion.div>
      {/* big hill left */}
      <motion.div
        variants={bigHillVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="background background-4"
      >
        <img
          src={theme === "light-theme" ? bigHill : bigHillDarkMode}
          alt="big hill"
        />
      </motion.div>
      {/* tree */}
      <motion.div
        variants={treeVariant}
        initial="hidden"
        whileInView="visible"
        className="background background-5"
      >
        <img src={theme === "light-theme" ? tree2 : tree2DarkMode} alt="tree" />
      </motion.div>
    </Wrapper>
  )
}

export default FooterImagesBackground
