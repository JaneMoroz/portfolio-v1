import React from "react"
import Wrapper from "../assets/wrappers/Hero"
import { HeroImagesBackground } from "./"
import { light, lightDarkMode } from "../assets/images"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { useGlobalContext } from "../context/context"

// Lamp infinite animation
const lampVariant = {
  animate: {
    rotateZ: [5, -5],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
    },
  },
}

const Hero = () => {
  const { theme, toggleTheme } = useGlobalContext()
  // Parallax
  const { scrollYProgress } = useViewportScroll()
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100 * 5])

  return (
    <Wrapper id="home">
      <div className="hero container">
        {/* dark/light mode button */}
        <button
          className="btn dark-light-mode-btn"
          onClick={() => {
            toggleTheme()
          }}
        >
          {theme === "light-theme" && (
            <motion.img
              variants={lampVariant}
              animate="animate"
              src={light}
              alt="dark/light mode button"
            />
          )}
          {theme === "dark-theme" && (
            <motion.img
              variants={lampVariant}
              animate="animate"
              src={lightDarkMode}
              alt="dark/light mode button"
            />
          )}
        </button>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hero-text"
          style={{ y: yText }}
        >
          <div className="text-box">
            <h1>
              Hi, my name is <span>Jane</span>.
            </h1>
            <h1>I build things for the web.</h1>
            <h4>
              I’m a web developer who is passionate about technology, learning
              new things and creating truly beautiful and efficient digital
              products.
            </h4>
            <button className="btn btn-outlined">resume</button>
          </div>
        </motion.div>
        {/* images */}
        <HeroImagesBackground />
      </div>
    </Wrapper>
  )
}

export default Hero
