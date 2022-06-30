import React from "react"
import styled from "styled-components"
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
} from "../assets/images/index"
import { motion, useViewportScroll, useTransform } from "framer-motion"

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

// Cloud animation
const cloudVariant = {
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

const HeroImagesBackground = ({ theme }) => {
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
          variants={cloudVariant}
          animate="animate"
          className="background background-5"
        >
          <img src={bigCloud} alt="big cloud" />
        </motion.div>
      )}
      {theme === "dark-theme" && (
        <motion.div
          variants={cloudVariant}
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
        <div className="background background-7">
          <img src={smallCloud} alt="small cloud" />
        </div>
      )}
      {theme === "dark-theme" && (
        <div className="background background-7">
          <img src={smallCloudDarkMode} alt="small cloud" />
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .background {
    position: absolute;
  }

  // small hill with plant
  .background-1 {
    top: 60%;
    left: 20%;
    z-index: 7;
  }

  // girl-1
  .background-2 {
    top: 45%;
    left: 30%;
    z-index: 6;
  }

  // girl-2
  .background-2-dark-mode {
    top: 35%;
    left: 15%;
    z-index: 6;
  }

  // big hill
  .background-3 {
    top: 45%;
    left: -5%;
    z-index: 5;
  }

  // tree
  .background-4 {
    top: 10%;
    left: 0;
    z-index: 4;
  }

  // big cloud
  .background-5 {
    top: 15%;
    left: 5%;
    z-index: 3;
  }

  // sun/moon
  .background-6 {
    top: -80%;
    left: 60%;
    z-index: 2;
  }

  // small cloud
  .background-7 {
    top: 2%;
    left: -5%;
    z-index: 1;
  }

  @media only screen and (max-width: 56.25em) {
    .background-1 {
      top: 65%;
      left: -160%;
    }

    .background-2 {
      left: 0;
    }

    .background-2-dark-mode {
      left: 0;
    }

    .background-3 {
      top: 50%;
      left: -85%;
    }

    .background-4 {
      display: none;
    }

    .background-5 {
      display: none;
    }

    .background-7 {
      top: 10%;
      left: -5%;
    }
  }

  @media only screen and (max-width: 37.5em) {
    .background-1 {
      top: 70%;
      left: -550%;
    }

    .background-2 {
      top: 50%;
      left: -90%;
    }

    .background-2-dark-mode {
      top: 45%;
      left: -90%;
    }

    .background-3 {
      top: 55%;
      left: -300%;
    }

    .background-6 {
      left: 0;
    }

    .background-7 {
      top: 10%;
      left: -150%;
    }
  }
`

export default HeroImagesBackground
