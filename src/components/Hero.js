import React, { useState, useEffect } from "react"
import styled from "styled-components"
import HeroImagesBackground from "./HeroImagesBackground"
import { light, lightDarkMode } from "../assets/images/index"
import { FaBars } from "react-icons/fa"
import { motion, useViewportScroll, useTransform } from "framer-motion"

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

const Hero = ({ theme, toggleTheme, toggleMenu }) => {
  const { scrollYProgress } = useViewportScroll()
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100 * 5])

  // useEffect(() => {
  //   scrollYProgress.onChange(latest => {
  //     // console.log(latest)
  //     console.log(latest)
  //   })
  // }, [])

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
        {/* menu button */}
        <motion.button
          initial={{ opacity: 0, rotate: "0deg" }}
          animate={{ opacity: 1, rotate: "180deg" }}
          transition={{ delay: 1 }}
          whileHover={{
            boxShadow: "0px 0px 8px rgb(245, 201, 194)",
          }}
          className="btn menu-btn"
          onClick={() => toggleMenu()}
        >
          <span>
            <FaBars />
          </span>
        </motion.button>
        {/* text */}
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
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.{" "}
            </h4>
            <button className="btn btn-outlined">resume</button>
          </div>
        </motion.div>
        {/* images */}
        <HeroImagesBackground theme={theme} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 75rem;
  width: 100%;
  background-color: var(--color-background-2);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  overflow: hidden;

  .hero {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    height: 100%;
    padding: 0 3.2rem;

    .dark-light-mode-btn {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    .menu-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background-color: var(--color-accent-pink);
      padding: 2.4rem;
      border-radius: 50%;
      z-index: 8;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: var(--color-light-pink);
      }
    }
  }

  @media only screen and (max-width: 75em) {
    .hero {
      .dark-light-mode-btn {
        transform: translate(10%, -50%);
      }
    }
  }

  @media only screen and (max-width: 56.25em) {
    h1 {
      font-size: 2.4rem;

      span {
        font-size: 2.8rem;
      }
    }

    h4 {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 37.5em) {
    .btn-outlined {
      margin-top: 2rem;
    }
    .hero {
      grid-template-columns: 3fr 1fr;
    }
    h4 {
      display: none;
    }
  }
`

export default Hero
