import React from "react"
import Wrapper from "../assets/wrappers/Hero"
import { HeroImagesBackground } from "./"
import { light, lightDarkMode } from "../assets/images"
import { motion, useScroll, useTransform } from "framer-motion"
import { useGlobalContext } from "../context/context"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"

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
  // const page = window.location.pathname
  const { theme, toggleTheme, page } = useGlobalContext()
  // Parallax
  const { scrollYProgress } = useScroll()
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
              <FormattedMessage
                id="greetings"
                defaultMessage="Hi, my name is "
              />
              <span className={page === "/ru" ? "no-cursive" : ""}>
                <FormattedMessage id="name" defaultMessage="Jane" />
              </span>
              .
            </h1>
            <h1>
              <FormattedMessage
                id="more-info"
                defaultMessage="I build things for the web."
              />
            </h1>
            <h4>
              <FormattedMessage
                id="sub-more-info"
                defaultMessage="I’m a web developer who is passionate about technology, learning
              new things and creating truly beautiful and efficient digital
              products."
              />
            </h4>
            <div className="btns-container">
              <button className="btn btn-outlined">
                <FormattedMessage id="cv-btn" defaultMessage="resume" />
              </button>
              <Link
                to={page === "/ru" ? "/" : "/ru"}
                className="btn btn-outlined btn-language"
              >
                {page === "/ru" ? "Английский" : "Russian"}
              </Link>
            </div>
          </div>
        </motion.div>
        {/* images */}
        <HeroImagesBackground />
      </div>
    </Wrapper>
  )
}

export default Hero
