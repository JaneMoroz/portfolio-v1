import React from "react"
import styled from "styled-components"
import background1 from "../assets/images/Background-1.svg"
import background2 from "../assets/images/Background-2.svg"
import background3 from "../assets/images/Background-3.svg"
import background4 from "../assets/images/Background-4.svg"
import background5 from "../assets/images/Background-5.svg"
import background6 from "../assets/images/Background-6.svg"
import background7 from "../assets/images/Background-7.svg"
import light from "../assets/images/Light.svg"
import { FaBars } from "react-icons/fa"

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero container">
        {/* dark/light mode button */}
        <button className="btn dark-light-mode-btn">
          <img src={light} alt="dark/light mode button" />
        </button>
        {/* menu button */}
        <button className="btn menu-btn">
          <span>
            <FaBars />
          </span>
        </button>
        {/* text */}
        <div className="hero-text">
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
        </div>
        {/* images */}
        <div className="hero-images">
          {/* small hill with plant */}
          <div className="background background-1">
            <img src={background1} alt="background 1" />
          </div>
          {/* girl */}
          <div className="background background-2">
            <img src={background2} alt="background 2" />
          </div>
          {/* big hill */}
          <div className="background background-3">
            <img src={background3} alt="background 3" />
          </div>
          {/* tree */}
          <div className="background background-4">
            <img src={background4} alt="background 4" />
          </div>
          {/* big cloud */}
          <div className="background background-5">
            <img src={background5} alt="background 5" />
          </div>
          {/* sun/moon */}
          <div className="background background-6">
            <img src={background6} alt="background 6" />
          </div>
          {/* small cloud */}
          <div className="background background-7">
            <img src={background7} alt="background 7" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 75rem;
  width: 100%;
  background-color: var(--color-background-2);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

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
      top: 0;
      left: 0;
      transform: translate(25%, 90%);
      z-index: 7;
    }

    @media only screen and (max-width: 56.25em) {
      .background-1 {
        transform: translate(5%, 50%);
        z-index: 4;
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-1 {
        transform: translate(-65%, 80%);
      }
    }

    // girl
    .background-2 {
      top: 0;
      left: 0;
      transform: translate(35%, 155%);
      z-index: 6;
    }

    @media only screen and (max-width: 56.25em) {
      .background-2 {
        transform: translate(10%, 155%);
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-2 {
        transform: translate(-10%, 155%);
      }
    }

    // big hill
    .background-3 {
      top: 0;
      left: 0;
      transform: translate(-10%, 90%);
      z-index: 5;
    }

    @media only screen and (max-width: 56.25em) {
      .background-3 {
        transform: translate(-20%, 90%);
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-3 {
        transform: translate(-40%, 90%);
      }
    }

    // tree
    .background-4 {
      top: 0;
      left: 0;
      transform: translate(0, 15%);
      z-index: 4;
    }

    @media only screen and (max-width: 56.25em) {
      .background-4 {
        display: none;
      }
    }

    // big cloud
    .background-5 {
      top: 0;
      left: 0;
      transform: translate(20%, 100%);
      z-index: 3;
    }

    @media only screen and (max-width: 37.5em) {
      .background-5 {
        transform: translate(-10%, 100%);
      }
    }

    // sun/moon
    .background-6 {
      top: 0;
      left: 0;
      transform: translate(50%, -70%);
      z-index: 2;
    }

    @media only screen and (max-width: 75em) {
      .background-6 {
        transform: translate(40%, -70%);
      }
    }

    @media only screen and (max-width: 56.25em) {
      .background-6 {
        transform: translate(10%, -70%);
      }
    }

    @media only screen and (max-width: 37.5em) {
      .background-6 {
        transform: translate(-5%, -70%);
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
