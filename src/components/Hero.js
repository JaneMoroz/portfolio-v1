import React, { useState } from "react"
import styled from "styled-components"
import background1 from "../assets/images/Background-1.svg"
import background2 from "../assets/images/Background-2.svg"
import background3 from "../assets/images/Background-3.svg"
import background4 from "../assets/images/Background-4.svg"
import background5 from "../assets/images/Background-5.svg"
import background6 from "../assets/images/Background-6.svg"
import background7 from "../assets/images/Background-7.svg"
import light from "../assets/images/Light.svg"
import background1DarkMode from "../assets/images/Background-1-dark-mode.svg"
import background2DarkMode from "../assets/images/Background-2-dark-mode.svg"
import background3DarkMode from "../assets/images/Background-3-dark-mode.svg"
import background4DarkMode from "../assets/images/Background-4-dark-mode.svg"
import background5DarkMode from "../assets/images/Background-5-dark-mode.svg"
import background6DarkMode from "../assets/images/Background-6-dark-mode.svg"
import background7DarkMode from "../assets/images/Background-7-dark-mode.svg"
import lightDarkMode from "../assets/images/Light-dark-mode.svg"
import { FaBars } from "react-icons/fa"
import { motion } from "framer-motion"

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <Wrapper>
      <div className="hero container">
        {/* dark/light mode button */}
        <button
          className="btn dark-light-mode-btn"
          onClick={() => {
            setDarkMode(!darkMode)
          }}
        >
          {!darkMode && (
            <motion.img
              whileHover={{
                rotateZ: 5,
              }}
              src={light}
              alt="dark/light mode button"
            />
          )}
          {darkMode && (
            <motion.img
              whileHover={{
                rotateZ: 5,
              }}
              src={lightDarkMode}
              alt="dark/light mode button"
            />
          )}
        </button>
        {/* menu button */}
        <motion.button
          whileHover={{
            boxShadow: "0px 0px 8px rgb(245, 201, 194)",
          }}
          className="btn menu-btn"
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
        <div className="hero-images">
          {/* small hill with plant */}
          {!darkMode && (
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
              className="background background-1"
            >
              <img src={background1} alt="background 1" />
            </motion.div>
          )}
          {darkMode && (
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
              className="background background-1"
            >
              <img src={background1DarkMode} alt="background 1" />
            </motion.div>
          )}
          {/* girl */}
          {!darkMode && (
            <motion.div
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 1,
              }}
              className="background background-2"
            >
              <img src={background2} alt="background 2" />
            </motion.div>
          )}
          {darkMode && (
            <motion.div
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 1,
              }}
              className="background background-2-dark-mode"
            >
              <img src={background2DarkMode} alt="background 2" />
            </motion.div>
          )}
          {/* big hill */}
          {!darkMode && (
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              className="background background-3"
            >
              <img src={background3} alt="background 3" />
            </motion.div>
          )}
          {darkMode && (
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              className="background background-3"
            >
              <img src={background3DarkMode} alt="background 3" />
            </motion.div>
          )}
          {/* tree */}
          {!darkMode && (
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="background background-4"
            >
              <img src={background4} alt="background 4" />
            </motion.div>
          )}
          {darkMode && (
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="background background-4"
            >
              <img src={background4DarkMode} alt="background 4" />
            </motion.div>
          )}
          {/* big cloud */}
          {!darkMode && (
            <div className="background background-5">
              <img src={background5} alt="background 5" />
            </div>
          )}
          {darkMode && (
            <div className="background background-5">
              <img src={background5DarkMode} alt="background 5" />
            </div>
          )}
          {/* sun/moon */}
          {!darkMode && (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="background background-6"
            >
              <img src={background6} alt="background 6" />
            </motion.div>
          )}
          {darkMode && (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="background background-6"
            >
              <img src={background6DarkMode} alt="background 6" />
            </motion.div>
          )}
          {/* small cloud */}
          {!darkMode && (
            <div className="background background-7">
              <img src={background7} alt="background 7" />
            </div>
          )}
          {darkMode && (
            <div className="background background-7">
              <img src={background7DarkMode} alt="background 7" />
            </div>
          )}
        </div>
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
      top: 0;
      left: 0;
      transform: translate(0%, -50%);
    }

    @media only screen and (max-width: 75em) {
      .dark-light-mode-btn {
        transform: translate(10%, -50%);
      }
    }

    .menu-btn {
      position: absolute;
      top: 0;
      left: 100%;
      transform: translate(-80%, 30%);
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

  .hero-text {
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
      h4 {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 37.5em) {
    .btn-outlined {
      margin-top: 2rem;
    }
    .hero {
      grid-template-columns: 3fr 1fr;
    }
  }

  .hero-images {
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

    @media only screen and (max-width: 56.25em) {
      .background-1 {
        top: 65%;
        left: -160%;
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-1 {
        top: 70%;
        left: -550%;
      }
    }

    // girl
    .background-2 {
      top: 45%;
      left: 30%;
      z-index: 6;
    }

    @media only screen and (max-width: 56.25em) {
      .background-2 {
        left: 0;
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-2 {
        top: 50%;
        left: -90%;
      }
    }

    .background-2-dark-mode {
      top: 30%;
      left: 10%;
      z-index: 6;
    }

    @media only screen and (max-width: 56.25em) {
      .background-2-dark-mode {
        left: 0;
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-2-dark-mode {
        top: 45%;
        left: -90%;
      }
    }

    // big hill
    .background-3 {
      top: 45%;
      left: -5%;
      z-index: 5;
    }

    @media only screen and (max-width: 56.25em) {
      .background-3 {
        top: 50%;
        left: -85%;
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-3 {
        top: 55%;
        left: -300%;
      }
    }

    // tree
    .background-4 {
      top: 10%;
      left: 0;
      z-index: 4;
    }

    @media only screen and (max-width: 56.25em) {
      .background-4 {
        display: none;
      }
    }

    // big cloud
    .background-5 {
      top: 15%;
      left: 5%;
      z-index: 3;
    }

    @media only screen and (max-width: 56.25em) {
      .background-5 {
        display: none;
      }
    }

    // sun/moon
    .background-6 {
      top: -80%;
      left: 60%;
      z-index: 2;
    }

    @media only screen and (max-width: 37.5em) {
      .background-6 {
        left: 0;
      }
    }

    // small cloud
    .background-7 {
      top: 0;
      left: 0;
      transform: translate(0, 5%);
      z-index: 1;
    }

    @media only screen and (max-width: 56.25em) {
      .background-7 {
        transform: translate(-40%, 5%);
      }
    }
  }
`

export default Hero
